const mongoose = require("mongoose");


const dataSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  contact: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  device_token:{
    required: true,
    type: String,
  }
},
{
    collection:'users'
}
);

module.exports = mongoose.model("Data", dataSchema);


