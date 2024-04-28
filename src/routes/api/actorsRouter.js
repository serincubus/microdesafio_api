const express = require('express');
const router = express.Router();
const actorsController = require('../../controllers/api/actorsController')

router.get('/actors', actorsController.list)
router.post('/actors', actorsController.store);
router.delete('/actors/:id', actorsController.delete)


module.exports = router;