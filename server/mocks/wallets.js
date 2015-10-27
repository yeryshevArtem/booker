module.exports = function(app) {
  var express = require('express');
  var walletsRouter = express.Router();

  var wallets = [
    {id: 1, name: "Main", balance: 100},
    {id: 2, name: "Another", balance: 200}
  ];

  //Get all wallets
  walletsRouter.get('/', function(req, res) {
    res.send({
      'wallets': wallets
    });
  });

  //Create wallet
  walletsRouter.post('/', function(req, res) {
    var jsonString = '';
    req.on('data', function (data) {
      jsonString += data;
    });
    req.on('end', function () {
      var category = JSON.parse(jsonString);
      console.log(category);
      responseData = JSON.stringify(category);
      res.end(responseData);
      res.status(201).end();
    });
  });

  //Get specific wallet
  walletsRouter.get('/:id', function(req, res) {
    res.send({
      'wallets': {
        id: req.params.id
      }
    });
  });

  //Update specific wallet
  walletsRouter.put('/:id', function(req, res) {
    var jsonString = '';
    req.on('data', function (data) {
      jsonString += data;
    });
    req.on('end', function () {
      var wallet = JSON.parse(jsonString);
      // console.log(category);
      // responseData = JSON.stringify(category);
      res.send({
        'wallets': {
          name: wallet.wallet.name,
          balance: wallet.wallet.balance
        }
      });
    });
  });

  //Delete specific wallet
  walletsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/wallets', walletsRouter);
};