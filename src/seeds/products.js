const mongoose = require('mongoose')
const { Product } = require('../api/models/products')
const { productsData } = require('../data/products')

const runSeed = async () => {
  try {
    await mongoose.connect('mongodb+srv://jiashunbbv:c4rLoxwJ8KhkYQ26@cluster0.wbype.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

    await Product.collection.drop()
    console.log('products deleted')

    await Product.insertMany(productsData)
    console.log('products inserted')
    await mongoose.disconnect()
    console.log('disconnect from database')
  } catch (error) {
    console.log('error')
  }
}

runSeed()
