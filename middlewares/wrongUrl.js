const wrongUrl = (err, req, res, next)=>{

    if(res.get('Status')) {
        console.log('teste');
        res.status(404).json({"error": "not found"});

    }else {

        next();
    }
}

module.exports = {wrongUrl};