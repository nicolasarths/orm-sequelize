<<<<<<< HEAD
const { Router } = require('express')
const NivelController = require('../controllers/NivelController')

const router = Router()
router
 .get('/niveis', NivelController.pegaTodosOsNiveis)
 .get('/niveis/:id', NivelController.pegaUmNivel)
 .post('/niveis', NivelController.criaNivel)
 .put('/niveis/:id', NivelController.atualizaNivel)
 .delete('/niveis/:id', NivelController.apagaNivel)
 
=======
const { Router } = require('express')
const NivelController = require('../controllers/NivelController')
 
const router = Router()
router
  .get('/niveis', NivelController.pegaTodosOsNiveis)
  .get('/niveis/:id', NivelController.pegaUmNivel)
  .post('/niveis', NivelController.criaNivel)
  .put('/niveis/:id', NivelController.atualizaNivel)
  .delete('/niveis/:id', NivelController.apagaNivel)
>>>>>>> f3eb26c646025b71e2998d7260c317743a193680
module.exports = router