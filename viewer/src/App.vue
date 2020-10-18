<template>
  <div id="app">
    <div id="wrapper">
      <GlossaryList @getCurrentId='id = $event' />
      <GlossaryDetail v-if="id != -1" :postCurrentId='id' />
    </div>
  </div>
</template>

<script>
import GlossaryList from './components/GlossaryList.vue'
import GlossaryDetail from './components/GlossaryDetail.vue'
// import { mapState } from "vuex"
export default {
  name: 'App',
  components: {
    GlossaryList,
    GlossaryDetail
  },
  data: function() {
    return {
      id: -1
    }
  }
  // computed: {
  //   ...mapState([
  //     "Glossary"
  //   ])
  // }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fafafa;
}
#wrapper {
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #272822;
  justify-content: space-evenly;
  align-items: center;
  margin: 0;
  position: relative;
  overflow: hidden;
}

#wrapper > div {
  flex:1;
}
</style>
