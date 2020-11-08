import axios from 'axios'
import createNoteItem from './noteItem'

const HTTP = axios.create({
  baseURL: process.env.API_END_POINT
})

const targetUrl = (userName) => {
  return `${process.env.API_END_POINT}/users/${userName}/items`
}
export default (context, inject) => {
  const ItemStorage = {
    add: (userName, postData) => {
      console.log(userName)
      console.log(postData)
      const today = new Date()
      const createTime = today.getTime().toString()
      console.log(targetUrl(userName))
      return axios
        .post(
          targetUrl(userName),
          {
            title: postData.title,
            text: postData.text,
            create: createTime,
            update: createTime
          }
          /* .set({'x-api-key' : 'foobar'}) */
        )
        .then((result) => {
          console.log(result)
          console.log(targetUrl)
          console.log(HTTP)
          const responsedata = result.data
          const items = responsedata.items
          const item = items[0]
          const addedItem = createNoteItem(item)

          this.original.push(addedItem)
          return Promise.resolve(addedItem)
        })
    },
    fetch: (userName) => {
      return axios
        .get(targetUrl(userName), {
          /*
                  "crossdomain" : true,
                  "params" : {
                      "query" : "key"
                  }
              */
        })
        .then((result) => {
          // 正常応答のフォーマットは、以下の公式さんを参照の事。
          // https://github.com/axios/axios#response-schema
          const responsedata = result.data
          const items = responsedata.items
          const glossaryList = []

          items.forEach(function(item) {
            glossaryList.push(createNoteItem(item))
          })
          console.log(context)
          context.store.dispatch('glossary/getGlossary', glossaryList)
          // return Promise.resolve(todoList)
        })
      // エラー応答のフォーマットは以下の公式さんを参照の事。
      // https://github.com/axios/axios#handling-errors
    },
    remove: (targetId) => {
      return this.axiosClient
        .delete(this.targetUrl + '/' + targetId)
        .then((result) => {
          const status = result.status
          if (status === 200) {
            this.original = this.original.filter((item) => {
              const id = item.id
              return id !== targetId
            })
            return Promise.resolve()
          } else {
            return Promise.reject(new Error('エラー'))
          }
        })
    }
  }
  console.log(context)
  inject('ItemStorage', ItemStorage)
}
