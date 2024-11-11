const { json } = require('express')
const { Brand } = require('../models/brands')

const getBrands = async (req, res, next) => {
  try {
    const brands = await Brand.find().populate('products')
    return res.status(200).json(brands)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const postBrand = async (req, res, next) => {
  try {
    const newBrand = new Brand(req.body)
    const brandSaved = await newBrand.save()
    return res.status(201).json(brandSaved)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const putBrand = async (req, res, next) => {
  try {
    const { id } = req.params
    const oldBrand = await Brand.findById(id)
    const newBrand = new Brand(req.body)
    newBrand._id = id
    newBrand.products = [...oldBrand.products, ...req.body.products]
    const brandUpdated = await Brand.findByIdAndUpdate(id, newBrand, {
      new: true
    })
    return res.status(200).json(brandUpdated)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const deleteBrand = async (req, res, next) => {
  try {
    const { id } = req.params
    const brandDeleted = await Brand.findByIdAndDelete(id)
    return res.status(200).json(brandDeleted)
  } catch (error) {
    return res.status(400).json('Error')
  }
}
module.exports = { getBrands, postBrand, putBrand, deleteBrand }
