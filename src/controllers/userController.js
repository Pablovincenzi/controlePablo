const mongoose = require('mongoose');
//const bcrypt = require('bcrypt');
//const { validationResult, matchedData } = require('express-validator');

// const State = require('../models/State');
const User = require('../models/User');
// const Category = require('../models/Category');
// const Ad = require('../models/Ad');

module.exports = {
  findByCod: async  (req, res) => {
    let codUser = req.params.cod

    let users = await User.findOne({cod:codUser})
    res.json({codUser,users});
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
      registerUser : async (req, res) => {
        
            
        // const name = req.body.name ;
        // const telefone = req.body.telefone ;
          const newUser = new User({
            cod:req.body.cod,
            name: req.body.name,
            email : req.body.email,
            telefone: req.body.telefone,
            senha: req.body.senha

         });
       // console.log(telefone,name)
         await newUser.save();
         res.json({Ok:'cadastro realizado'});
        

        
     },
    // info: async (req, res) => {
    //     let token = req.query.token;

    //     const user = await User.findOne({token});
    //     const state = await State.findById(user.state);
    //     const ads = await Ad.find({idUser: user._id.toString()});

    //     let adList = [];
    //     for(let i in ads) {
    //         const cat = await Category.findById(ads[i].category);
    //         adList.push({ ...ads[i], category: cat.slug });
    //     }

    //     res.json({
    //         name: user.name,
    //         email: user.email,
    //         state: state.name,
    //         ads: adList
    //     });
    // },
    // editAction: async (req, res) => {
    //     const errors = validationResult(req);
    //     if(!errors.isEmpty()) {
    //         res.json({error: errors.mapped()});
    //         return;
    //     }
    //     const data = matchedData(req);

    //     let updates = {};

    //     if(data.name) {
    //         updates.name = data.name;
    //     }

    //     if(data.email) {
    //         const emailCheck = await User.findOne({email: data.email});
    //         if(emailCheck) {
    //             res.json({error: 'E-mail já existente!'});
    //             return;
    //         }
    //         updates.email = data.email;
    //     }

    //     if(data.state) {
    //         if(mongoose.Types.ObjectId.isValid(data.state)) {
    //             const stateCheck = await State.findById(data.state);
    //             if(!stateCheck) {
    //                 res.json({error: 'Estado não existe'});
    //                 return;
    //             }
    //             updates.state = data.state;
    //         } else {
    //             res.json({error: 'Código de estado inválido'});
    //             return;
    //         }
    //     }

    //     if(data.password) {
    //         updates.passwordHash = await bcrypt.hash(data.password, 10);
    //     }
        
    //     await User.findOneAndUpdate({token: data.token}, {$set: updates});

    //     res.json({});
    // },
    
};