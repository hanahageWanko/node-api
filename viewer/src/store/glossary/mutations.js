export default {
  setGlossaryMutation: async (state, glossary) => {
    await state.GlossaryList.push(...glossary)
  },
  addGlossaryMutation: async (state, glossary) => {
    await state.GlossaryList.push(glossary)
  },
  updadateGlossaryMutation: async (state, glossary) => {
    for (let i = 0; i < state.GlossaryList.length; i++) {
      if (state.GlossaryList[i].id === Number(glossary.id)) {
        await state.GlossaryList.splice(i, 1, glossary)
      }
    }
  },
  deleteGlossaryMutation: async (state, id) => {
    for (let i = 0; i < state.GlossaryList.length; i++) {
      if (state.GlossaryList[i].id === id) {
        await state.GlossaryList.splice(i, 1)
      }
    }
  }
}
