// 生成する各Glossaryのclassを定義
class NoteItem {
  constructor(data) {
    console.log(data.create)
    console.log(new Date().getTime().toString())
    const now = new Date()
    if (this.createDateMiliSec) {
      now.setTime(this.createDateMiliSec)
    }
    this.title = data.title
    this.text = data.text
    this.id = data.id
    this.create = now.getTime().toString()
    this.dateStr = now.toString()
    this.styleStr = ''
  }
}
NoteItem.prototype.toggleTextStyle = function(styleStr) {
  this.styleStr = this.styleStr.length === 0 ? styleStr : ''
}
const createNoteItem = function(data) {
  return new NoteItem(data)
}

export { createNoteItem as default }
