const express = require('express');
const app = express();


// app.use((req, res, next) => {
//     console.log('requête recue!');
//     next();
// });
// app.use((req, res, next) => {
//     res.status(201);
//     next();
// });
// app.use((req, res, next) => {
//     res.json({message: "votre lol merci"});
//     next();
// });
// app.use((req, res) => {
//     console.log('reponse bien envoyée! ');
// });


app.use((req, res) => {
    console.log('requête recue!');
    res.status(200);
    res.json({message: "votre lol merci"});
    console.log('reponse bien envoyée! ');
});


module.exports = app;