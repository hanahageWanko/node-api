<template>
  <div id="wrapper">
    <SignUp v-if="!$route.query.user" />
    <GlosssaryAddForm v-if="$route.query.user" :username="UserName" />
    <v-row v-if="$route.query.user" class="glossary-list">
      <v-progress-linear v-if="createGlossaryFlg" indeterminate />
      <v-col
        v-for="(item, index) in GlossaryList"
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
              <v-btn fab icon small>
                <v-icon>
                  mdi-pencil
                </v-icon>
              </v-btn>
              <v-btn class="mr-5" fab icon small>
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import SignUp from '@/components/SignUp'
import GlosssaryAddForm from '@/components/GlossaryAddForm'
import { mapState } from 'vuex'
export default {
  components: {
    SignUp,
    GlosssaryAddForm
  },
  data() {
    // オブジェクト{}で定義していた値を、「その値を返却する（無名）関数」に書き換える。
    return {
      createGlossaryFlg: false
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
      this.$store.dispatch('user/setUserName', this.$route.query.user)
      this.$ItemStorage.fetch(this.UserName)
    }
  },
  methods: {
    clickItem(index) {
      // this.todoList[index].toggleTextStyle('text-decoration: line-through;')
      // ToDo: クリックでのトグル動作時の扱いを『暫定』としたいので、このような実装にする。
    },
    clickDeleteButton(index) {
      const targetId = this.todoList[index].id
      this.itemStorage.remove(targetId).then(() => {
        this.todoList.splice(index, 1)
      })
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
