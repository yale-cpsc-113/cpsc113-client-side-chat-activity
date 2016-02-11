var express = require('express');
var app = express();
var bodyParser = require('body-parser')


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.use(bodyParser.urlencoded({ extended: false }));

var chats = ['first message', 'second message'];
app.get('/chats/:latest', function(req, res){
    try {
        var latest = parseInt(req.params.latest);
    } catch (e) {
        res.status(400);
        res.send('Bad request');
        return;
    }
    var latestChats = chats.slice(latest);
    res.json(latestChats);
});

app.post('/chats', function(req, res){
    var newMessage = req.body.message;
    if(newMessage && newMessage.length > 0){
        chats.push(newMessage);
    }
    res.end();
})


var port = process.env.PORT || 3000;
app.listen(port, function () {
    var url = 'http://localhost:' + port;
    if (process.env.C9_HOSTNAME) {
        url = 'https://' + process.env.C9_HOSTNAME;
    }
    console.log('Chat app running at ', url);
});