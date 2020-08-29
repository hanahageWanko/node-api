<template>
  <div class="note">{{glossary}}</div>
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
.glossary-list {
  margin: 10px;
  padding: 15px;
  border-radius: 7px;
  background-color: #1D1E1B;
  cursor:pointer;
}
.glossary-list-title {
  font-size:130%;
  font-weight: bold;
  margin-bottom: 5px;
}
ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  overflow-y:scroll;
  height:100vh;
  padding: 10px;
}
li {
  display: inline-block;
  margin: 10px;
}
a {
  color: #42b983;
}
</style>
