/** @typedef {import("../@types/Product").IProduct} IProduct */
/** @typedef {import("../@types/Product").IProductUpsert} IProductUpsert */

import * as productRepository from '../repositories/productRepository.mjs'

/**
 * Cadastra um novo produto
 *
 * @param {IProductUpsert} data - Dados para o novo produto.
 * @returns {Promise<IProduct>}
 */
export const createProduct = (data) => productRepository.createProduct(data)

/**
 * Atualiza o produto com o ID informado no banco de dados
 *
 * @param {number} id - O ID do produto a ser atualizado.
 * @param {IProductUpsert} data - Dados do produto que serão alterados.
 * @returns {Promise<IProduct>}
 */
export const updateProduct = async (id, data) => {
  const product = await productRepository.getProductById(id)
  if (!product) throw new Error('Produto não existe')

  const productUpdated = await productRepository.updateProduct(id, data)
  return productUpdated
}

/**
 * Exclui o produto com o ID informado do banco de dados
 *
 * @param {number|string} id - O ID do produto a ser excluído. Pode ser um número ou uma string que representa um número.
 * @returns {Promise<boolean>}
 */
export const deleteProduct = async (id) => {
  const product = await productRepository.getProductById(id)
  if (!product) throw new Error('Produto não existe')
  
  const productDeleted = await productRepository.deleteProduct(id)
  return productDeleted
}

/**
 * Retorna todos os produtos cadastrados
 *
 * @returns {Promise<IProduct[]>}
 */
export const getProducts = () => productRepository.getProducts()

/**
 * Retorna o produto que contem o ID informado
 *
 * @param {number|string} id - ID do produto
 * @returns {Promise<IProduct|null>}
 */
export const getProductById = (id) => productRepository.getProductById(id)

/**
 * Retorna os produtos que contem o nome informado
 *
 * @param {string} name - Nome do produto
 * @returns {Promise<IProduct[]>}
 */
export const getProductByName = (name) => productRepository.getProductByName(name)

/**
 * Retorna o total de produtos cadastrados
 *
 * @returns {Promise<Number>}
 */
export const getProductCounter = () => productRepository.getProductCounter()
