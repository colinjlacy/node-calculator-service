'use strict';

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.send(JSON.stringify({
        "userAuthentication": {
            "details": {
                "user_id": "347e5a2d-c1b1-4f34-9f75-05e7a80ad0c8",
                "sub": "347e5a2d-c1b1-4f34-9f75-05e7a80ad0c8",
                "user_name": "123456789",
                "given_name": "Demo",
                "family_name": "User",
                "email": "demo.user@ge.com",
                "phone_number": null,
                "previous_logon_time": 1512508946858,
                "name": "Demo User"
            },
            "authorities": [{"authority": "ROLE_USER"}],
            "authenticated": true,
            "principal": "347e5a2d-c1b1-4f34-9f75-05e7a80ad0c8",
            "credentials": "N/A",
            "name": "347e5a2d-c1b1-4f34-9f75-05e7a80ad0c8"
        }, "version": "legacy"
    }));
});

module.exports = router;