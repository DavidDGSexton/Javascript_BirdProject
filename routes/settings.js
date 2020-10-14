const express = require('express');
const router = express.Router();


router.get('/', function(req, res, next) {
    res.render('../settings/index')
})

// router.get('/', function(req, res, next) {
//     res.render('../settings/index')
// })

// router.get('/', function(req, res, next) {
//     res.render('../settings/index')
// })

// router.get('/', function(req, res, next) {
//     res.render('../settings/index')
// })



module.exports = router;