<template>
  <div id="app">
    <div id="wrapper">
      <GlossaryList />
      <GlossaryDetail />
    </div>
  </div>
</template>

<script>
import GlossaryList from './components/GlossaryList.vue'
import GlossaryDetail from './components/GlossaryDetail.vue'
export default {
  name: 'App',
  components: {
    GlossaryList,
    GlossaryDetail
  }
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
