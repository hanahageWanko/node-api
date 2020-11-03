const userKey = {
  // ランダム文字列の生成
  create: (inputUserName) => {
    const baseName = inputUserName
    const lengthStr = ('00' + baseName.length).slice(-2)
    const S = 'abcdefghijklmnopqrstuvwxyz0123456789'
    const N = 30 - baseName.length
    const uniqueIdStr = Array.from(Array(N))
      .map(() => S[Math.floor(Math.random() * S.length)])
      .join('')
    const userKey = lengthStr + baseName + uniqueIdStr
    return userKey
  },
  extractName: (userKey) => {
    const digitStr = userKey.substring(0, 2)
    const userNameLength = parseInt(digitStr)
    const userName = userKey.substring(2, 2 + userNameLength)

    return userName
  },
  /**
   * Get the URL parameter value
   * @param  name {string} パラメータのキー文字列
   * @return  url {url} 対象のURL文字列（任意）
   */
  getTargetUserFromUrlSearch(name, url) {
    if (!url.path) {
      url = '/'
    }
    name = name.replace(/[[\]]/g, '\\$&') // ToDo:この辺、コピペ。

    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
    const results = regex.exec(url.path)
    console.log(name)
    console.log(url.path)
    console.log(regex)
    console.log(results)
    if (!results) {
      return null
    }
    if (!results[2]) {
      return ''
    }
    console.log(results[2].replace(/\+/g, ' '))
    return decodeURIComponent(results[2].replace(/\+/g, ' '))
  }
}

export { userKey as default }
