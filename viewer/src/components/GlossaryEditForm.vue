<template>
  <v-dialog v-model="dialog" persistent dark max-width="80%">
    <v-card class="pa-8">
      <v-card-title>
        <h2 class="font-great mb-9">
          {{ title }}
        </h2>
      </v-card-title>
      <div class="glossary-form">
        <v-text-field
          v-model="item.title"
          label="Title"
          hide-details="auto"
        ></v-text-field>
        <v-textarea
          v-model="item.text"
          filled
          label="Contents"
          solo
          class="mt-4"
        ></v-textarea>
      </div>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="closeDialog()" color="secondary" text>
          キャンセル
        </v-btn>
        <v-btn @click="fireUpdate()" color="primary" text>
          更新する
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'GlossaryEditForm',
  props: {
    title: {
      type: String,
      default: ''
    },
    glossary: { type: Object, default: () => ({}) }
  },
  data() {
    return {
      dialog: true,
      item: {
        title: this.glossary.title,
        text: this.glossary.text
      }
    }
  },
  methods: {
    closeDialog() {
      this.dialog = false
      this.$emit('cancelUpdate')
    },
    fireUpdate() {
      this.dialog = false
      this.$emit('updateItem', {
        newData: this.item,
        originalData: this.glossary
      })
    }
  }
}
</script>
