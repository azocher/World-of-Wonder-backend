const Express = require('express')
let app = Express()

app.get('/', function(req, res) {
    res.send("Hello, this server is running!")
})

app.listen(process.env.PORT, () => console.log("ON AND LISTENING"))