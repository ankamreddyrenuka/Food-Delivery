import foodModel from '../models/foodModel.js'
import fs from 'fs'
import path from 'path'

// Add Food
const addFood = async (req, res) => {
  try {
    const { name, description, price, category } = req.body

    console.log("BODY:", req.body)
    console.log("FILE:", req.file)

    // Validate required fields (description optional)
    if (!name || !price || !category || !req.file) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, price, category and image'
      })
    }

    // Get uploaded image filename
    const image = req.file.filename

    // Create new food item
    const foodItem = new foodModel({
      name,
      description: description || "",
      price,
      category,
      image
    })

    // Save to database
    await foodItem.save()

    res.status(201).json({
      success: true,
      message: 'Food item added successfully',
      data: foodItem
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error adding food item',
      error: error.message
    })
  }
}

// List all food items
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({})

    res.status(200).json({
      success: true,
      message: 'Food items retrieved successfully',
      data: foods
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving food items',
      error: error.message
    })
  }
}

// Remove Food
const removeFood = async (req, res) => {
  try {
    const { id } = req.params

    const food = await foodModel.findById(id)

    if (!food) {
      return res.status(404).json({
        success: false,
        message: 'Food item not found'
      })
    }

    // Delete image file
    if (food.image) {
      const imagePath = path.join('uploads', food.image)
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath)
      }
    }

    await foodModel.findByIdAndDelete(id)

    res.status(200).json({
      success: true,
      message: 'Food item deleted successfully'
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting food item',
      error: error.message
    })
  }
}

// Update Food
const updateFood = async (req, res) => {
  try {
    const { id } = req.params
    const { name, description, price, category } = req.body

    const food = await foodModel.findById(id)

    if (!food) {
      return res.status(404).json({
        success: false,
        message: 'Food item not found'
      })
    }

    // Update fields
    if (name) food.name = name
    if (description) food.description = description
    if (price) food.price = price
    if (category) food.category = category

    // Handle image update
    if (req.file) {
      if (food.image) {
        const oldImagePath = path.join('uploads', food.image)
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath)
        }
      }
      food.image = req.file.filename
    }

    await food.save()

    res.status(200).json({
      success: true,
      message: 'Food item updated successfully',
      data: food
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating food item',
      error: error.message
    })
  }
}

export { addFood, listFood, removeFood, updateFood }
