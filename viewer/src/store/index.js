import Vue from "vue";
import Vuex from "vuex";
import glossary from "./glossary";

Vue.use(Vuex);

//  Store 定義
const store = new Vuex.Store({
  modules: {
    glossary,
  }
});

console.log(store)

export default store;