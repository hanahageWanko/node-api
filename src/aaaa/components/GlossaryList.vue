<template>
  <div class="all-glossary-list">
    <ul>
      <li v-for="list in Glossarys" :key="list.id" class="glossary-list" @click="openGlossaryDetail(list.id)">
        <div class="glossary-list-title">{{list.title}}</div>
        <div class="glossary-list-dexcription">{{list.description}}</div>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'GlossaryList',
  props:["Glossarys"],
  data() {
    return{}
  },
  methods: {
    openGlossaryDetail(id) {
      this.$router.push({ path: `/detail/${id}` }).catch(()=>{});
      this.$store.dispatch('glossary/getClearDetail');
      this.$emit("getCurrentId",id);
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
