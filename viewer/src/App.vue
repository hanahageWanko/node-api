<template>
  <div id="app">
    <div id="wrapper">
      <GlossaryList
        @getCurrentId="getGlossaryDetail($event)"
        :Glossarys="GlossaryState"
      />
        <GlossaryDetail
          v-if="CurrentGlossary.length >= 1"
          :glossaryDetail="CurrentGlossary[0]"
        />
        <GlossaryAddForm v-else/>
      <!-- <GlossaryDetail
          :glossaryDetail="CurrentGlossary"
        /> -->
    </div>
  </div>
</template>

<script>
import GlossaryList from './components/GlossaryList.vue'
import GlossaryDetail from './components/GlossaryDetail.vue'
import GlossaryAddForm from './components/GlossaryAddForm.vue'
import { mapState } from "vuex"
export default {
  name: 'App',
  components: {
    GlossaryList,
    GlossaryDetail,
    GlossaryAddForm
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
    if(this.$route.params.id) {
      this.getGlossaryDetail(this.$route.params.id);
    }
  }
}
</script>

<style lang="scss">
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

.glossary-form {
  padding: 20px;
  .textbox {
    margin-bottom: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    label {
      padding-right:15px;
      width: 20%;
    }
    input{
      display: block;
      width: 100%;
      border:none;
      background-color: transparent;
      border-bottom: 1px solid rgba(255,255,255, .8);
    }
  }
}


</style>
