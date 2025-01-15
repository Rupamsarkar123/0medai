import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Anthropic from '@anthropic-ai/sdk';

dotenv.config();  // Load environment variables from .env

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,  // Ensure it matches the .env file key
});

const app = express();
app.use(cors());
app.use(express.json());

app.get("/ping", (req, res) => {
    res.json({
        message: "pong",
    });
});

app.post("/chat", async (req, res) => {
    const question = req.body.question;

    try {
        const response = await anthropic.messages.create({
            model: "claude-3-5-sonnet-20241022",
            max_tokens: 1024,
            messages: [{ role: "user", content: question }],
        });

        res.json({
            answer: response,
            prompt: question,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred" });
    }
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});













// const express = require('express');
// const cors = require("cors");
// // const OpenAI = require('openai');  // Correct require statement for v4.x.x

// import Anthropic from '@anthropic-ai/sdk';

// const anthropic = new Anthropic({
//   apiKey: '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', // defaults to process.env["ANTHROPIC_API_KEY"]
// });


// const app = express();
// app.use(cors());
// app.use(express.json());

// app.get("/ping", (req, res) => {
//     res.json({
//         message: "pong",
//     });
// });


// app.post("/chat", async (req, res) => {
//     const question = req.body.question;
//     //let response;
    
    
//     setTimeout(() => {                      // after modification

//         res.json({
//             //answer: response,             // after modification
//              answer: answer,            // previous one
//             prompt: question,
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "An error occurred" });
//     }

//     console.log({ question });                 
// }, 3000);                                //after modification


// app.listen(3000, () => {
//     console.log('Server is listening on port 3000');
// });


// const msg = await anthropic.messages.create({
//   model: "claude-3-5-sonnet-20241022",
//   max_tokens: 1024,
//   messages: [{ role: "user", content: "Hello, Claude" }],
// });
// console.log(msg);
