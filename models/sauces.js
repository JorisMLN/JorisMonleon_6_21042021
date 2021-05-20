/* - - - - - SAUCES MODEL - - - - - */

const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({
    userId: {type: String, required: true},
    name: {type: String, trim: true, required: true},
    manufacturer: {type: String, trim: true, required: true},
    description: {type: String, trim: true, required: true},
    mainPepper: {type: String, trim: true, required: true},
    imageUrl: {type: String, required: true},
    heat: {type: Number, min: [0, 'Dat Child !!'], max: [10, 'Too much Heat !!'], required: true},
    likes: {type: Number, default: 0},
    dislikes: {type: Number, default: 0},
    usersLiked: {type: [String], default: []},
    usersDisliked: {type: [String], default: []}
});

module.exports = mongoose.model('Sauce', sauceSchema);