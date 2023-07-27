const express = require('express');
const router = express.Router();
import multer from 'multer';

const UserController = require('./controllers/userController');
const EssenciaController = require('./controllers/EssenciaController');
const AuthValidator = require('./validators/AuthValidator');
// const Auth = require('./middlewares/Auth');

// const AuthValidator = require('./validators/AuthValidator');
// const UserValidator = require('./validators/UserValidator');

// const AuthController = require('./controllers/AuthController');

// const AdsController = require('./controllers/AdsController');


//Configurações do arquivo

const storageConfig = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,'./temp')
  }, 
  filename:(req,file,cb)=>{
    cb(null,fieldname+Date.now())
  }
  
})
const upload = multer({
  storage:storageConfig,
  fileFilter:(req,file,cb)=>{
    const allowed=['image/jpg','image/png','image/jpeg']
    cb(null,allowed.includes(file.mimetype))
  }
})

//Rotas
router.get('/ping', (req, res)=>{
  res.json({pong: true});
 }); 

router.post('/user/signin', AuthValidator.signin, AuthController.signin);
router.post('/user/signup', AuthValidator.signup, AuthController.signup);
router.get('/user', UserController.getAll)
router.get('/userbuscar/:cod', UserController.findByCod)
router.post('/usersignup', UserController.registerUser)
router.delete('/userdelete', UserController.deleteByCod)

router.post('/cadessencia', EssenciaController.cadEssencia)
router.post('/essenciauploadimg', upload.single('imgessencia'),EssenciaController.uploadImgEssencia)
// router.get('/states', UserController.getStates);
// router.post('/state/register',UserValidator.stateregister, UserController.registerState); 

// router.post('/user/signin', AuthValidator.signin, AuthController.signin);
//router.post('/user/signup', AuthValidator.signup, AuthController.signup);

// router.get('/user/me', Auth.private, UserController.info);
// router.put('/user/me', UserValidator.editAction, Auth.private, UserController.editAction);

// router.get('/categories', AdsController.getCategories);

// router.post('/ad/add', Auth.private, AdsController.addAction);
// router.get('/ad/list', AdsController.getList);
// router.get('/ad/item', AdsController.getItem);
// router.post('/ad/:id', AdsController.editAction);

module.exports = router;