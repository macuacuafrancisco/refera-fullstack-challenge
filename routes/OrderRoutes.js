const express = require('express');
const route = express.Router()
const Order = require('../models/Order')


route.post(
    '/',
    async (req, res) => {
      let {  category, contactName, contactPhone, agency,    company,   deadline } = req.body;

        try {      
          let  newOrder = new Order({                   
                      
                    category, 
                    contactName,
                    contactPhone,
                    agency,
                    company,
                    deadline
            })  
                 
            const result = await newOrder.save();
            return res.json(result);      
        } 
        catch (error) {
            res.status(500).send("An Error Ocurred on Order Creation : "+error);
        }
      }
);

route.get(
  '/',
  async (req, res) => {
      try {
          const result = await Order.find().populate('category');
         
          return res.json(result);            
      } catch (error) {
          res.status(500).send("An Error Ocurred on Order List : "+error);
      }
    }
);


route.get(
  '/:id',
  async (req, res) => {
      try {
          const result = await Order.findById(req.params.id);
         
          return res.json(result);            
      } catch (error) {
          res.status(500).send("An Error Ocurred on Order Retrive : "+req.params.id);
      }
    }
);


route.delete(
  '/:id',
  async (req, res) => {
      try {          
          const result = await Order.findById(req.params.id);
          
          if (!result) {
              return res.status(404).json({ msg: 'Order not found' });
            }
          await result.remove();
          res.json({ msg: 'Order removed' });
       
      } catch (error) {
          res.status(500).send("An Error Ocurred on Order Deletion : "+req.params.id);
      }
    }
);

route.put(
  '/:id',
  async (req, res) => {
      try {
          const result = await Order.findById(req.params.id);
                    
          if (!result) {
              return res.status(404).json({ msg: 'Order not found' });
            }
           
          if(req.body.description){
            result.description = req.body.description
          }

          if(req.body.Category){
                  result.Category = req.body.Category
          }

          if(req.body.contactName){
                  result.contactName = req.body.contactName
          }
          if(req.body.contactPhone){
            result.contactPhone = req.body.contactPhone
    }
          if(req.body.agency){
                result.agency = req.body.agency
          }

          if(req.body.company){
                  result.company = req.body.company
          }

          if(req.body.deadline){
                result.deadline = req.body.deadline
          }

          await result.save();
          return res.json(result);

      } catch (error) {
          res.status(500).send("An Error Ocurred on Order Modify : "+req.params.id);
      }
    }
);

module.exports = route;