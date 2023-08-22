const Users = require("../models/users.js");

exports.signup = async (req, res) => {
  try {
    var device_token =
      Math.floor(Math.random() * 10000000) +
      req.body.name +
      Math.floor(Math.random() * 10000000);

    const data = new Users({
      name: req.body.name,
      email: req.body.email,
      contact: req.body.contact,
      password: req.body.password,
      device_token: device_token,
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

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    var device_token =
      Math.floor(Math.random() * 1000000000) 
    //   console.log(device_token); return false

    const userlogin = await Users.find({ email: email, password: password });
    var user_id = userlogin[0].id;
    const options = { new: true };
    const updatedData = {device_token:device_token}
    const result = await Users.findByIdAndUpdate(
      user_id,
      updatedData,
      options
    );
    // console.log(result); return false
    if (result) {
      res.status(200).json({ message: "User Logged in successfully." });
    } else {
      res.status(400).json({ message: "Enter correct login details." });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

