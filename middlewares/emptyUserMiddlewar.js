const emptyUser = (req, res, next)=>{

    if(req.body.name == undefined || req.body.name == '') {
        res.status(400).json({"error": "Name or user can be send"});
    }else {
        next();
    }
}

module.exports = {emptyUser};