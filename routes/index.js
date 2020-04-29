const router = require('express').Router();
const path = require('path');
const db = require('../config');

router.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, './public/index.html'))
})

router.post('/api/note', ({body},res)=>{
    db.query('INSERT INTO notes SET ?', body).then(info=>res.json(info))
})

router.get('/api/note', (req,res)=>{
    db.query('SELECT * FROM notes').then(data=>res.json(data))
})

module.exports = router;