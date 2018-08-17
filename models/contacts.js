import { Schema, model } from 'mongoose';

const ContactSchema = Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  }
})

const Contact = module.exports = model('Contact', ContactSchema)
