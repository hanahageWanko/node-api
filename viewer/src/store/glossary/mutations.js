// import api from '@/plugins/api'

export default {
  setGlossaryMutation: async (state, glossary) => {
    await state.GlossaryList.push(...glossary)
  },
  // setDetailMutation: async (state, id) => {
  //   const response = await api.getGlossary(id)
  //   const { data } = response
  //   state.CurrentGlossary.push(data.result[0])
  // },
  // setClearDetailMutation: async (state) => {
  //   await state.CurrentGlossary.splice(0)
  // },
  addGlossaryMutation: async (state, glossary) => {
    await state.GlossaryList.push(glossary)
  },
  // updadateGlossaryMutation: async (state, glossary) => {
  //   await api.updateGlossary(glossary, glossary.id)
  //   for (let i = 0; i < state.GlossaryList.length; i++) {
  //     if (state.GlossaryList[i].id === glossary.id) {
  //       state.GlossaryList.splice(i, 1, glossary)
  //     }
  //   }
  // },
  deleteGlossaryMutation: async (state, id) => {
    for (let i = 0; i < state.GlossaryList.length; i++) {
      if (state.GlossaryList[i].id === id) {
        await state.GlossaryList.splice(i, 1)
      }
    }
  }
}
