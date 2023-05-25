export const adminAuth = (req,res,next) => {
    if(req.decode.role === '0'){
        next()
    } else {
        res.status(401).send('Unauthorized')
    }
}