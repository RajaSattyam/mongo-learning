const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name :String
});

const Author = mongoose.model('authors', AuthorSchema);

module.exports = Author;