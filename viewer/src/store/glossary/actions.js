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
  },
  deleteGlossary({commit}, id) {
    commit("deleteGlossaryMutation", id);
  }
}

export default actions;