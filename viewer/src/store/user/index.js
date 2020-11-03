import actions from './actions'
import mutations from './mutations'

export const state = () => ({
  userName: ''
})

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
