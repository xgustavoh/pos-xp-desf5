import * as productService from '../services/productService.js'

/**
 * Cria um novo produto
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
export const createProduct = async (req, res) => {
  const product = await productService.createProduct(req.body)
  await res.json(product)
}

/**
 * Atualiza um produto
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
export const updateProduct = async (req, res) => {
  const product = await productService.updateProduct(req.params.productId, req.body)
  await res.json(product)
}

/**
 * Delete um produto
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
export const deleteProduct = async (req, res) => {
  const result = await productService.deleteProduct(req.params.productId)
  await res.json({ deleted: !!result })
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
  const product = await productService.getProductById(req.params.productId)
  await res.json(product)
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
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
export const getProductCounter = async (req, res) => {
  const products = await productService.getProductCounter()
  await res.json({ products })
}


