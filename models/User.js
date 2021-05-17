/* - - - - - USER MODEL - - - - - */

const mongoose =  require('mongoose');
const uniqueValidator =  require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    // userId: Donné automatiquement par mongoDb,
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);