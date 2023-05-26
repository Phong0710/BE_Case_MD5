export const checkRoleLandlord = (req, res, next) => {

    if (req.decode.role===1){
        return  next()
    } else {
        res.status(401).json({
            message: 'You must be an administrator'
        })
    }
}