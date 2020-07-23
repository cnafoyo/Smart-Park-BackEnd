const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.status(200).json({
      message: 'handling Get requests to check plate availability'
    });
});

module.exports = router;
