global.owner = ['994400944782']
global.autoread = false
global.selfmode = false
global.mess = {
group : {
welcome : `Welcome @user\n\nSelamat datang di grup @subject`,
bye : `Good Bye @user`,
promote: '@user Sekarang admin!',
demote: '@user Sekarang bukan admin!'
},
error : 'Terjadi Kesalahan',
success: 'Sukses...'
}
global.server = true
global.prefix = '🐤'
global.author = '@caliph91_'
global.packname = 'WhatsApp Bot'


// LIST APIKEY

global.APIs = { // API Prefix

  clph: 'https://recoders-area.caliph.repl.co',
  rikka: 'https://rikka-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  lol: 'https://api.lolhuman.xyz',
  vh: 'http://api.vhtear.com',
  zeks: 'https://api.zeks.me'
}

global.APIKeys = { // APIKey Here
   'http://api.vhtear.com': 'YOUR-APIKEY',
   'https://api.lolhuman.xyz': 'YOUR-APIKEY',
  'https://api.xteam.xyz': 'YOUR-APIKEY'
,
  'https://api.zeks.me': 'rikkabotwa',
  'https://rikka-api.herokuapp.com': 'beta'
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
