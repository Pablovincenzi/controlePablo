const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const modelSchema = new mongoose.Schema({
  cod: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  sabor: { type: String, required: true},
  marca: { type: String,required: true  },
  valor: { type: Number, required: true },
  images: {type: Object, required: true},
  dateCreated: {type: Date, required: true},
});

const modelName = 'Essencia';

if(mongoose.connection && mongoose.connection.models[modelName]) {
    module.exports = mongoose.connection.models[modelName];
} else {
    module.exports = mongoose.model(modelName, modelSchema);
}