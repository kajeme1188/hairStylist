const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    console.log("AT gallery")
    res.render("gallery/gallery")
});


module.exports = router;