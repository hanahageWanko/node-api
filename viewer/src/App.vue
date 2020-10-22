<template>
  <div id="app">
    <div id="wrapper">
      <GlossaryList
        @getCurrentId="getGlossaryDetail($event)"
        :Glossarys="GlossaryState[0]"
      />
        <GlossaryDetail
          v-if="CurrentGlossary.length >= 1"
          :glossaryDetail="CurrentGlossary[0]"
        />
    </div>
  </div>
</template>

<script>
import GlossaryList from './components/GlossaryList.vue'
import GlossaryDetail from './components/GlossaryDetail.vue'
import { mapState } from "vuex"
export default {
  name: 'App',
  components: {
    GlossaryList,
    GlossaryDetail,
  },
  data(){
    return {}
  },
  computed: {
    ...mapState({
      GlossaryState: state => state.glossary.GlossaryState,
      CurrentGlossary: state => state.glossary.CurrentGlossary
    }),
  },
  // watch: {
  //   GlossaryId() {
  //     this.getGlossary(this.GlossaryId);
  //   }
  // },
  methods: {
    getGlossaryList() {
      this.$store.dispatch('glossary/getGlossary');
    },
    getGlossaryDetail: async function(id) {
     await this.$store.dispatch('glossary/getDetail',id);
    },
  },
  mounted() {
    this.getGlossaryList();
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
  font-size:15px;
  line-height: 1.65rem;
  letter-spacing: 0.1rem;
}

h1,h2,h3,h4 {
  margin: 0;
}

[class$="title"]  {
  font-size:22px;
  margin-bottom: 10px;
}

input,label,textarea,p,span,div,strong {
  font-size: inherit;
  color: inherit;
  line-height: 1.65rem;
 letter-spacing: inherit;
}

#wrapper {
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #272822;
  justify-content: space-evenly;
  margin: 0;
  position: relative;
  overflow: hidden;
}

#wrapper > div {
  flex:1;
}
</style>
