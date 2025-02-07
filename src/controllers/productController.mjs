import * as productService from '../services/productService.js'

/**
 * Cria um novo produto
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
export const createProduct = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body)
    await res.json(product)
  } catch (error) {
    await res.status(500).json({ error: error.message })
  }
}

/**
 * Atualiza um produto
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
export const updateProduct = async (req, res) => {
  try {
    const product = await productService.updateProduct(req.params.productId, req.body)
    await res.json(product)
  } catch (error) {
    const statusCode = error.message.include('não existe') ? 404 : 500
    await res.status(statusCode).json({ error: error.message })
  }
}

/**
 * Delete um produto
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
export const deleteProduct = async (req, res) => {
  try {
    const result = await productService.deleteProduct(req.params.productId)
    await res.json({ deleted: !!result })
  } catch (error) {
    const statusCode = error.message.include('não existe') ? 404 : 500
    await res.status(statusCode).json({ error: error.message })
  }
}

/**
 * Busca todo os produtos cadastrado no banco de dados
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
export const getAllProducts = async (req, res) => {
  const products = await productService.getProducts()
  await res.json(products)
}

/**
 * Busca o produto atravez do ID
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
export const getProductById = async (req, res) => {
  try {
    const product = await productService.getProductById(req.params.productId)
    await res.json(product)
  } catch (error) {
    await res.status(404).json({ error: error.message })
  }
}

/**
 * Busca todo os produtos que contem o nome informado
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
export const getProductByName = async (req, res) => {
  const products = await productService.getProductByName(req.query.name)
  await res.json(products)
}

/**
 * Retorna o total de produtos cadastrados
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
export const getProductCounter = async (req, res) => {
  const products = await productService.getProductCounter()
  await res.json({ products })
}


