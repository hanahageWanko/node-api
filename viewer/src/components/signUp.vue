<template>
  <div class="signup-section" v-if="!isSignUp"><!-- 初回サインアップ用 -->
      <h2 class="font-great">Sign Up</h2>
      <p>利用者名を入れてください（※3文字以上、16文字以内の英数字）。</p>
      <div class="glossary-form d-flex">
        <div class="textbox">
          <input v-model="userNameInput">
        </div>
        <UiButton  v-show="userNameInput" @click="createAccount">更新</UiButton>
      </div>
  </div>
</template>

<script>
import UiButton from '@/components/UiButton';
import userKeyManager from '@/plugins/userKey.js';
const KEYNAME = 'user';
export default {
  name: "SignUp",
  data() {
    return {
      isPanelShow : false,
      userNameInput : '',
    }
  },
  props: ['targetKey'],
  components:{
    UiButton
  },
  computed: {
    // isUserNameValid : () => {
    //     console.log(this.userNameInput)
    //     const key = this.userNameInput;
    //     return (key) && (key.length > 2) && (key.length <= 16);
    // },
    isSignUp : function () {
      return (this.targetKey.length > 0);
    },
  },
  methods : {
    createAccount : function () {
        this.targetKey = userKeyManager.create(this.userNameInput);
        window.location.href = './index.html?' + KEYNAME + '=' + this.targetKey;
    },
  }
}
</script>

<style lang="scss" scoped>
  .signup-section {
    margin: 40px;
    .glossary-form {
      .textbox {
        width:70%;
        margin-right: 20px;
      }
    }
  }
</style>