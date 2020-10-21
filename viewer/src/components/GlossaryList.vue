<template>
  <div class="all-glossary-list">
    <ul>
      <li v-for="list in GlossaryState[0]" :key="list.id" class="glossary-list" @click="openGlossaryDetail(list.id)">
        <div class="glossary-list-title">{{list.title}}</div>
        <div class="glossary-list-dexcription">{{list.description}}</div>
      </li>
    </ul>

  </div>
</template>

<script>
// import Api from '@/plugins/Api'
import { mapState } from "vuex"
export default {
  name: 'HelloWorld',
  data() {
    return{}
  },
  computed: {
    ...mapState([
      "GlossaryState"
    ])
  },
  methods: {
    // サーバーから返ってくる値をログに出力したいのでasyncとawaitを行う
    getGlossaryList() {
      // let response = await Api.getGlossaryList()
      // const { data } = response;
      // this.glossary = data;
      this.$store.dispatch('getGlossary');
      console.log(this.GlossaryState)
    },
    openGlossaryDetail(id) {
      this.$emit('getCurrentId', id);
      this.$router.push({ path: `/detail/${id}` }).catch(()=>{});
    }
  },
  mounted(){
    this.getGlossaryList();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.all-glossary-list {
  padding: 10px;
}

.all-glossary-list ul {
  margin-top: 0;
  box-sizing:border-box;
}

.glossary-list {
  padding: 15px;
  border-radius: 7px;
  background-color: #1D1E1B;
  cursor:pointer;
  box-sizing: border-box;
}
.glossary-list-title {
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
  margin-bottom: 10px;
}
a {
  color: #42b983;
}
</style>
