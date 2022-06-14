<<<<<<< HEAD
const bodyParser = require('body-parser')
const pessoas = require('./pessoasRoute')
const niveis = require('./niveisRoute')
const turmas = require('./turmasRoute')

module.exports = app => {
    app.use(
      bodyParser.json(),
      pessoas,
      niveis,
      turmas
      )
    }
=======
const bodyParser = require('body-parser')
 
const pessoas = require('./pessoasRoute')
const niveis = require('./niveisRoute')
const turmas = require('./turmasRoute')

module.exports = app => {
  app.use(
    bodyParser.json(),
    pessoas,
    niveis,
    turmas
  )
}
>>>>>>> f3eb26c646025b71e2998d7260c317743a193680
