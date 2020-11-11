<template>
  <div id="wrapper">
    <SignUp v-if="!showGlossaryFlg" @showGlossary="showGlossary()" />
    <GlossaryAddForm v-if="showGlossaryFlg" :username="UserName" />
    <GlossaryList
      v-if="showGlossaryFlg"
      :glossarys="GlossaryList"
      :username="UserName"
    />
  </div>
</template>
<script>
import SignUp from '@/components/SignUp'
import GlossaryAddForm from '@/components/GlossaryAddForm'
import GlossaryList from '@/components/GlossaryList'
import { mapState } from 'vuex'
export default {
  components: {
    SignUp,
    GlossaryAddForm,
    GlossaryList
  },
  data() {
    // オブジェクト{}で定義していた値を、「その値を返却する（無名）関数」に書き換える。
    return {
      createGlossaryFlg: false,
      showGlossaryFlg: false
    }
  },
  computed: {
    ...mapState({
      GlossaryList: (state) => state.glossary.GlossaryList,
      CurrentGlossary: (state) => state.glossary.CurrentGlossary,
      UserName: (state) => state.user.userName
    })
  },
  created() {
    if (this.$route.query.user) {
      this.showGlossaryFlg = true
      this.$store.dispatch('user/setUserName', this.$route.query.user)
    }
  },
  methods: {
    showGlossary() {
      this.showGlossaryFlg = true
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h1,
h2,
h3,
h4 {
  margin: 0;
}
h1 {
  font-size: 300%;
}
h2 {
  font-size: 250%;
}
h3 {
  font-size: 200%;
}
h4 {
  font-size: 170%;
}

[class$='title'] {
  font-size: 22px;
  margin-bottom: 10px;
}
input,
label,
textarea,
p,
span,
div,
strong {
  font-size: inherit;
  color: inherit;
  line-height: 1.65rem;
  letter-spacing: inherit;
}

#wrapper {
  padding: 40px;
  margin: 0;
  position: relative;
}
#wrapper > div {
  flex: 1;
}

.d-flex {
  display: flex;
  align-items: center;
}

.p-0 {
  padding: 0;
}

.pb-0 {
  padding-bottom: 0;
}
.pt-0 {
  padding-top: 0;
}

.glossary-list-item {
  display: flex;
  align-items: center;
}

@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
.font-great {
  font-family: 'Great Vibes', sans-serif;
}
</style>
