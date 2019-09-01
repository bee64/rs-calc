const express = require('express');
const app = express();

const rs_api = require('runescape-api');

const SERVER_HOST = '127.0.0.1';
const SERVER_PORT = 3000;

// https://www.wolframalpha.com/input/?i=2+%5E+%281%2F7%29
const TWO_ROOT_SEVEN = 1.1040895136;
const XP_TABLE = generateXpArray();

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

// Get the xp required for each level
app.get('/xptable', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.json(XP_TABLE);
});

function generateXpArray () {
    let xpArray = [0];
    let xp = 0;
    // start at 2 because function starts at two
    for (let level = 2; level <= 100; level++) {
        xpArray.push(Math.trunc(xp));
        // Difference function (https://oldschool.runescape.wiki/w/Experience#Experience_table)
        xp += Math.floor(level - 1 + 300 * Math.pow(2, (level - 1)/ 7)) / 4;
    }
    
    // The xpArray will look like: [0, 0, 83 . . .]
    //  it begins with a padding 0 because RuneScape level counting starts at 1
    //  Usage: xpArray[10] returns the xp required for level 10
    return xpArray;
}

app.listen(SERVER_PORT, () => {
    console.log('Server running on ' + SERVER_HOST + ':' + SERVER_PORT);
});
