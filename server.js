var express = require('express');
var app = express();
app.use(express.static("public"));
app.set('view engine', "ejs");
app.set("views", "./views");

var server = require('http').Server(app);
var io = require('socket.io')(server);
const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`Server đang chạy tại cổng ${port}`);
});

app.get('/', (req, res) => {
    res.render("trangchu")
});

io.on("connection", (socket) => {
    console.log(socket.id);
})