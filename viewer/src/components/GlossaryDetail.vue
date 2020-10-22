<template>
  <div class="note">
    <h2>
      <input type="text" class="note-title" v-model="glossaryTitle">
    </h2>
    <textarea class="note-description" v-model="glossaryDescription"></textarea>
    <div class="button-area">
      <UiButton @click="updateGlossary()">更新</UiButton>
      <UiButton color="orange">削除</UiButton>
    </div>
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
     glossaryDescription:"",
     glossaryTitle:""
    }
  },
  props: ['glossaryDetail'],
  watch: {
    $route() {
      this.getContents();
    }
  },
  methods: {
    updateGlossary:async function() {
      this.glossary.description = this.glossaryDescription;
      this.glossary.title = this.glossaryTitle;
      let response = await Api.updateGlossary(this.glossary,this.postCurrentId);
      const { data } = response;
      this.glossary = data.result[0];
    },
    getContents: async function() {
      this.glossaryDescription = await this.glossaryDetail.description;
      this.glossaryTitle = await this.glossaryDetail.title;
      console.log(this.CurrentGlossary)
      console.log(this.glossaryDescription)
    }
  },
  mounted(){
    // this.getContents();
    // this.getGlosary(this.postCurrentId)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.note {
  box-sizing: border-box;
  padding: 17px;
  height: 100%;
  overflow-y: scroll;
  position: relative;
}

.note-title {
  background-color: inherit;
  border:none;
  font-size:130%;
  display: block;
  width: 100%;
  padding-bottom: 7px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
}

.note-description {
  display: block;
  box-sizing: border-box;
  width: 100%;
  height:calc(85% - 60px);
  background-color: inherit;
  border: none;
  resize: none;
}

.note-description:focus {
    outline: none;
}

.button-area {
  position: absolute;
  bottom:0;
  left:0;
  height: 60px;
}
</style>
