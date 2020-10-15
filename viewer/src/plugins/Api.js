import axios from 'axios'
const HTTP = axios.create({
  baseURL: process.env.VUE_APP_ENDPOINT
})

export default {
  getGlossaryList () {
    return HTTP.get()
      .then(res => {return res})
      .catch(res => {console.error(res)})
  },
  getGlossary(id) {
    return HTTP.get(`/edit/${id}`)
      .then(res => {return res})
      .catch(res => {console.error(res)})
  }
}


// import axios from 'axios';

// const HTTP = axios.create({ baseURL: process.env.API_ENDPOINT });

// export default function init(store, router) {
//   HTTP.interceptors.request.use((config) => {
//     config.headers = getHeader();
//     return config;
//   });

//   :

//   if (store.method !== undefined) {
//     return HTTP(store);
//   }

//   :

// }