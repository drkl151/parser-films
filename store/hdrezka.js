import axios from 'axios'
import { io } from 'socket.io-client'

const socket = io(process.env.baseUrl, {
  transports: ['websocket'],
  upgrade: false,
})

export const state = () => ({
  films: [],
  isRequest: false,
  isLoadingUrl: false,
})

export const actions = {
  loadSocket({ commit }) {
    socket.on('connect', () => {
      return null;
    })

    socket.on('disconnect', () => {
      socket.removeAllListeners()
    })

    socket.on('films', (films) => {
      try {
        commit(
          'films',
          films.filter((movie) => movie)
        )
      } catch (e) {
        console.log(e)
      } finally {
        commit('changeIsRequest', false)
      }
    })

    socket.on('url', (options) => {
      try {
        commit('setM3u8Url', { ...options, isUrlLoading: false })
      } catch (e) {
        console.log(e)
      }
    })
  },

  async parse({ commit }, url) {
    try {
      commit('changeIsRequest', true)
      await axios.post(`${process.env.baseUrl}/films`, { url })
    } catch (e) {
      console.error(e)
    }
  },

  async getUrl({ commit }, options) {
    try {
      const { url: filmUrl } = options

      commit('setM3u8Url', { m3u8Url: '', filmUrl, isUrlLoading: true })

      await axios.post(`${process.env.baseUrl}/url`, options)
    } catch (e) {
      console.log(e)
    }
  },
}

export const mutations = {
  changeIsRequest(state, isRequest) {
    state.isRequest = isRequest
  },
  films(state, films) {
    state.films = films
  },
  changeTranslateValue(state, { url, value }) {
    state.films = state.films.map((film) => {
      if (film.url === url) {
        film.translate = value
      }

      return film
    })
  },
  changeQualityValue(state, { url, value }) {
    state.films = state.films.map((film) => {
      if (film.url === url) {
        film.quality = value
      }

      return film
    })
  },
  setM3u8Url(state, { m3u8Url, filmUrl, isUrlLoading }) {
    state.isLoadingUrl = isUrlLoading;
    
    state.films = state.films.map((film) => {
      if (film.url === filmUrl) {
        film.m3u8Url = m3u8Url
      }

      return film
    })
  },
}

export const getters = {
  isRequest: ({ isRequest }) => isRequest,
  films: ({ films }) => films,
  isLoadingUrl: ({ isLoadingUrl }) => isLoadingUrl
}
