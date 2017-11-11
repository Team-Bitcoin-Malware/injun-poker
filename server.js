let express = require("express")

let app = express()

let gameCode = Math.floor(Math.random() * 10000)

app.listen(8080)

console.log(gameCode)

app.get("/gameid/:id", (req, res) => {
    res.send(gameCode == req.params.id)
})

app.get('/hello', (req, res) => {
    res.send('bye')
})
