import 'reflect-metadata'
import express = require('express');
import "./database"

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    return res.json({message: 'Hello World - NLW'})
})

app.listen(3333, () => console.log('Server is running'));