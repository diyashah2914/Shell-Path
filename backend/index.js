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
    
    res.json({
        summary: `${command} is a Linux command`,
        steps: [
            { title: "Step 1", explanation: "This is what happens first" },
            { title: "Step 2", explanation: "This is what happens next" },
            { title: "Step 3", explanation: "This is the final step" }
        ],
        flags: [
            { flag: "-v", meaning: "verbose output" }
        ],
        challenge: "What flag would you use to see more detail?"
    })
})

app.listen(port, 
    function (err){
        if (err) console.log(err);
        console.log("Server listening on PORT", port);
    }
);