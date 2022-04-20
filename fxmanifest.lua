fx_version 'cerulean'
game 'gta5'

name 'FiveM Typescript Boilerplate'
description 'A boilerplate for using Typescript in FiveM'
author 'Remco Troost (d0p3t)'
url 'https://github.com/d0p3t/fivem-ts-boilerplate'

client_script 'dist/client/*.client.js'
server_script 'dist/server/*.server.js'

ui_page 'ui/public/index.html'

files {
    'ui/public/index.html',
    'ui/public/build/bundle.css',
    'ui/public/build/bundle.js',
    'ui/public/global.css'
}