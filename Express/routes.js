const express = require('express')

// HABILITANDO CONSTANTE PARA CRIAR ROTAS
const routes = express.Router()

// IMPORTANDO CONTROLLER PARA O POST
const teachers = require("./src/app/controllers/teachers")
const students = require("./src/app/controllers/students")


//  EXEMPLO DE REDIRECT
routes.get('/', function(req, res) {
    return res.redirect("/teachers")
})
//ROTA COM CONTROLLER
routes.get('/teachers', teachers.index)
// ROTA SEM CONTROLLER
routes.get('/teachers/create', function(req, res) {
    return res.render("teachers/create")
})
// POST/create
routes.post('/teachers', teachers.post)
//PUT/atualizar
routes.put('/teachers', teachers.put )
//DELETE/deletar
routes.delete('/teachers', teachers.delete )


module.exports = routes