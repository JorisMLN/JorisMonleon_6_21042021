/* - - - - - USER CONTROLLERS - - - - - */

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');


const maskData = require('maskdata');

const emailMaskOptions = {
    maskWith: "*", 
    unmaskedStartCharactersBeforeAt: 0,
    unmaskedEndCharactersAfterAt: 257,
    maskAtTheRate: false
};

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {

            let emailBeforeMask = req.body.email;
            var maskedEmail = maskData.maskEmail2(emailBeforeMask, emailMaskOptions);

            const user = new User({
                email: maskedEmail,
                password: hash
            });
            console.log(user);
            
            user.save()
                .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};


// exports.signup = (req, res, next) => {
//     bcrypt.hash(req.body.password, 10)
//         .then(hash => {
//             const user = new User({
//                 email: req.body.email,
//                 password: hash
//             });
//             console.log(user);
//             user.save()
//                 .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
//                 .catch(error => res.status(400).json({ error }));
//         })
//         .catch(error => res.status(500).json({ error }));
// };

exports.login = (req, res, next) => {
    // User.findOne({ email: req.body.email })
    User.findOne({ maskedEmail })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'Utilisateur non trouvé !' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' });
                    }
                    console.log("user:" + user._id);
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};