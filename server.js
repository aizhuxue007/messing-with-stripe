const express = require('express')
const app = express()
const PORT = 3000

// MIDDLEWARE
// - Configure to automatically parsing JSON bodies?
app.use(express.json())
// - Configure to automatically parsing URLEncoding?
app.use(express.urlencoded({ extended: true }))

// ROUTES
app.get('/', (req, res) => {
    res.send("Hello express!")
});

app.listen(PORT, () => {
    console.log('Congrats Server is Running!')
})