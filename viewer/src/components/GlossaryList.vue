<template>
  <v-row class="glossary-list">
    <v-col
      v-for="(item, index) in glossarys"
      :key="index"
      cols="3"
      class="glossary-list-item"
    >
      <v-card dark>
        <v-card-title v-text="item.title" class="headline pb-0" />
        <v-card-text>
          <div>{{ item.text }}</div>
        </v-card-text>
        <v-row align="center" class="d-flex" justify="end">
          <v-col>
            <v-card-text v-text="item.dateStr" />
          </v-col>
          <v-col cols="auto" class="p-0">
            <v-btn
              @click="openDialog(glossaryEditForm, item)"
              fab
              icon
              small
              class="text-capitalize"
            >
              <v-icon>
                mdi-pencil
              </v-icon>
            </v-btn>
            <v-btn
              @click="openDialog(deleteConfirmDialog, item)"
              fab
              icon
              small
              class="mr-5 text-capitalize"
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
      <GlossaryEditForm
        v-if="glossaryEditForm.flg"
        @updateItem="updateItem($event, item)"
        @cancelUpdate="closeDialog(glossaryEditForm)"
        :title="glossaryEditForm.title"
        :glossary="tmpElm"
      />
      <ConfirmDialog
        v-if="deleteConfirmDialog.flg"
        @deleteItem="deleteItem(tmpElm.id)"
        @cancelDelete="closeDialog(deleteConfirmDialog)"
        :title="deleteConfirmDialog.title"
        :text="deleteConfirmDialog.text"
      />
    </v-col>
  </v-row>
</template>

<script>
import ConfirmDialog from '@/components/ConfirmDialog'
import GlossaryEditForm from '@/components/GlossaryEditForm'
export default {
  name: 'GlossaryList',
  components: {
    ConfirmDialog,
    GlossaryEditForm
  },
  props: {
    glossarys: { type: Array, default: () => ({}) },
    username: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      deleteConfirmDialog: {
        title: '確認',
        text: '削除してもよろしいですか？',
        flg: false
      },
      glossaryEditForm: {
        title: 'Glossary edit form',
        flg: false
      },
      tmpElm: {}
    }
  },
  mounted() {
    this.$ItemStorage.fetch(this.username)
  },
  methods: {
    openDialog(dialog, item) {
      dialog.flg = true
      this.tmpElm = item
    },
    closeDialog(dialog) {
      dialog.flg = false
      this.tmpElm = {}
    },
    updateItem(event) {
      const newData = event.newData
      const originalData = event.originalData
      this.$ItemStorage.update(this.username, originalData, newData)
      this.closeDialog(this.glossaryEditForm)
    },
    deleteItem(id) {
      this.closeDialog(this.deleteConfirmDialog)
      this.$ItemStorage.delete(this.username, id)
    }
  }
}
</script>

<style scoped>
.v-card {
  width: 100%;
}
</style>
