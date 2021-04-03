const express = require('express')
const nunjucks = require('nunjucks')
const routes = require("./routes")
const methodOverride = require("method-override")
const path = require('path')

const server = express()


// HABILITANDO REQ.BODY
server.use(express.urlencoded({extended: true}))

// CONFIGURANDO PASTA PUBLIC
server.use(express.static('public'))

// Mudar a localização PARA BUSCAR A PASTA VIEWS  ** SE NECESSÁRIO ** 
server.set('views', path.join(__dirname, 'views'))

//CORRIGINDO METHOD PARA PUT POIS O HTML ACEITARIA APENAS GET E POST
/* <form method="POST" action="/students?_method=PUT" ... _method=DELETE class="card">   ---- EXEMPLO DE USO*/
server.use(methodOverride('_method'))

// INSERINDO ROTAS
server.use(routes)

// ===== Template engine usar EJS ou NJK === 

//Template Engine
server.set('view engine', 'ejs')

//    **   OU    ***

server.set("view engine", "njk")

nunjucks.configure("src/app/views", {
    express: server,
    autoescape: false,
    noCache: true
})

// PORTA PARA O SERVIDOR

server.listen(5000, function() {
})
//    **   OU    ***
server.listen(3000)