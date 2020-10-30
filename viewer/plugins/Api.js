import axios from 'axios'
// import { ERROR } from 'jest-validate/build/utils';
const HTTP = axios.create({
  baseURL: process.env.VUE_APP_ENDPOINT
})

export default {
  getGlossaryList: () => {
    return HTTP.get()
      .then((res) => {
        return res
      })
      .catch((res) => {
        return res
      })
  },
  getGlossary: (id) => {
    return HTTP.get(`/edit/${id}`)
      .then((res) => {
        return res
      })
      .catch((res) => {
        return res
      })
  },
  addGlossary: (glossary) => {
    return HTTP.post('/add/', glossary)
      .then((res) => {
        return res
      })
      .catch((res) => {
        return res
      })
  },
  updateGlossary: (request, id) => {
    console.log([request, id])
    return HTTP.post(`/update/${id}`, request)
      .then((res) => {
        return res
      })
      .catch((res) => {
        return res
      })
  },
  deleteGlossary(id) {
    return HTTP.get(`/delete/${id}`)
      .then((res) => {
        return res
      })
      .catch((res) => {
        return res
      })
  }
}
