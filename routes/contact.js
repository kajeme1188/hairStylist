const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log("At contact")
    res.render('contact/contact')
} );


module.exports = router;