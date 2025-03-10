const express = require('express');
const app = express();
const port = 5000;

app.use(express.json())

app.get('/', (req, res) => {
    res.send("This is FSWD CA2")
});


app.get('/signup', (req, res) => {
    const username = req.query;
    const userLength = 0;
    if (username < userLength) {
        res.json({message:"Username cannot be empty"})
    }

    const email = req.query;
    if (email < userLength) {
        res.json({message:"Email cannot be empty"})
    }

    const password = req.query;
    if (password <= 8 || password >= 16) {
        res.json({message:"Password length should be greater than 8 or lesser than or equal to 16"})
    }

    res.json({message: "Signup Sucessfully", data: username, email, password})
})

app.listen(port, ()=> {
    console.log(`Server is running on http://localhost:${port}`)
})