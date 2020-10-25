<template>
  <div class="note">
    <h2>
      <input type="text" class="note-title" v-model="glossaryDetail.title">
    </h2>
    <textarea class="note-description" v-model="glossaryDetail.description"></textarea>
    <div class="button-area">
      <UiButton @click="updateGlossary()">更新</UiButton>
      <UiButton color="orange">削除</UiButton>
    </div>
  </div>
</template>

<script>
import UiButton from '@/components/UiButton'
export default {
  name: 'GlossaryDetail',
  components: {
    UiButton
  },
  data() {
    return{}
  },
  props: ['glossaryDetail'],
  methods: {
    updateGlossary () {
      console.log(this.glossaryDetail)
      this.$store.dispatch('glossary/updateGlossary',this.glossaryDetail);
    }
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
