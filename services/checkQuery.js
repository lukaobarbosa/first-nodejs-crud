const checkOperation = (res, rows)=>{

    if(rows.affectedRows == 0) {
        res.status(400).json({"error": "user not exist"})
    }else {
        res.status(200).json({"message": "ok"});
    } 
}

const checkEmptyData = (res, data)=>{

    if(data == '') {
        res.status(400).json({"error": "user not exist"})
    }else{
        res.status(200).json(data);
    }
}


module.exports = {checkOperation, checkEmptyData};