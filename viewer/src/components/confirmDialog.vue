<template>
  <v-dialog v-model="dialog" persistent dark width="50%">
    <v-card>
      <v-card-title class="headline">
        {{ title }}
      </v-card-title>

      <v-card-text v-text="text" />

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="closeDialog(false)" color="secondary" text>
          キャンセル
        </v-btn>
        <v-btn @click="closeDialog(true)" color="primary" text>
          削除する
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'ConfirmDialog',
  props: {
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      dialog: true
    }
  },
  methods: {
    closeDialog(flg) {
      this.dialog = false
      this.$emit('confirmDialogResponse', flg)
    }
  }
}
</script>
