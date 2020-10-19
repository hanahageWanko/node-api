<template>
  <div class="note">
    <h2 class="note-title">{{glossary.title}}</h2>
    <div class="note-description">{{glossary.description}}</div>
    <UiButton>更新</UiButton>
    <UiButton color="orange">削除</UiButton>
  </div>
</template>

<script>
import Api from '@/plugins/Api'
import UiButton from '@/components/UiButton'
export default {
  name: 'GlossaryDetail',
  components: {
    UiButton
  },
  data() {
    return{
     glossary:[]
    }
  },
  props: ['postCurrentId'],
  watch: {
    postCurrentId() {
      this.post(this.postCurrentId)
    }
  },
  methods: {
    // サーバーから返ってくる値をログに出力したいのでasyncとawaitを行う
    post :async function(id) {
      let response = await Api.getGlossary(id);
      const { data } = response;
      this.glossary = data.result[0];
    },
  },
  mounted(){
    this.post(this.postCurrentId);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.note {
  box-sizing: border-box;
  padding: 17px;
}
</style>
