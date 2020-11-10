<template>
  <div class="signup-section">
    <v-row>
      <v-col>
        <h2 class="font-great mb-6">Sign Up</h2>
        <p>利用者名を入れてください（※3文字以上、16文字以内の英数字）。</p>
      </v-col>
    </v-row>
    <v-row class="glossary-form d-flex">
      <v-col>
        <v-text-field
          v-model="inputTitle"
          label="User name"
          hide-details="auto"
        ></v-text-field>
        <v-btn
          v-show="inputTitle"
          @click="createAccount"
          color="orange"
          dark
          class="mt-4"
        >
          Sign in
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// import userKeyManager from '@/plugins/userKey.js';
export default {
  name: 'SignUp',
  data() {
    return {
      inputTitle: ''
    }
  },
  methods: {
    createAccount() {
      this.$store.dispatch('user/setUserName', this.inputTitle)
      this.$router.push({ path: '/', query: { user: this.inputTitle } })
    }
  }
}
</script>

<style lang="scss" scoped>
.signup-section {
  margin: 40px;
  .glossary-form {
    .textbox {
      width: 70%;
      margin-right: 20px;
    }
  }
}
</style>
