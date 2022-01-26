let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {

    console.log("at index");
    console.log(req.body);
    res.render('index');

})

module.exports = router;