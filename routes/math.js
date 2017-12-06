const express = require('express');
const router = express.Router();

router.get('/add', function (req, res) {
    if(!!req.query && !!req.query.first && !!req.query.second) {
        res.send((parseInt(req.query.first) + parseInt(req.query.second)).toString());
    } else {
        const query = !!req.query;
        const first = !!req.query.first;
        const second = !!req.query.second;
        res.status(400);
        res.send('You need to provide a first and second number for add! ' + query + ' ' + first + ' ' + se);
    }
});

router.get('/add-message', function (req, res) {
    res.send('For adding all the things...');
});

router.get('/add-example', function (req, res) {
    res.send('5 + 4 = 9');
});

router.get('/subtract', function (req, res) {
    if(!!req.query && !!req.query.first && !!req.query.second) {
        res.send((parseInt(req.query.first) - parseInt(req.query.second)).toString());
    } else {
        res.status(400);
        res.send('You need to provide a first and second number!');
    }
});

router.get('/subtract-message', function (req, res) {
    res.send('For proving two things are different...');
});

router.get('/subtract-example', function (req, res) {
    res.send('5 - 4 = 1');
});

router.get('/multiply', function (req, res) {
    if(!!req.query && !!req.query.first && !!req.query.second) {
        res.send((parseInt(req.query.first) * parseInt(req.query.second)).toString());
    } else {
        res.status(400);
        res.send('You need to provide a first and second number!');
    }
});

router.get('/multiply-message', function (req, res) {
    res.send('Making products.');
});

router.get('/multiply-example', function (req, res) {
    res.send('5 * 4 = 20');
});

router.get('/divide', function (req, res) {
    if(!!req.query && !!req.query.first && !!req.query.second) {
        res.send((parseInt(req.query.first) / parseInt(req.query.second)).toString());
    } else {
        res.status(400);
        res.send('You need to provide a first and second number!');
    }
});

router.get('/divide-message', function (req, res) {
    res.send('Anyone know the etymology of the word "Quotient"?');
});

router.get('/divide-example', function (req, res) {
    res.send('5 / 4 = 1.25');
});

module.exports = router;