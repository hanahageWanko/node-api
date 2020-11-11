<template>
  <v-row class="glossary-list">
    <v-col
      v-for="(item, index) in glossarys"
      :key="index"
      cols="4"
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
              @click="glossaryEditForm.flg = true"
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
              @click="deleteConfirmDialog.flg = true"
              fab
              icon
              small
              class="mr-5 text-capitalize"
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <GlossaryEditForm
          v-if="glossaryEditForm.flg"
          @updateItem="updateItem($event, item)"
          :title="deleteConfirmDialog.title"
          :glossary="item"
        />
        <ConfirmDialog
          v-if="deleteConfirmDialog.flg"
          @confirmDialogResponse="confirmDialogResponse($event, item.id)"
          :title="deleteConfirmDialog.title"
          :text="deleteConfirmDialog.text"
        />
      </v-card>
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
      }
    }
  },
  mounted() {
    this.$ItemStorage.fetch(this.username)
  },
  methods: {
    updateItem(event, item) {
      this.glossaryEditForm.flg = false
      this.$ItemStorage.update(this.username, item, event)
    },
    deleteItem(id) {
      this.$ItemStorage.delete(this.username, id)
    },
    confirmDialogResponse(event, id) {
      this.deleteConfirmDialog.flg = false
      if (event) this.deleteItem(id)
    }
  }
}
</script>

<style scoped></style>
