import axios from 'axios'

export const state = () => ({
  films: [],
  isRequest: false,
})

export const actions = {
  async parse({ commit }, url) {
    try {
      commit('changeIsRequest', true)
      const { data } = await axios.post('https://test.luckyfreesoft.club/api/films', { url })
      commit(
        'films',
        data.movies.filter((movie) => movie)
      )
    } catch (e) {
      console.error(e)
    } finally {
      commit('changeIsRequest', false)
    }
  },

  async getUrl({ commit }, options) {
    try {
      const { url: filmUrl } = options

      commit('setM3u8Url', { m3u8Url: '', filmUrl })

      const {
        data: { m3u8Url },
      } = await axios.post('https://test.luckyfreesoft.club/api/url', options)

      commit('setM3u8Url', { m3u8Url, filmUrl })
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
  setM3u8Url(state, { m3u8Url, filmUrl }) {
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
}
