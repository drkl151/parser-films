// import axios from 'axios'
// import cheerio from 'cheerio'

// export default function getTorrents(name) {
//   return axios
//     .get(`${encodeURI(`http://rutor.info/search/0/0/000/0/${name}`)}`)
//     .then(({ data }) => {
//       const $ = cheerio.load(data)
//       const torrents = []

//       $('#index table tr td:nth-child(2n) a:nth-child(3)')
//         .slice(0, 3)
//         .each((i, el) => {
//           const $element = $(el)

//           torrents.push(`http://rutor.info${$element.attr('href')}`)
//         })

//       return torrents
//     })
// }
