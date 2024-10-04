const express = require('express');

const userController = require("../Controllers/userController")
const router = express.Router();

router.route('/api/v1/users')
.get(userController.getAllUsers)
.post(userController.putUsers);

router.route('/api/v1/user/:id')
.get(userController.GetUser)

.patch(userController.updateUsers)
.delete(userController.deleteUsers);

module.exports = router;