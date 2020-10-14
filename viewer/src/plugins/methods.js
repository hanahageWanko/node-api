import axios from 'axios'
const Axs = axios.create({
  baseURL: process.env.VUE_APP_ENDPOINT
})

export default {
  testPosting () {
    return Axs.get();
  }
  // 他の処理も追加可能
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