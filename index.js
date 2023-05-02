const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000

const chefs = require('./data/chefs.json');
const recipes = require('./data/recipes.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('delish is running');
})

app.get('/chefs', (req, res) =>{
    res.send(chefs);
})
app.get('/recipes', (req, res) =>{
    res.send(recipes);
})

app.listen(port, () => {
    console.log(`delish listening on port ${port}`)
})