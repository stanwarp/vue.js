const express = require('express')
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const e = require('express');
const app = express()

app.use(cors())
app.use(bodyParser.json());

app.post('/addToCart', (req, res) => {
  fs.readFile('./database/cart.json', 'utf8', (err, data) => {
    if (err) {
      res.send('{ "result": 0 }')
    } else {
      const cart = JSON.parse(data);
      const item = req.body;

      cart.push(item);

      fs.writeFile('./database/cart.json', JSON.stringify(cart), (err) => {
        if (err) {
          res.send('{"result": 0}');
        } else {
          res.send('{"result": 1}');
        }
      })
    }
  })
})
app.post('/removeFromCart', (req, res) => {
  fs.readFile('./database/cart.json', 'utf8', (err, data) => {
    if (err) {
      res.send('{ "result": 0 }')
    } else {
      const cart = JSON.parse(data);
      const item = req.body;

      cart.splice(cart.findIndex(el => el.product_name === item.product_name) , 1)
      
      fs.writeFile('./database/cart.json', JSON.stringify(cart), (err) => {
        if (err) {
          res.send('{"result": 0}');
        } else {
          res.send('{"result": 1}');
        }
      })
    }
  })
})
app.get('/catalogData', (req, res) => {
  fs.readFile('./database/catalog.json', 'utf8', (err, data) => {
    res.send(data)
  })
})

app.get('/cartData', (req, res) => {
  fs.readFile('./database/cart.json', 'utf8', (err, data) => {
    res.send(data)
  })
})

const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log(`Server started on ${PORT} port!`)
})
