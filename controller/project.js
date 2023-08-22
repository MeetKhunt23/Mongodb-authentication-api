const Project = require("../models/project.js");

exports.signup = async (req, res) => {
    try {
  const{project_name,user_id}=req.body;
      const data = new Users({
        project_name: project_name,
        user_id: user_id,
      });
  
      const Number = await Users.find({ contact: req.body.contact });
      // console.log(Number.length); return false
      if (Number.length > 0) {
        res.status(400).json({ message: "Number Allready Exists" });
      } else {
        const Email = await Users.find({ email: req.body.email });
        if (Email.length > 0) {
          res.status(400).json({ message: "Email Allready Exists" });
        } else {
          const dataToSave = await data.save();
          res.status(200).json(dataToSave);
        }
      }

      // console.log(req.body); return false
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
