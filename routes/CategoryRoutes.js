const express = require('express');
const route = express.Router()
const Category = require('../models/Category')
const Order = require('../models/Order')

route.post(
    '/',
    async (req, res) => {
      let {  description } = req.body;
      let newCategory;
        try {      
            newCategory = new Category({              
                    description  
            })  
                 
            const result = await newCategory.save();
            return res.json(result);      
        } 
        catch (error) {
            res.status(500).send("An Error Ocurred on Category Creation : "+error);
        }
      }
);

route.get(
  '/',
  async (req, res) => {
      try {
          const result = await Category.find();
         
          return res.json(result);            
      } catch (error) {
          res.status(500).send("An Error Ocurred on Category Creation : "+error);
      }
    }
);

route.get(
  '/:id',
  async (req, res) => {
      try {
          const result = await Category.findById(req.params.id);
         
          return res.json(result);            
      } catch (error) {
          res.status(500).send("An Error Ocurred on Category Creation : "+req.params.id);
      }
    }
);


route.delete(
  '/:id',
  async (req, res) => {
      try {
          const order = await Order.find({category :req.params.id});
       
          if (order.length>0) {
            return res.status(500).json({ msg: 'Category cannot be deleted because has a Order Linked!' });
          }

          const result = await Category.findById(req.params.id);
          
          if (!result) {
              return res.status(404).json({ msg: 'Category not found' });
            }
          await result.remove();
          res.json({ msg: 'Category removed' });
       
      } catch (error) {
            res.status(500).send("An Error Ocurred on Category Deletion : "+req.params.id);
      }
    }
);

route.put(
  '/:id',
  async (req, res) => {
      try {
          const result = await Category.findById(req.params.id);
                    
          if (!result) {
              return res.status(404).json({ msg: 'Category not found' });
            }
           
          if(req.body.description){
            result.description = req.body.description
          }

          await result.save();
          return res.json(result);

      } catch (error) {
          res.status(500).send("An Error Ocurred on Category Creation : "+req.params.id);
      }
    }
);

module.exports = route;