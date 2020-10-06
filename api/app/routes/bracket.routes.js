module.exports = app => {
  const brackets = require('../controllers/bracket.controller.js');

  var router = require('express').Router();

  // Create a new bracket
  router.post('/', brackets.createBracket);

  // Retrieve all brackets
  router.get('/', brackets.getAllBrackets);

  // Update a bracket
  router.put('/:id', brackets.updateBracket);

  // Get a bracket with id
  router.get('/:id', brackets.getBracket);

  // Delete a bracket
  router.delete('/:id', brackets.deleteBracket);

  app.use('api/brackets', router);
}
