const mongoose = require("mongoose");


const dataSchema = new mongoose.Schema({
  project_name: {
    required: true,
    type: String,
  },
  user_id: {
    required: true,
    type:Number,
  }
},
{
    collection:'project'
}
);

module.exports = mongoose.model("Project", dataSchema);


