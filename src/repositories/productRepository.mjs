/** @typedef {import("../@types/Product").IProduct} IProduct */
/** @typedef {import("../@types/Product").IProductUpsert} IProductUpsert */

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

/**
 * Cria um novo produto no banco de dados.
 *
 * @param {IProductUpsert} data - Dados para o novo produto.
 * @returns {Promise<IProduct>}
 */
export const createProduct = (data) => prisma.product.create({ data })

/**
 * Atualiza um produto no banco de dados.
 *
 * @param {number|string} id - O ID do produto a ser atualizado.
 * @param {IProductUpsert} data - Dados do produto que serão alterados.
 * @returns {Promise<IProduct>}
 */

export const updateProduct = (id, data) =>
  prisma.product.update({
    where: { id: Number(id) },
    data: { ...data, updatedAt: new Date() },
  })

/**
 * Exclui um produto do banco de dados com base no ID fornecido.
 *
 * @param {number|string} id - O ID do produto a ser excluído. Pode ser um número ou uma string que representa um número.
 * @returns {Promise<Object>}
 */
export const deleteProduct = (id) =>
  prisma.product.delete({ where: { id: Number(id) } })

/**
 * Retorna uma lista de produtos.
 *
 * @returns {Promise<IProduct[]>} Uma promessa que resolve para um array de produtos.
 */
export const getProducts = () => prisma.product.findMany()

/**
 * Recupera um produto pelo seu identificador único.
 *
 * @param {number|string} id - O identificador único do produto.
 * @returns {Promise<IProduct|null>}
 */
export const getProductById = (id) =>
  prisma.product.findUnique({ where: { id: Number(id) } })

/**
 * Recupera um produto pelo seu nome no banco de dados.
 *
 * @param {string} name - O nome do produto a ser recuperado.
 * @returns {Promise<IProduct[]>}
 */
export const getProductByName = (name) =>
  prisma.product.findMany({
    where: {
      name: { contains: name, mode: 'insensitive' },
    },
  })

/**
 * Obtém a contagem de produtos.
 *
 * @returns {Promise<Number>} Um objeto contendo a contagem de produtos.
 */
export const getProductCounter = () => prisma.product.count()
