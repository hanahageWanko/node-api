<template>
  <div>
    <h2 class="font-great mb-6">Glossary List</h2>
    <div class="glossary-form">
      <v-text-field
        v-model="inputTitle"
        label="Title"
        hide-details="auto"
      ></v-text-field>
      <v-textarea
        v-model="inputText"
        filled
        label="Contents"
        solo
        class="mt-4"
      ></v-textarea>
      <v-row justify="end">
        <v-col cols="auto" class="pt-0">
          <v-btn @click="clickInputButton" color="orange" dark>
            リストに追加する
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GlossaryAddForm',
  props: {
    username: {
      type: String
    }
  },
  data() {
    return {
      inputText: '',
      inputTitle: ''
    }
  },
  methods: {
    clickInputButton() {
      const postData = {
        title: this.inputTitle,
        text: this.inputText
      }
      if (postData.title !== '' && postData.text !== '') {
        this.createGlossaryFlg = true
        console.log(postData)
        this.$ItemStorage.add(this.username, postData).then((createdItem) => {
          this.inputText = ''
          this.inputTitle = ''
          this.createGlossaryFlg = false
        })
      }
    }
  }
}
</script>
