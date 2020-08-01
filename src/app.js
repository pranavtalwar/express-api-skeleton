const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')

const app = express()

app.use(cors())
app.use(helmet())
app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.status(200).send('simple endpoint')
})

module.exports = app