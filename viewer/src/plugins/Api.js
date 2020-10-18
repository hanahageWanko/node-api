import axios from 'axios'
const HTTP = axios.create({
  baseURL: process.env.VUE_APP_ENDPOINT
})

export default {
  getGlossaryList () {
    return HTTP.get()
      .then(res => {console.log(res); return res})
      .catch(res => {console.error(res)})
  },
  getGlossary(id) {
    return HTTP.get(`/edit/${id}`)
      .then(res => {return res})
      .catch(res => {console.error(res)})
  }
}