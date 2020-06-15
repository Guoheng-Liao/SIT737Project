const jwt =  require('jsonwebtoken');
const config = require('./config');

// const getToken = (user) => {
//     return jwt.sign({
//         _id: user._id,
//         username: user.username,
//         isAdmin: user.isAdmin,

//     }, config.JWT_SECRET, {
//         expiresIn: '48h'
//     })
// }

// const isAuth = (req, res, next) => {
//     const token = req.headers.authorization;
//     if(token){
//         const onlyToken = token.slice(7, token.length);
//         jwt.verify(onlyToken, config.JWT_SECRET, (err, decode) => {
//             if(err){
//                 return res.status(401).send({ msg: 'Invalid Token'});
//             }
//             req.user = decode;
//             next();
//             return
//         });
//     }
//     else{
//         return res.status(401).send({ msg: "Token is not supplied"});
//     }

// }

// const isAdmin = (req, res, next) => {
//     console.log(req.user)
//     if(req.user && req.user.isAdmin){
//         return next();
//     }
//     return res.status(401).send({ msg: 'Admin Token is not valid.'})
// }

function getToken(user) {
    return jwt.sign({
        _id: user._id,
        username: user.username,
        isAdmin: user.isAdmin,

    }, config.JWT_SECRET, {
        expiresIn: '48h'
    })
}

function isAuth(req, res, next) {
    const token = req.headers.authorization;
    if(token){
        const onlyToken = token.slice(7, token.length);
        jwt.verify(onlyToken, config.JWT_SECRET, (err, decode) => {
            if(err){
                return res.status(401).send({ msg: 'Invalid Token'});
            }
            req.user = decode;
            next();
            return
        });
    }
    else{
        return res.status(401).send({ msg: "Token is not supplied"});
    }
}

function isAdmin (req, res, next){
    console.log(req.user)
    if(req.user && req.user.isAdmin){
        return next();
    }
    return res.status(401).send({ msg: 'Admin Token is not valid.'})
}

module.exports = { getToken, isAuth, isAdmin }
// module.exports = getToken;
// module.exports = isAuth;
// module.exports = isAdmin;


