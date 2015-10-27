module.exports = function(app) {
  var express = require('express');
  var categoriesRouter = express.Router();

  var categories = [
    {id: 1, name: "Main", icon: 3},
    {id: 2, name: "Another", icon: 5}
  ];

  categoriesRouter.get('/', function(req, res) {
    res.send({
      'categories': categories
    });
  });

  categoriesRouter.post('/', function(req, res) {
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

  categoriesRouter.get('/:id', function(req, res) {
    res.send({
      'categories': {
        id: req.params.id,
      }
    });
  });

  categoriesRouter.put('/:id', function(req, res) {
    var jsonString = '';
    req.on('data', function (data) {
      jsonString += data;
    });
    req.on('end', function () {
      var category = JSON.parse(jsonString);
      // console.log(category);
      // responseData = JSON.stringify(category);
      res.send({
        'categories': {
          name: category.category.name,
          icon: category.category.icon
        }
      });
    });
  });

  categoriesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/categories', categoriesRouter);
};
