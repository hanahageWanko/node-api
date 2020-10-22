import Api from '@/plugins/Api';

export default {
  setGlossary: async (state) => {
    let response = await Api.getGlossaryList()
    const { data } = response;
    state.GlossaryState.push(data);
  },
  setDetail: async (state, id) => {
    let response = await Api.getGlossary(id);
    const { data } = response;
    state.CurrentGlossary.push(data);
  },
  setClearDetail: async (state) => {
    await state.CurrentGlossary.splice(0);
  }
}