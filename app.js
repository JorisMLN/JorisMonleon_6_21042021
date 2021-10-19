/* - - - - - Test Deploy API - - - - - */

const express = require('express');
// const mongoose = require('mongoose');
// const path = require('path');

const sitesRoutes = require('./routes/sites');
// const userRoutes =  require('./routes/user');

// mongoose.connect('mongodb+srv://JorisM:Jolisaris789@cluster0.9eqyb.mongodb.net/dataP6?retryWrites=true&w=majority',
//   { useNewUrlParser: true,
//     useUnifiedTopology: true })
//   .then(() => console.log('Connexion à MongoDB réussie !'))
//   .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(express.json());

// app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/sites', sitesRoutes);
// app.use('/api/auth', userRoutes);

module.exports = app;