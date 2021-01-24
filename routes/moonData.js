const express = require('express');
const got = require('got');
require('dotenv').config();

const router = express.Router();

function handleResponse(json) {
    console.log(json);
}

router.get("/:lat/:long", async (req, res) => {
    try {
        const url = 'https://api.ipgeolocation.io/astronomy?apiKey=' + process.env.IPG_API_KEY + '&lat=' + req.params.lat + '&long=' + req.params.long;
        var astrores = await got(url);
        var astroresjson = JSON.parse(astrores.body);
        res.status(200).json(astroresjson);
    } catch (err) {
        res.status(400).json({
            result: "failure",
            err,
        });
    }
});

module.exports = router;