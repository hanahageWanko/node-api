const actions = {
  getGlossary({ commit }, glossary) {
    commit('setGlossaryMutation', glossary)
  },
  getDetail({ commit }, id) {
    commit('setDetailMutation', id)
  },
  getClearDetail({ commit }) {
    commit('setClearDetailMutation')
  },
  addGlossary({ commit }, glossary) {
    commit('addGlossaryMutation', glossary)
  },
  updateGlossary({ commit }, glossary) {
    commit('updadateGlossaryMutation', glossary)
  },
  deleteGlossary({ commit }, id) {
    commit('deleteGlossaryMutation', id)
  }
}

export default actions
