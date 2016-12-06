var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: false
  },
  cep: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  created_at: Date
});

module.exports = mongoose.model('Users', userSchema);
