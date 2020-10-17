<template>
  <div id="id_section_signup" v-if="!isSignUp"><!-- 初回サインアップ用 -->
      【サインアップ】<br><br>
      利用者名を入れてください（※3文字以上、16文字以内の英数字）。：
      <font-awesome-icon icon="check" style="color:#4444ff"></font-awesome-icon>
      <br>
      <input id="id_username" v-model="userNameInput"><br>
      <div>
          <input v-show="userNameInput" value="登録" type="button" v-on:click="createAccount">
      </div>
      <br>
  </div>
</template>

<script>
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