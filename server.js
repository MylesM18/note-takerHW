const express = require('express');
const app = express();
const routes = require('./routes');

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static('public'));
app.use(routes);

app.listen(PORT, ()=> console.log('app is listening on port '+ PORT))