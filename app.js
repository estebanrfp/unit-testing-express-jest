import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hola Mundo Cruel!')
})

module.exports = app;
