const router = require('express').Router();
let User = require('../models/user.model');
let UserSession = require('../models/UserSession');

router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('/add').post((req, res) => {
//     const username = req.body.username;
//     const password = req.body.password;
//     const password_confirmation = req.body.password_confirmation;

//     const newUser = new User ({
//         username,
//         password,
//         password_confirmation
//     });
    

//     newUser.save()
//         .then(() => res.json('Users added!'))
//         .catch(err => res.status(400).json('Error: ' + err));
// });


router.route('/add').post((req, res, next) => {
    const { body } = req;
    const {
        password,
        password_confirmation
    } = body;
    let {
        username
    } = body;
        
    if (!username) {
        return res.send({
            success: false,
            message: 'Error: Username cannot be blank.'
        });
    }
    if (!password) {
        return res.send({
            success: false,
            message: 'Error: Password cannot be blank.'
        });
    }

    if(password !== password_confirmation)
    {
        return res.send({
            success: false,
            message: 'Error: Password and Confirm Password do not match.'
        });
    }
    // if(!password_confirmation){
    //     return res.send({
    //         success: false,
    //         message: 'Error: Password confirmation cannot be blank.'
    //     });
    // }
        
    username = username.toLowerCase();
    username = username.trim();

    User.find({
        username: username
    }, (err, previousUsers) => {
        if (err) {
            return res.send({
                success: false,
                message: 'Error: Server error'
            });
        } else if (previousUsers.length > 0) {
            return res.send({
                    success: false,
                    message: 'Error: Account already exist.'
            });
        }

        // Save the new user
        const newUser = new User();
        newUser.username = username;
        newUser.password = newUser.generateHash(password);
        // newUser.password_confirmation = newUser.generateHash(password_confirmation);
        newUser.save((err, user) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: Server error'
                });
            }
            return res.send({
                success: true,
                message: 'Register new account successful!!!'
            });
        });
    }); 
}); // end of register endpoint

router.route('/login').post((req, res, next) => {
    const { body } = req;
    const {
        password,
        //  password_confirmation
    } = body;
    let {
        username
    } = body;
    // const username = req.body.username;
    // const password = req.body.password;

    if (!username) {
        return res.send({
            success: false,
            message: 'Error: Username cannot be blank.'
        });
    }
    if (!password) {
        return res.send({
            success: false,
            message: 'Error: Password cannot be blank.'
        });
    }

    username = username.toLowerCase();
    username = username.trim();

    User.find({
        username: username
    }, (err, users) => {
        if(err) {
            console.log('err 2:', err);
            return res.send({
                success: false,
                message: 'Error: Server error'
            });
        }
        if(users.length != 1 ){
            return res.send({
                success: false,
                message: 'Error: Username is invalid'
            });
        }

        const user = users[0];
        if(!user.validPassword(password)) {
            return res.send({
                success: false,
                message: 'Error: Password is invalid'
            });
        }

        //Otherwise correct user
        const userSession = new UserSession();
        userSession.username = user.username;
        userSession.userId = user._id;
        userSession.save((err, doc) => {
            if(err) {
                return res.send({
                    success: false,
                    message: 'Error: server error'
                });
            }
            console.log(doc._id);
            return res.send({
                success: true,
                message: 'Login Successful!',
                token: doc._id,
                name: users.username
            });
        });
    })         
}); // end of login endpoint

router.route('/verify/').get((req, res, next) => {
    // Get the token
    const { query } = req;
    const { token } = query;
    // ?token=test

    // Verify the token is one of a kind and it's not deleted.
    UserSession.find({
        _id: token,
        isDeleted: false
    }, (err, sessions) => {
        if(err) {
            return res.send({
                success: false,
                message: 'Error: Server error.'
            });
        }
        if(sessions.length != 1 ){
            return res.send({
                success: false,
                message: 'Error: verify is invalid.'
            });
        } else {
            return res.send({
                success: true,
                message: 'Great!!'
            });
        }
    });
});

router.route('/logout/:id').get((req, res, next) => {
    // Get the token
    // const { query } = req;
    // const { token } = query;
    // ?token="session._id"

    // Verify the token is one of a kind and it's not deleted.
    UserSession.findOneAndUpdate({
        // _id: token,
        // isDeleted: false
    }, {
        $set: {
            isDeleted: true
        }
    }, null, (err, sessions) => {
        if(err) {
            return res.send({
                success: false,
                message: 'Error: Server error.'
            });
        }
        return res.send({
            success: true,
            message: 'Great!!'
        });
    });
});


module.exports = router;