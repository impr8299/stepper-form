const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    meal_category: {
      type: String,       
      required: true,
      enum: {
        values : ["lunch" , "dinner"],
        message : "Meal Category must be a lunch or dinner"
      },   
      trim: true          
    },
    no_of_people: {
      type: Number,
      required: true,
      min: [1, 'Number of people must be at least 1'],  
      max: [10, 'Number of people must be less then or equals to 10']
    },
    restaurant: {
      type: String,
      default:""
    },
    dishes: [{
      name: {
        type: String 
      },
      servings: {
        type: Number       
      }
    }],
    status :{
      type: String,
      enum : ["pending","completed"],
      default : "pending"
    },
    progress :{
      type: Number,
      required: true,
      default : 0,
      min: [0, 'Number of people must be at least 0'],  
      max: [100, 'Number of people must be less then or equals to 100']
    },
    step :{
      type: Number,
      required: true,
      min: [1, 'Number of people must be at least 1'],  
      max: [4, 'Number of people must be less then or equals to 4']
    }
  },{
    timestamps : true
  }
);
  
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;