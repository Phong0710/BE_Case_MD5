export const decentralization = (req, res, next) => {
    if(req.decode.role === 2){
        next()
    }else{
        res.status(401).json({
            message: 'You must be an administrator'
        })
    }
}