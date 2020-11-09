import axios from 'axios'
import createNoteItem from './noteItem'

const HTTP = axios.create({
  baseURL: process.env.API_END_POINT
})

const targetUrl = (userName) => {
  return `/users/${userName}/items`
}
export default (context, inject) => {
  const ItemStorage = {
    add: (userName, postData) => {
      const today = new Date()
      const createTime = today.getTime().toString()
      return HTTP.post(
        targetUrl(userName),
        {
          title: postData.title,
          text: postData.text,
          create: createTime,
          update: createTime
        }
        /* 
          APIキーを設定する時用
          .set({'x-api-key' : 'foobar'}) 
          */
      ).then((result) => {
        const responsedata = result.data
        const items = responsedata.items
        const item = items[0]
        const addedItem = createNoteItem(item)
        this.original.push(addedItem)
        return Promise.resolve(addedItem)
      })
    },
    fetch: (userName) => {
      return HTTP.get(targetUrl(userName), {
        /*
          APIキーを設定する時用
                  "crossdomain" : true,
                  "params" : {
                      "query" : "key"
                  }
              */
      }).then((result) => {
        const responsedata = result.data
        const items = responsedata.items
        const glossaryList = []
        items.forEach(function(item) {
          glossaryList.push(createNoteItem(item))
          console.log(item)
        })
        context.store.dispatch('glossary/getGlossary', glossaryList)
      })
    },
    remove: (targetId) => {
      return HTTP.delete(this.targetUrl + '/' + targetId).then((result) => {
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
  inject('ItemStorage', ItemStorage)
}
