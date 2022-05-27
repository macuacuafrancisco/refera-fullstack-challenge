const mongoose = require('mongoose');
const  {Schema}  = mongoose;

const orderSchema = new Schema({
  category: {
    type: Schema.Types.ObjectId,
    ref:'category',
    required: true
  }, 
  contact: {
    type: String, 
    required:true
  } ,
  agency:   {
    type: String, 
    required:true
  } ,
  company:   {
    type: String, 
    required:true
  } ,
  deadline: { 
    type: Date, 
    default: Date.now 
  }, 
});

module.exports = mongoose.model('order', orderSchema)