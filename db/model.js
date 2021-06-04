const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for Todo list

const TodoSchema = new Schema({
    action: {
        type: String,
        required: [true, 'The todo text field is required']
    }
})

// Create model for Todo
const Todo = mongoose.model('todo', TodoSchema);
module.exports = Todo;