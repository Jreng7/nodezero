import express from "express";

const app = express();

app.get('/', (req, res) => {
  res.send('Olá')
})

app.liste(7023, () => {
  console.log('servidor online com sucesso.')
})