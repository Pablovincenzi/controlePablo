// const { Schema } = require('mongodb');

// const UserSchema = new Schema({
//   nome: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   telefone: { type: String },
//   senha: { type: String, required: true },
// });

// const User = mongoose.model('User', UserSchema);

// module.exports = User;
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const modelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  telefone: { type: String },
  senha: { type: String, required: true }
});

const modelName = 'User';

if(mongoose.connection && mongoose.connection.models[modelName]) {
    module.exports = mongoose.connection.models[modelName];
} else {
    module.exports = mongoose.model(modelName, modelSchema);
}