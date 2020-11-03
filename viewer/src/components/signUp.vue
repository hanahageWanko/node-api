<template>
  <div class="signup-section">
    <!-- 初回サインアップ用 -->
    <h2 class="font-great">Sign Up</h2>
    <p>利用者名を入れてください（※3文字以上、16文字以内の英数字）。</p>
    <div class="glossary-form d-flex">
      <div class="textbox">
        <input v-model="userNameInput" />
      </div>
      <UiButton v-show="userNameInput" @click="createAccount">更新</UiButton>
    </div>
  </div>
</template>

<script>
import UiButton from '@/components/UiButton'
// import userKeyManager from '@/plugins/userKey.js';
export default {
  name: 'SignUp',
  components: {
    UiButton
  },
  data() {
    return {
      userNameInput: '',
      keyName: 'user'
    }
  },
  methods: {
    createAccount() {
      this.$store.dispatch('user/setUserName', this.userNameInput)
      this.$router.push({ path: '/', query: { user: this.userNameInput } })
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
