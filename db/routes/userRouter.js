const router = require('express').Router();
let User = require('../models/user.model');
// let getToken = require('../util');
const getToken = require('../util').getToken;
const isAuth = require('../util').isAuth;
// let UserSession = require('../models/UserSession');


router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/register').post(async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const newUser = await new User({ 
        username,
        password, 
        isAdmin: false 
    });
    newUser.save()
        .then(() => res.json('User Register!!'))
        .catch(err => res.status(400).json('Error: ' + err));
})


router.route('/login').post(async(req, res) => {

    const loginUser = await User.findOne({
        username: req.body.username,
        password: req.body.password
    });
    if(loginUser){
        res.send({
            _id: loginUser.id,
            username: loginUser.username,
            isAdmin: loginUser.isAdmin,
            token: getToken(loginUser)
        })
    }else{
        res.status(401).send({msg: 'Invalid Username or Password'});
    }
})

router.route('/createadmin').get(async(req, res) => {
    try{
        const adminUser = new User({
            username: 'admin',
            password: '12345',
            isAdmin: true        
        });
        const newUser = await adminUser.save();
        res.send(newUser);
    }catch(error){
        res.send({msg: error.message});
    }
})

module.exports = router;