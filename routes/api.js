const express = require('express');
const router = express.Router();
const Todo = require('../db/model');

router.get('/todos', (req, res, next) => {
    Todo.find({}, 'action')
        .then(data => {
            console.log("Todo lists fetched...")
            console.log(data)
            res.json(data)
        })
        .catch(next)
});

router.post('/todos', (req, res, next) => {
    if (req.body.action) {
        Todo.create(req.body)
            .then(data => {
                console.log("New todo saved")
                res.json(data)
            })
            .catch(next)
    } else {
        res.json({
            error: "The input field is empty!"
        })
    }
});

router.delete('/todos/:id', (req, res, next) => {
    Todo.findOneAndDelete({ "_id": req.params.id })
        .then(data => {
            console.log("Todo item deleted...")
            res.json(data)
        })
        .catch(next);
});

module.exports = router