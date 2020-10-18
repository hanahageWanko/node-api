<template>
  <div class="note">
    <h2 class="note-title">{{glossary.title}}</h2>
    <div class="note-description">{{glossary.description}}</div>
  </div>
</template>

<script>
import Api from '@/plugins/Api'
export default {
  name: 'GlossaryDetail',
    data() {
    return{
     glossary:[]
    }
  },
  methods: {
    // サーバーから返ってくる値をログに出力したいのでasyncとawaitを行う
    post :async function() {
      let response = await Api.getGlossary(16)
      const { data } = response;
      console.log(data.result[0])
      this.glossary = data.result[0];
    },
  },
  mounted(){
    this.post();
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
