const actions = {
  getGlossary({commit}) {
    commit("setGlossary");
  },
  getDetail({commit}, id) {
    console.log(id)
    commit("setDetail", id);
  },
  getClearDetail({commit}) {
    commit("setClearDetail");
  }
}

export default actions;