// import axios from 'axios'
// import cheerio from 'cheerio'

// // import getTorrents from '../utils/getTorrents.js'

export const state = () => ({
  films: [],
})

// export const actions = {
//   parse({ commit, dispatch }) {
//     const urlSite = 'https://kinobase.org/films?sort=viewed_week'

//     axios
//       .get(urlSite)
//       .then(({ data }) => {
//         const $ = cheerio.load(data)
//         const allFilms = []

//         // получение массива популярных фильмов
//         $('.col-xs-2').each((i, el) => {
//           const $element = $(el)

//           allFilms.push(
//             // eslint-disable-next-line no-undef
//             `https://kinobase.org/${$element.find('a').attr('href')}`
//           )
//         })

//         // парсинг каждого фильма отдельно
//         return allFilms
//       })
//       .then((films) => {
//         const allParseFilms = []

//         films.forEach((film) => {
//           axios.get(film).then(({ data }) => {
//             const $ = cheerio.load(data)
//             const filmPoster = $('.data.clearfix .poster img').attr('src')

//             const infoBlock = $('.list-unstyled.details li')
//             const name = $('h1')
//             const alternativeName = $('h4.alternative_title')
//             const description = $('div.body[itemprop="description"]')
//             const fullInfo = {
//               Название: name.text(),
//               АльтернативноеНазвание: alternativeName.text(),
//               Постер: filmPoster,
//               Описание: description.text(),
//             }

//             infoBlock.each((i, el) => {
//               const $element = $(el)
//               const splitElement = $element.text().split(': ')

//               fullInfo[splitElement[0]] = splitElement[1].trim()
//             })

//             allParseFilms.push(fullInfo)
//           })
//         })

//         return allParseFilms
//       })
//       .then((films) => {
//         setTimeout(() => {
//           commit('setFilms', films)
//         }, 1300)
//       })
//   },
// }

// export const mutations = {
//   setFilms(state, films) {
//     state.films = films
//   },
// }

export const getters = {
  films: ({ films }) => films,
}
