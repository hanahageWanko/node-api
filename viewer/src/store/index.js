import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  Glossary: []
};

//  Store 定義
const store = new Vuex.Store({
  state,
});

export default store;