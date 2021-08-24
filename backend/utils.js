import jwt from "jsonwebtoken"

export const generateToken = (user) => {
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
    }, 
    process.env.JWT_SECRET||"whyareyouseingthis", 
    {
        expiresIn: '30d',
    })
}

export const isAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    if(authorization){
        const token = authorization.slice(7,authorization.length);
        jwt.verify(token, proccess.env.JWT_SECRET || 'somescrete', (err, decode) => {
            if(err){
                res.status(401).send({ message: 'Token invalido' });
            } else {
                res.user = decode;
                next( );
            }
        })
    } else {
        res.status(401).send({ message: 'No hay token' })
    }
}