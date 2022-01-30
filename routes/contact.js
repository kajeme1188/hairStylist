const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");
const smpt = require('nodemailer-smtp-transport');
require("dotenv").config();

const myEmail = process.env.EMAIL;
const pass = process.env.PASSWORD;

router.get('/', (req, res) => {
    console.log('At contact')
    res.render('contact/contact')
} );

router.post('/', (req, res) => {
    console.log('posting contact route')
    console.log(req.body);

    const transport = nodemailer.createTransport(smpt({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: myEmail,
            pass: pass
        }
    }));

    const mailOptions = {
        from: req.body.email,
        to: myEmail,
        subject: `Message from ${req.body.email}: ${req.body.subject}`,
        text: req.body.message,
    }

    transport.sendMail(mailOptions, (error, info) => {
        if(error){
            console.log('Error kicking in')
            console.log(error);
            res.send('error');
        }else{
            console.log("email sent " + info.response);
            res.send('success')
        }
    });
})

module.exports = router;