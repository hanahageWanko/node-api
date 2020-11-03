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
    <div>
      <signUp v-if="!userName" />
      <div id="id_section_main" v-else>
        <!-- サインアップ後のメイン画面 -->
        <div>
          <!-- アコーディオンメニューを後でやる時 -->
          <div
            id="id_setup_panel"
            v-on:click="toggleCtrlPanel"
            class="cls_toggle_expand_collapse"
          >
            {{ 'オプション（＠' + userName + 'さん）' }}
          </div>
          <transition name="trans_slide">
            <!-- slideDown() / slideUp() のように上下に開閉するアコーディオンメニューのエリア -->
            <div
              id="id_setup_transslide"
              v-if="isPanelShow"
              class="menu_slide_accordion"
            >
              ここにオプションのパネルを追加。
            </div>
          </transition>
          <br />
        </div>
        <div id="id_input_area">
          <div id="id_input_textarea">
            <textarea
              v-model="input_message"
              placeholder="ここに入力する。複数行可。"
            ></textarea>
          </div>
          <div id="id_input_command">
            <div id="id_input_additional">リストに追加する</div>
            <div id="id_input_button" v-on:click="clickInputButton">
              <a href="#"><i class="fas fa-pen fa-2x"></i></a>
              <!-- 
                            <input type="button" value="追加"></input> 
                        -->
            </div>
          </div>
        </div>
        <div id="id_todolist">
          <ul>
            <li v-for="(item, index) in todo_list" v-bind:key="index">
              <!-- (要素、配列番号)で受け取れる仕様 -->
              <div v-on:click="clickItem(index)" class="item_text">
                <span v-bind:style="item.styleStr">{{ item.text }}</span>
              </div>
              <div class="item_date">{{ item.dateStr }}</div>
              <div v-on:click="clickDeleteButton(index)">
                <a href="#"><i class="fas fa-trash-alt"></i></a>
                <!-- 
                                <input type="button" value="削除"></input> 
                            -->
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// javascriptファイルをココへ。
import signUp from '@/components/signUp'

// import axios from 'axios'
// import ItemStorage from '@/plugins/itemStorage.js';
// import userKeyManager from '@/plugins/userKey.js';
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
      input_message: '',
      todo_list: [],
      targetKey: '',
      isPanelShow: false
    }
  },
  computed: {
    ...mapState({
      GlossaryState: (state) => state.glossary.GlossaryState,
      CurrentGlossary: (state) => state.glossary.CurrentGlossary,
      userName: (state) => state.user.userName
    })
  },
  created() {
    if (this.$route.query.user) {
      // console.log(this.$route.query.user)
      this.$store.dispatch('user/setUserName', this.$route.query.user)
    }
  },
  mounted() {
    // this.isPanelShow = true;
  },
  methods: {
    toggleCtrlPanel() {
      this.isPanelShow = !this.isPanelShow
    },
    clickInputButton() {
      const newText = this.input_message
      if (newText.length > 0) {
        this.itemStorage.add(newText).then((createdItem) => {
          this.todo_list.push(createdItem)
        })
        this.input_message = ''
      }
    },
    clickItem(index) {
      this.todo_list[index].toggleTextStyle('text-decoration: line-through;')
      // ToDo: クリックでのトグル動作時の扱いを『暫定』としたいので、このような実装にする。
    },
    clickDeleteButton(index) {
      const targetId = this.todo_list[index].id
      this.itemStorage.remove(targetId).then(() => {
        this.todo_list.splice(index, 1)
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
  margin-bottom: 20px;
}
h2 {
  font-size: 250%;
  margin-bottom: 20px;
}
h3 {
  font-size: 200%;
  margin-bottom: 20px;
}
h4 {
  font-size: 170%;
  margin-bottom: 20px;
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

@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
.font-great {
  font-family: 'Great Vibes', sans-serif;
}
</style>
