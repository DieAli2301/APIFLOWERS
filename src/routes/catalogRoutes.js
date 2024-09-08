const express = require('express');
const router = express.Router();
const catalogController = require('../controllers/catalogController');

router.get('/', catalogController.getAllProducts);
router.get('/:id', catalogController.getProductById);
router.post('/', catalogController.createProduct);
router.put('/:id', catalogController.updateProduct);
router.delete('/:id', catalogController.deleteProduct);

module.exports = router;
