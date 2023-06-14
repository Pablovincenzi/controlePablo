const { Schema } = require('mongodb');

const UserSchema = new Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  telefone: { type: String },
  senha: { type: String, required: true },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;