var express = require('express');
var mongoose = require('mongoose');
var DB_URL = "mongodb://127.0.0.1:27017/BlessingSoftware"

mongoose.connect(DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

mongoose.connection.on('connected', function () {
    console.log('OK')
});

var News = mongoose.model('news', new mongoose.Schema({
    NewsTitle: {type: String, require: true},
    NewsDateTime: {type: Date, require: true},
    NewsContent: {type: String, require: true}
}));
var Games = mongoose.model('games', new mongoose.Schema({
    GameName: {type: String, require: true},
    GameCover: {type: String, require: true},
    ReleaseDate: {type: Date, require: true},
    Developer: {type: String, require: true},
    Publisher: {type: String, require: true}
}));
var GameInfos = mongoose.model('gameinfos', new mongoose.Schema({
    NewsTitle: {type: String, require: true},
    NewsDateTime: {type: Date, require: true},
    NewsContent: {type: String, require: true}
}));

var app=express();
app.post('/', function (req, res) {
    res
    req
});

app.post('/news', function (req, res) {
    News.find({}, function (err, doc) {
        res.json(doc)
        err
    });
});
app.post('/games', function (req, res) {
    Games.find({}, function (err, doc) {
        res.json(doc)
        err
    });
});
app.post('/gameinfos', function (req, res) {
    GameInfos.find({}, function (err, doc) {
        res.json(doc)
        err
    });
});

app.listen('200', function () {
    console.log('200');
});