<template>
  <div id="app">
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
          <signUp :targetKey="targetKey" />
          <div id="id_section_main" style="display:none"><!-- サインアップ後のメイン画面 -->
              <div><!-- アコーディオンメニューを後でやる時 -->
                  <div id="id_setup_panel" class="cls_toggle_expand_collapse" v-on:click="toggleCtrlPanel">
                      {{setuppanel_text}}
                  </div>
                  <transition name="trans_slide">
                      <!-- slideDown() / slideUp() のように上下に開閉するアコーディオンメニューのエリア -->
                      <div id="id_setup_transslide" class="menu_slide_accordion" v-if="isPanelShow">
                          ここにオプションのパネルを追加。
                      </div>
                  </transition>
                  <br>
              </div>
              <div id="id_input_area">
                  <div id="id_input_textarea">
                      <textarea v-model="input_message" placeholder="ここに入力する。複数行可。"></textarea>
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
                      <li v-for="(item,index) in todo_list" v-bind:key="index"> 
                          <!-- (要素、配列番号)で受け取れる仕様 -->
                          <div class="item_text" v-on:click="clickItem(index)"><span v-bind:style="item.styleStr">{{ item.text }}</span></div>
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
  </div>
</template>
<script>


// javascriptファイルをココへ。
import signUp from '@/components/signUp';

import axios from 'axios'
import ItemStorage from '@/plugins/itemStorage.js';
import userKeyManager from '@/plugins/userKey.js';
import { mapState } from "vuex"
const KEYNAME = 'user';
export default {
    name : "App", // 「el : "#id_app1"」としていた部分。
    props : {
        windowLocationHref : {
            type: String,
            required: false
        }
    },
    components: {
      signUp
    },
    data : function () { // オブジェクト{}で定義していた値を、「その値を返却する（無名）関数」に書き換える。
        return {
            setuppanel_text : 'オプションはこちら',
            itemStorage : null,
            input_message : '',
            todo_list : [],
            targetKey: '',
            isPanelShow:false
        }
    },
    computed : {
        ...mapState({
          GlossaryState: state => state.glossary.GlossaryState,
          CurrentGlossary: state => state.glossary.CurrentGlossary
        }),
        justUserName : function () {
            return (this.isSignUp) ? userKeyManager.extractName(this.targetKey) : "未登録";
        },
    },
    created : function () {
        const key = userKeyManager.getTargetUserFromUrlSearch(KEYNAME, this.windowLocationHref);
        if(key){
            this.itemStorage = new ItemStorage(axios, key);
            this.targetKey = key;
            this.setuppanel_text = 'オプション（＠' + this.justUserName + 'さん）';

            this.itemStorage.fetch()
            .then((result)=>{
                this.todo_list = result; // このように「配列ごと変更」はOK、のようだ。
            });
        }
    },
    mounted : function () {
        // this.isPanelShow = true;
    },
    watch : {
        todo_list : {
            handler: function (/* todo_list */) {
                // 何もしない
            },
            deep : true
        }
    },
    methods : {
        toggleCtrlPanel : function () {
            this.isPanelShow = !this.isPanelShow;
        },
        clickInputButton : function () {
            var new_text = this.input_message;
            if( new_text.length > 0 ){
                this.itemStorage.add(new_text)
                .then((createdItem)=>{
                    this.todo_list.push(createdItem);
                });
                this.input_message = "";
            }
        },
        clickItem : function (index) {
            this.todo_list[index].toggleTextStyle("text-decoration: line-through;");
            // ToDo: クリックでのトグル動作時の扱いを『暫定』としたいので、このような実装にする。
        },
        clickDeleteButton : function (index) {
            var targetId = this.todo_list[index].id;
            this.itemStorage.remove(targetId)
            .then(()=>{
                this.todo_list.splice(index, 1);
            });
        }
    }
}
</script>
