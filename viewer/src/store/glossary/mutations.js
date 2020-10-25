import Api from '@/plugins/Api';

export default {
  setGlossaryMutation: async state => {
    let response = await Api.getGlossaryList()
    const { data } = response;
    state.GlossaryState.push(...data);
  },
  setDetailMutation: async (state, id) => {
    let response = await Api.getGlossary(id);
    const { data } = response;
    state.CurrentGlossary.push(data.result[0]);
  },
  setClearDetailMutation: async state => {
    await state.CurrentGlossary.splice(0);
  },
  updadateGlossaryMutation: async (state, glossary) => {
    await Api.updateGlossary( glossary, glossary.id);
    for(let i = 0; i < state.GlossaryState.length ; i++){
      if(state.GlossaryState[i].id === glossary.id) {
        state.GlossaryState.splice(i, 1, glossary);
      }
    }
  }
}