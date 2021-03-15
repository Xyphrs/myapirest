const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/mensajes', (req, res) => {
    res.send(JSON.stringify(
      {
        "nombre": "dani",
        "edad": 20,
        "telefono": {
          "prefijo": "+34",
          "numero": "53535534"
        },
        "amigos": [
          {
            "nombre": "Paco",
            "id": 15,
          },
          {
            "nombre": "Paca",
            "id": 16,
          }
        ]
      }
    ))
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
