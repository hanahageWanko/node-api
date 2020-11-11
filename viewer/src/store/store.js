import Vue from 'vue'
import Vuex from 'vuex'
import glossary from './glossary'
import user from './user'

Vue.use(Vuex)

//  Store 定義
const store = new Vuex.Store({
  modules: {
    glossary,
    user
  }
})

export default store
