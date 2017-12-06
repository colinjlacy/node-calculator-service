'use strict';

const express = require('express');
const router = express.Router();

const routes = {
    "get-add-message": {"method": "GET", "url": "/add-message", "entity": "message"},
    "get-add-example": {"method": "GET", "url": "/add-example", "entity": "example"},
    "get-subtract-message": {"method": "GET", "url": "/subtract-message", "entity": "message"},
    "get-subtract-example": {"method": "GET", "url": "/subtract-example", "entity": "example"},
    "get-multiply-message": {"method": "GET", "url": "/multiply-message", "entity": "message"},
    "get-multiply-example": {"method": "GET", "url": "/multiply-example", "entity": "example"},
    "get-divide-message": {"method": "GET", "url": "/divide-message", "entity": "message"},
    "get-divide-example": {"method": "GET", "url": "/divide-example", "entity": "example"},
    "add-numbers": {"method": "GET", "url": "/add", "entity": "numbers"},
    "subtract-numbers": {"method": "GET", "url": "/subtract", "entity": "numbers"},
    "multiply-numbers": {"method": "GET", "url": "/multiply", "entity": "numbers"},
    "divide-numbers": {"method": "GET", "url": "/divide", "entity": "numbers"}
};

const configResponse = [{
    "name": "BANDS",
    "instance": [{
        "instanceId": "battle-cat:bands:04dc1d6ab6184cdfbb4d746e6dace710",
        "app": "MATHS",
        "appGroupName": null,
        "ipAddr": "10.254.0.238",
        "sid": "na",
        "homePageUrl": "https://battle-cat-bc-aggregator-example.run.asv-pr.ice.predix.io/",
        "statusPageUrl": "https://battle-cat-bc-aggregator-example.run.asv-pr.ice.predix.io/info",
        "healthCheckUrl": "https://battle-cat-bc-aggregator-example.run.asv-pr.ice.predix.io/health",
        "secureHealthCheckUrl": "https://battle-cat-bc-aggregator-example.run.asv-pr.ice.predix.io:443/health",
        "vipAddress": "math",
        "secureVipAddress": "math",
        "countryId": 1,
        "dataCenterInfo": {"@class": "com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo", "name": "MyOwn"},
        "hostName": "battle-cat-bc-aggregator-example.run.asv-pr.ice.predix.io",
        "status": "UP",
        "leaseInfo": {
            "renewalIntervalInSecs": 30,
            "durationInSecs": 90,
            "registrationTimestamp": 1511891202085,
            "lastRenewalTimestamp": 1512571902911,
            "evictionTimestamp": 0,
            "serviceUpTimestamp": 1511891197395
        },
        "isCoordinatingDiscoveryServer": false,
        "metadata": {"mapping": JSON.stringify(routes)},
        "lastUpdatedTimestamp": 1511891202085,
        "lastDirtyTimestamp": 1511859521837,
        "actionType": "ADDED",
        "asgName": null,
        "overriddenStatus": "UNKNOWN"
    }]
}];

/* GET home page. */
router.get('/', function (req, res) {
    res.send(JSON.stringify(configResponse));
});

module.exports = router;