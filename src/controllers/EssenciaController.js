const mongoose = require('mongoose');
//const bcrypt = require('bcrypt');
//const { validationResult, matchedData } = require('express-validator');

// const State = require('../models/State');
const Essencia = require('../models/essencia');
// const Category = require('../models/Category');
// const Ad = require('../models/Ad');

module.exports = {
  findByCod: async  (req, res) => {
    let codEssencia = req.params.cod

    let essencias = await User.findOne({cod:codEssencia})
    res.json({codEssencia,essencias});
},
  
  deleteByCod: async (req, res) => {
    let codUser = req.body.cod
    console.log(codUser)


    let users = await User.deleteOne({cod:codUser})
    res.json({teste:'deletado com sucesso'});
},
    getAll: async (req, res) => {
        let users = await User.find();
        res.json({users});
    },
   // cadastro Usuário
   cadEssencia : async (req, res) => {
        
            
    
          const newEssencia = new Essencia({
            cod: req.body.cod,
            name: req.body.name,
            sabor : req.body.sabor,
            marca: req.body.marca,
            valor: req.body.valor

         });
     
         await newEssencia.save();
         res.json({Ok:'cadastro realizado'});
        

        
     },
    
    
};