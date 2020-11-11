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
            <v-btn fab icon small class="text-capitalize">
              <v-icon>
                mdi-pencil
              </v-icon>
            </v-btn>
            <v-btn
              @click="deleteItem(item.id)"
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
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'GlossaryList',
  props: {
    glossarys: { type: Array, default: () => ({}) },
    username: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  mounted() {
    // this.$store.dispatch('user/setUserName', this.$route.query.user)
    this.$ItemStorage.fetch(this.username)
  },
  methods: {
    deleteItem(id) {
      this.$ItemStorage.delete(this.username, id)
    }
  }
}
</script>

<style scoped></style>
