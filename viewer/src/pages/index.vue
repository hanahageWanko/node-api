<template>
  <div id="wrapper">
    <!-- <GlossaryList
      @getCurrentId="getGlossaryDetail($event)"
      :Glossarys="GlossaryState"
    />
      <GlossaryDetail
        v-if="CurrentGlossary.length >= 1"
        :glossaryDetail="CurrentGlossary[0]"
      />
      <GlossaryAddForm v-else/> -->
    <signUp v-if="!$route.query.user" />
    <div v-else>
      <!-- サインアップ後のメイン画面 -->
      <!-- アコーディオンメニューを後でやる時 -->
      <!-- <div>
        <div
          id="id_setup_panel"
          v-on:click="toggleCtrlPanel"
          class="cls_toggle_expand_collapse"
        >
          {{ 'オプション（＠' + userName + 'さん）' }}
        </div>
        <transition name="trans_slide">
          <div
            id="id_setup_transslide"
            v-if="isPanelShow"
            class="menu_slide_accordion"
          >
            ここにオプションのパネルを追加。
          </div>
      </div> -->
      <div class="glossary-form">
        <div class="textbox">
          <input v-model="inputTitie" type="text" />
        </div>
        <div class="textbox">
          <textarea
            v-model="inputText"
            placeholder="ここに入力する。複数行可。"
          ></textarea>
        </div>
        <div>
          <div @click="clickInputButton">リストに追加する</div>
        </div>
      </div>
      <v-row class="glossary-list">
        <v-col
          v-for="(item, index) in GlossaryList"
          :key="index"
          cols="4"
          class="glossary-list-item"
        >
          <v-card dark>
            <v-card-title v-text="item.title" class="headline p-b-0" />
            <v-card-text>
              <div>{{ item.text }}</div>
            </v-card-text>
            <v-row align="center" class="d-flex" justify="end">
              <v-col>
                <v-card-text v-text="item.dateStr" />
              </v-col>
              <v-col cols="auto" class="p-0">
                <v-row align="center">
                  <v-col>
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
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
// javascriptファイルをココへ。
import signUp from '@/components/signUp'

// import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'App', // 「el : "#id_app1"」としていた部分。
  components: {
    signUp
  },
  data() {
    // オブジェクト{}で定義していた値を、「その値を返却する（無名）関数」に書き換える。
    return {
      setuppanel_text: 'オプションはこちら',
      keyName: 'user',
      itemStorage: null,
      inputText: '',
      inputTitie: '',
      todoList: [],
      targetKey: '',
      isPanelShow: false
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
      console.log(this.$route.query.user)
      this.$store.dispatch('user/setUserName', this.$route.query.user)
      this.$ItemStorage.fetch(this.UserName)
    }
  },
  methods: {
    toggleCtrlPanel() {
      this.isPanelShow = !this.isPanelShow
    },
    clickInputButton() {
      const newText = this.inputText
      const newTitle = this.inputTitie
      const postData = {
        title: newTitle,
        text: newText
      }
      if (postData.title !== '' && postData.text !== '') {
        this.$ItemStorage.add(this.UserName, postData).then((createdItem) => {
          this.todoList.push(createdItem)
        })
        this.input_message = ''
      }
    },
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
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 40px;
  background-color: #272822;
  justify-content: space-evenly;
  margin: 0;
  position: relative;
  overflow: hidden;
}
#wrapper > div {
  flex: 1;
}
.glossary-form {
  padding: 20px;
  .textbox {
    width: 100%;
    display: flex;
    align-items: center;
    label {
      padding-right: 15px;
      width: 20%;
    }
    input {
      display: block;
      width: 100%;
      border: none;
      background-color: transparent;
      border-bottom: 1px solid rgba(255, 255, 255, 0.8);
    }
    + .textbox {
      margin-top: 20px;
    }
  }
}

.d-flex {
  display: flex;
  align-items: center;
}

.p-0 {
  padding: 0;
}

.p-b-0 {
  padding-bottom: 0;
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
