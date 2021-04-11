const express = require('express');
const app = express();
const request = require('request');
const port = 3006;

const BitBlockArr = {};


app.get('/block', (req, res) => {
    console.log( " req.query",req.query);
    let blockhash = req.query.blockhash;
    let reqUrl = "https://blockchain.info/rawblock/" + blockhash;
    if(!blockhash){
        res.json({ 'error': "缺少【blockhash】参数" });
        console.log("参数errr");
    }

    if (BitBlockArr[blockhash]) {
        res.json({'blockData':BitBlockArr[blockhash]});
    } else {
        request({
            url: reqUrl,
            method: 'GET',
            headers: { 'Content-Type': 'text/json' }
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                let blockJson = JSON.parse(body);
                console.log(blockJson.hash);
                BitBlockArr[blockhash] = blockJson;
                res.json({'blockData':blockJson});
            }
            else {
                res.json({ 'error': error });
            }
        });
    }

})


app.get('/user', (req, res) => {
    res.json([{
        id: 2,
        username: "wang1"
    },
    {
        id: 3,
        username: "zhanhe"
    }]);
})

app.listen(port, () => {
    console.log(`Express ABTNode Server at http://localhost:${port}`)
})