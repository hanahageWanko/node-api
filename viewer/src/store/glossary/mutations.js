import api from '@/plugins/api'

export default {
  setGlossaryMutation: async (state) => {
    const response = await api.getGlossaryList()
    const { data } = response
    state.GlossaryState.push(...data)
  },
  setDetailMutation: async (state, id) => {
    const response = await api.getGlossary(id)
    const { data } = response
    state.CurrentGlossary.push(data.result[0])
  },
  setClearDetailMutation: async (state) => {
    await state.CurrentGlossary.splice(0)
  },
  addGlossaryMutation: async (state, glossary) => {
    const response = await api.addGlossary(glossary)
    const { data } = response
    state.GlossaryState.push(data)
  },
  updadateGlossaryMutation: async (state, glossary) => {
    await api.updateGlossary(glossary, glossary.id)
    for (let i = 0; i < state.GlossaryState.length; i++) {
      if (state.GlossaryState[i].id === glossary.id) {
        state.GlossaryState.splice(i, 1, glossary)
      }
    }
  },
  deleteGlossaryMutation: async (state, id) => {
    await api.deleteGlossary(id)
    for (let i = 0; i < state.GlossaryState.length; i++) {
      if (state.GlossaryState[i].id === id) {
        state.GlossaryState.splice(i, 1)
      }
    }
  }
}
