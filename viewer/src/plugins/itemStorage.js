/**
 * [itemStorage.js] encoding=utf8
 *
 */
import createNoteItem from './noteItem'
const API_URL = '/api/v1/users/'

const ItemStorage = function(axiosInstance, userName) {
  this.userName = userName
  this.axiosClient = axiosInstance
  this.targetUrl = API_URL + this.userName + '/items'
  this.original = []
}
ItemStorage.prototype.fetch = function() {
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
      const todo_list = []

      items.forEach(function(item) {
        todo_list.push(createNoteItem(item.text, item.id, item.create))
      })
      return Promise.resolve(todo_list)
    })
  // エラー応答のフォーマットは以下の公式さんを参照の事。
  // https://github.com/axios/axios#handling-errors
}
ItemStorage.prototype.add = function(text) {
  const today = new Date()
  const createTime = today.getTime().toString()
  return this.axiosClient
    .post(
      this.targetUrl,
      {
        // postData
        text,
        create: createTime,
        update: createTime
      }
      /* .set({'x-api-key' : 'foobar'}) */
    )
    .then((result) => {
      const responsedata = result.data
      const items = responsedata.items
      const item = items[0]
      const id = item.id
      const addedItem = createNoteItem(text, id, createTime)

      this.original.push(addedItem)
      return Promise.resolve(addedItem)
    })
}
ItemStorage.prototype.remove = function(targetId) {
  return this.axiosClient
    .delete(this.targetUrl + '/' + targetId)
    .then((result) => {
      const status = result.status
      if (status == 200) {
        this.original = this.original.filter((item) => {
          const id = item.id
          return id != targetId
        })
        return Promise.resolve()
      } else {
        return Promise.reject()
      }
    })
}

export { ItemStorage as default }
