const actions = {
  getGlossary({ commit }, glossary) {
    commit('setGlossaryMutation', glossary)
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
