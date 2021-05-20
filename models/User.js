/* - - - - - USER MODEL - - - - - */

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const validate = require('mongoose-validator');

const userSchema = mongoose.Schema({
    // userId: Donnée automatiquement par mongoDb,
    email: {
        type: String,
        required: true,
        unique: true,
        // validate: {
        //     validator: function validateEmail(email) {
        //         let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //         return re.test(String(email).toLowerCase());
        //     },
        //     message: "not valid mail"
        // }
        validate: [
            validate({
                validator: "isEmail",
                message: "not valid mail"
            })
        ]
    },
    password: { type: String, required: true }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);