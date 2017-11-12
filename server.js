let express = require("express")

let app = express()

console.log("server up")

app.listen(8080)

app.get('/hello', (req, res) => {
	console.log('bye')
    res.send('bye')
});

app.get('/playerName', function (req, res) {
	let gameCode = Math.floor(Math.random() * 10000)
	console.log(gameCode)
	res.send(gameCode)
});