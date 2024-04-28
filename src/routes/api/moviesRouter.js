const express = require('express');
const router = express.Router();
const moviesController = require('../../controllers/api/moviesController')

router.post('/movies', moviesController.store);
router.get('/movies', moviesController.list)
router.delete('/movies/:id', moviesController.delete)

module.exports = router;