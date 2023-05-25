export const userAuth = (req, res,next) => {
    if(req.decode.role === "1"){
        next()
    }else {
        res.status(401).send('Unauthorized');
    }
}