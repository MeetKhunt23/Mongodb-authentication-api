const express = require('express');
const router = express.Router()
const users = require("../controller/users.js");
// Post Method
router.post('/signup',users.signup)
router.post('/login',users.login)

// router.get('/getalldata',users.getalldata)
// router.get('/getdatabyid/:id',users.getdatabyid)
// router.patch('/update/:id',users.update)
// router.delete('/delete/:id',users.delete)

// //Post Method
// router.post('/post', (req, res) => {
//     res.send('Post API')
// })

module.exports = router;