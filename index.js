const express = require('express');
const app = express();

// const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config()
// app.use(cors());
// app.options('*', cors());

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.post('/sendmails', async(req, res, next) => {
	const {subjectMail , textMail} = req.body
	console.log("req : ",req.body)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'd84721507@gmail.com',//gmail address
            pass: process.env.GOOGLE_GMAIL_PASS
        }
    });
    const option= {
        from: 'd84721507@gmail.com',
        to: 'shadlybenhajel@gmail.com',
        subject: subjectMail,
		text:textMail,
		html: `<div className="email" style="
        border: 1px solid black;
        padding: 20px;
        font-family: sans-serif;
        line-height: 2;
        font-size: 20px; 
        ">
        <h2>Here is your email! ${subjectMail} </h2>
        <p></p>
    
        <p>All the best, Dante ${textMail}</p>
         </div>
    `
    };
	transporter.sendMail(option, function(error, info) {
        if(error){
            console.log(error, 'error');
        } else {
            res.send('ok',info)
        }
    })
})

const port = process.env.PORT || 4001;

app.listen(port, () => console.log('listen to port 4001'))
// module.exports = app;

