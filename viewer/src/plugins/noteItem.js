// 生成する各Glossaryのclassを定義
class NoteItem {
  constructor(data) {
    // console.log(data.create)
    // console.log(new Date().getTime().toString())
    const now = new Date()
    // console.log(data.create)
    // const now = data.create
    this.title = data.title
    this.text = data.text
    this.id = data.id
    this.create = data.create
    this.dateStr = now.toLocaleDateString()
    this.styleStr = ''
    // console.log(this.create)
    // console.log(this.dateStr)
  }
}
NoteItem.prototype.toggleTextStyle = function(styleStr) {
  this.styleStr = this.styleStr.length === 0 ? styleStr : ''
}
const createNoteItem = function(data) {
  // console.log(data)
  return new NoteItem(data)
}

export { createNoteItem as default }
