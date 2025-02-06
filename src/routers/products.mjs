import express from 'express'
import * as productController from '../controllers/productController.mjs'

const router = express.Router()

router.post('/', productController.createProduct)

router.put('/:productId', productController.updateProduct)

router.delete('/:productId', productController.deleteProduct)

router.get('/', productController.getAllProducts)

router.get('/search', productController.getProductByName)

router.get('/count', productController.getProductCounter)

router.get('/:productId', productController.getProductById)

export default router
