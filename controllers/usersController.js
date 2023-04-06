const {
    queryGetUsers,
    queryCreateUser,
    queryDeleteUser,
    queryGetOneUser,
    queryUpdateUser,
} = require('../models/dbUserModel.js');
const {
    checkOperation,
    checkEmptyData
} = require('../services/checkQuery.js');


const getUsers = async (req, res)=>{

    const [data] = await queryGetUsers();
    
    res.status(200).json({"data": data});
}


const getOneUser = async (req, res)=>{

    const [data] = await queryGetOneUser(req.params.id);

    checkEmptyData(res, data);
}


const createUser = async (req, res)=>{

    await queryCreateUser(req.body);
    
    res.status(201).json({"data": req.body, "message": "created " });
}


const deleteUser = async (req, res)=>{
    
    const [rows] = await queryDeleteUser(req.params.id);

    checkOperation(res, rows);    
}

const updateUser = async (req, res)=>{
    
    const name = req.body;

    const [rows] = await queryUpdateUser(name, req.params.id);
    
    checkOperation(res, rows);
}

module.exports = {
    getUsers,
    createUser,
    deleteUser,
    getOneUser,
    updateUser
    };



