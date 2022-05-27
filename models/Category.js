const mongoose = require('mongoose');
const  {Schema}  = mongoose;

const categorySchema = new Schema({
  description: {
    type: String, 
    required:true,
    unique:true
  } ,
  creation: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model('category', categorySchema)