const intId = (req, res, next)=>{

    const id = parseInt(req.params.id);

    if(isNaN(id)) {
        res.status(400).json({"error": "id need be a number"});
    }else {
        next();
    }
}

module.exports = {intId};