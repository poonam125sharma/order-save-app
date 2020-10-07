module.exports = app => {
  const bracket = require('../controllers/bracket.controller.js');

  var router = require('express').Router();

  // Create a new bracket
  router.post('/', bracket.addBracket);

  // Retrieve all brackets
  router.get('/', bracket.getAllBrackets);

  // Update a bracket
  router.put('/:id', bracket.updateBracket);

  // Get a bracket with id
  router.get('/:id', bracket.getBracket);

  // Delete a bracket
  router.delete('/:id', bracket.deleteBracket);

  app.use('/api/brackets', router);
};
