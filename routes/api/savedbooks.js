
// Requirements
const router = require('express').Router();
const savedbooksController = require('../../controllers/savedbooksController');

// Matches URL of '/api/savedbooks'
router.route('/')
  .get(savedbooksController.findAll)
  .post(savedbooksController.create);

// Matches URL of '/api/savedbooks/:id'
router.route('/:id')
  .delete(savedbooksController.delete);

module.exports = router;