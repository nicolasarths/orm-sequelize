<<<<<<< HEAD
const express = require('express')
const routes = require('./routes')

const app = express()
const port = 3000

routes(app)

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))

module.exports = app;
=======
const express = require('express')
const routes = require('./routes')

const app = express()
const port = 3000

routes(app)

app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))

module.exports = app
>>>>>>> f3eb26c646025b71e2998d7260c317743a193680
