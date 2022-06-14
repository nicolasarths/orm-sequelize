<<<<<<< HEAD
const { Router } = require('express')
const TurmaController = require('../controllers/TurmaController')

const router = Router()
router
 .get('/turmas', TurmaController.pegaTodasAsTurmas)
 .get('/turmas/:id', TurmaController.pegaUmaTurma)
 .post('/turmas', TurmaController.criaTurma)
 .put('/turmas/:id', TurmaController.atualizaTurma)
 .delete('/turmas/:id', TurmaController.apagaTurma)

=======
const { Router } = require('express')
const TurmaController = require('../controllers/TurmaController')
 
const router = Router()
router
  .get('/turmas', TurmaController.pegaTodasAsTurmas)
  .get('/turmas/:id', TurmaController.pegaUmaTurma)
  .post('/turmas', TurmaController.criaTurma)
  .put('/turmas/:id', TurmaController.atualizaTurma)
  .delete('/turmas/:id', TurmaController.apagaTurma)
>>>>>>> f3eb26c646025b71e2998d7260c317743a193680
module.exports = router