const commandsData = require('./commands.json')

require('dotenv').config();
console.log(process.env.ANTHROPIC_API_KEY)
const Anthropic = require('@anthropic-ai/sdk')


const express = require('express');
const cors = require('cors');
//initialize the app
const app = express();
const port = 3001;

const client = new Anthropic({
    apiKey: process.env['ANTHROPIC_API_KEY'],
});





//Use cors as middleware
app.use(express.json());
app.use(cors());

app.post("/api/explain", async (req, res) => {
    const command = req.body.command;
    
    const result = commandsData[command];

    if (result) {
        res.json(result);
    } else {
        res.json({error: "Command not found!"});
    }})


app.listen(port, 
    function (err){
        if (err) console.log(err);
        console.log("Server listening on PORT", port);
    }
);