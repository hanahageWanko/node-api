const actions = {
  getGlossary({commit}) {
    commit("setGlossaryMutation");
  },
  getDetail({commit}, id) {
    commit("setDetailMutation", id);
  },
  getClearDetail({commit}) {
    commit("setClearDetailMutation");
  },
  updateGlossary({commit}, glossary) {
    commit("updadateGlossaryMutation", glossary);
  }
}

export default actions;