const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
   const{email} = req.body;
   console.log('Content form submited',{ email });
   res.status(200).json({status:"Message Recieved"});
});
module.exports = router;