import actions from './actions'
import mutations from './mutations'

export const state = () => ({
  GlossaryState: [],
  CurrentGlossary: []
})

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
