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

router.delete('/api/note/:id', (req,res) =>{
    console.log(req.params.id)
    db.query('DELETE FROM notes WHERE id = ?', [req.params.id], function(err, result){
        if (err) {
            // If an error occurred, send a generic server failure
            return res.status(500).end();
          }
          else if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          }
          res.status(200).end();
      
    });
});

module.exports = router;