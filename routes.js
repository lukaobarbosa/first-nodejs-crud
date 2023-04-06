const express = require('express');
const router = express.Router();
const {
    getUsers, 
    createUser,
    deleteUser,
    getOneUser,
    updateUser
    } = require('./controllers/usersController.js');
const {emptyUser} = require('./middlewares/emptyUserMiddlewar.js');
const {intId} = require('./middlewares/intId.js');


router.get('/users', getUsers);

router.get('/user/:id', intId, getOneUser);

router.post('/store', emptyUser ,createUser);

router.delete('/delete/:id', intId, deleteUser);

router.put('/update/:id', intId, emptyUser, updateUser);

module.exports = {
    router 
};