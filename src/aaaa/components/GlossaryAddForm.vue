<template>
  <div class="glossary-form add-form">
    <div class="textbox">
      <label>Title</label><input type="text" name="title" v-model="title">
    </div>
    <div class="textbox">
      <label>Description</label><input type="text" name="description" v-model="description">
    </div>
    <dir>
      {{title}}
    </dir>
    <dir>
      {{description}}
    </dir>
    <UiButton @click="addGlossary()">送信</UiButton>
  </div>
</template>

<script>
import UiButton from '@/components/UiButton'
export default {
  name: 'GlossaryAddForm',
  data() {
    return{
      title:"",
      description:""
    }
  },
  components: {
    UiButton
  },
  methods: {
    addGlossary() {
      const item = {title:this.title, description:this.description}
      this.$store.dispatch('glossary/addGlossary', item);
      this.$store.dispatch('glossary/getGlossary');
    },
  }
}
</script>

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
