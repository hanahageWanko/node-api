import axios from 'axios'
import createNoteItem from './noteItem'

const HTTP = axios.create({
  baseURL: process.env.API_END_POINT
})

console.log('in')

const ItemStorage = {
  add: (userName, postData) => {
    console.log(userName)
    console.log(postData)
    const today = new Date()
    const createTime = today.getTime().toString()
    const targetUrl = `http://localhost:3000/api/v1/users/${userName}/items`
    return axios
      .post(
        targetUrl,
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
        const id = item.id
        const addedItem = createNoteItem(postData, id, createTime)

        this.original.push(addedItem)
        return Promise.resolve(addedItem)
      })
  }
}

ItemStorage.fetch = () => {
  return this.axiosClient
    .get(this.targetUrl, {
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
      const todoList = []

      items.forEach(function(item) {
        todoList.push(createNoteItem(item.text, item.id, item.create))
      })
      return Promise.resolve(todoList)
    })
  // エラー応答のフォーマットは以下の公式さんを参照の事。
  // https://github.com/axios/axios#handling-errors
}

ItemStorage.remove = function(targetId) {
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

export default (_, inject) => {
  inject('ItemStorage', ItemStorage)
}
