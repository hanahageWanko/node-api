import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import Api from '@/plugins/Api';


Vue.use(Vuex);

const state = {
  GlossaryState: []
};

//  Store 定義
const store = new Vuex.Store({
  state,
  mutations: {
    setGlossary: async function (state) {
      let response =  await Api.getGlossaryList()
      const { data } = response;
      state.GlossaryState.push(data);
    }
  },
  actions
});

export default store;