const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
      "contactSubject": [
        "General Enquiry",
        "Class",
        "Schedule",
        "Instructor",
        "Price",
        "Other"
      ]
    });
});
module.exports = router;
