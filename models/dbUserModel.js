const {con} = require('../database/dbConnect.js');

const queryGetUsers = async ()=>{
    const db = await con();
    const data = await db.execute('select * from users');
    return data;
}


const queryGetOneUser = async (id)=>{
    const db = await con();
    const data = await db.execute('select * from users where id = ?', [id]);
    return data;
}


const queryCreateUser = async (body)=>{
    const {name} =  body;
    const db = await con();
    const data = await db.execute('insert into users (name) values (?)', [name]);
    return data;
}


const queryDeleteUser = async (id)=>{
    const db = await con();
    const data = await db.execute('delete from users where id = ?', [id]);
    return data;
}


const queryUpdateUser = async (body, id)=>{
    const {name} =  body;
    db = await con();
    const data = await db.execute('update users set name = ? where id = ?', [name, id]);
    return data;
}


module.exports = {
    queryGetUsers,
    queryGetOneUser,
    queryCreateUser,
    queryDeleteUser,
    queryUpdateUser
};

