const request = require('request');
module.exports = (req, res) => {
    main(req)
        .then(req => {
            res.writeHead(200, {"Content-Type": "application/json"});
            res.write(req);
            res.end();
        })
        .catch(req => {
            res.json({
                status: 2,
                msg: req
            })
        })
}

const main = (url) => new Promise((resolve, reject) => {
    let target = "https://y4cc.cc/s/" + url.url;
    let options = {
        'method': 'GET',
        'url': target,
        'headers': {
            'Notion-Version': res.headers['notion-version'],
            'Authorization': res.headers['authorization'],
            'Referer': 'https://cowtransfer.com/'
        }
    };
    request(options, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            resolve(body)
        } else {
            reject(error);
        }
    });
})