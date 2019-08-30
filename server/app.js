const express = require('express');
const app = express();

const rs_api = require('runescape-api');

const SERVER_HOST = '127.0.0.1';
const SERVER_PORT = 3000;

// GET beasts from the RS bestiary
app.get('/beast/:id', function (req, res) {
    var id = req.params.id;
    res.setHeader('Content-Type', 'application/json');
    
    rs_api.osrs.bestiary.beast(id)
        .then(function (beast) {
            console.log(beast);
            res.json(beast);
        })
        .catch(function (error) {
            console.log(error);
        });
});

// GET players stats
app.get('/player/:id/', function (req, res) {
    var id = req.params.id;
    id = encodeURIComponent(id);
    res.setHeader('Content-Type', 'application/json');

    rs_api.osrs.hiscores.player(id)
        .then(function (scores) {
            res.json(scores);
        })
        .catch(function (error) {
            if (error.statusCode === 404) {
                res.status(404);
            } else {
                res.status(500).send({error: 'Error communicating with rs apis'});
            }
        });
});

function generateXpMap () {
    let levelMap = [0];
    let xp = 0;
    for(let level = 1; level <= 99; level++) {
        xp += Math.floor(
            (1 / 4) * Math.floor((level + 300 * Math.pow(2, (level / 7))))
            );
        levelMap.push(xp);
    }
    console.log(levelMap);
    return levelMap;
}

app.listen(SERVER_PORT, () => {
    console.log('Node server running on ' + SERVER_HOST + ':' + SERVER_PORT);
    generateXpMap();
});
