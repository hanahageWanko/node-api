/**
 * [noteItem.js] encoding=utf8
 *
 */

const NoteItem = function(data) {
  const now = new Date()
  if (this.createDateMiliSec) {
    now.setTime(this.createDateMiliSec)
  }

  this.text = data.text
  this.id = data.id
  this.create = now.getTime().toString()
  this.dateStr = now.toString()
  this.styleStr = ''
}
NoteItem.prototype.toggleTextStyle = function(styleStr) {
  this.styleStr = this.styleStr.length === 0 ? styleStr : ''
}
const createNoteItem = function(data) {
  return new NoteItem(data)
}

export { createNoteItem as default }
