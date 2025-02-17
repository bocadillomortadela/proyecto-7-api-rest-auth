const { generateSign } = require('../../config/jwt')
const { User } = require('../models/users')
const bcrypt = require('bcrypt')

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find()
    return res.status(200).json(users)
  } catch (error) {
    return res.status(400).json('error')
  }
}
const register = async (req, res, next) => {
  try {
    const newUser = new User({
      userName: req.body.userName,
      password: req.body.password,
      rol: 'user'
    })

    const duplicateUser = await User.findOne({ userName: req.body.userName })

    if (duplicateUser) {
      return res.status(400).json('already exists')
    }

    const userSaved = await newUser.save()

    return res.status(201).json(userSaved)
  } catch (error) {
    console.error(error)
    return res.status(400).json('error')
  }
}

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({
      userName: req.body.userName
    })

    if (!user) {
      return res.status(400).json("user doesn't exist")
    }

    if (bcrypt.compareSync(req.body.password, user.password)) {
      const token = generateSign(user._id)
      return res.status(200).json({ user, token })
    } else {
      return res.status(400).json('wrong password')
    }

    return res.status(400).json('user exists')
  } catch (error) {
    return res.status(400).json('error')
  }
}

const updateUserRole = async (req, res, next) => {
  try {
    const adminUser = await User.findById(req.user._id)
    if (adminUser.rol !== 'admin') {
      return res.status(400).json('aceess denied')
    }

    const userId = req.params.userId
    const { rol } = req.body

    const user = await User.findByIdAndUpdate(userId, { rol }, { new: true })
    if (!user) {
      return res.status(400).json('user not found')
    }
    return res.status(200).json('updated')
  } catch (error) {
    return res.status(400).json('error')
  }
}

const deleteUser = async (req, res, next) => {
  try {
    const userDelete = req.params.userId
    const requestUser = req.user

    if (requestUser.rol === 'admin' || requestUser._id.toString() === userDelete) {
      const userDeleted = await User.findByIdAndDelete(userDelete)
      if (!userDeleted) {
        return res.status(400).json('usern not found')
      }
      return res.status(200).json('user deleted')
    } else {
      return res.status(400).json('acces denied')
    }
  } catch (error) {
    return res.status(400).json('error')
  }
}
module.exports = { getUsers, register, login, updateUserRole, deleteUser }
