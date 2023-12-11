const request = require('request');
module.exports = (req, res) => {
    let prefix = "/img/tibet-1.jpg"
    let prefix1 = "/favicon.ico"
    if (req.url.startsWith(prefix)) {
        res.end();
        return;
    }
    if (req.url.startsWith(prefix1)) {
        res.end();
        return;
    }

    main(req)
        .then(req1 => {
            res.writeHead(200, {"Content-Type": "application/json"});
            res.write(req1);
            res.end();
        })
        .catch(req1 => {
            res.json({
                status: 2,
                msg: req1
            })
        })
}

const main = (url) => new Promise((resolve, reject) => {
    console.log('日志：'+url.url)
    let target = "https://y4cc.cc/s" + url.url;
    let options = {
        'method': 'GET',
        'url': target,
        'headers': {
            'Notion-Version': url.headers['notion-version'],
            'Authorization': url.headers['authorization'],
            'Referer': 'https://cowtransfer.com/'
        }
    };
    console.log('日志3：'+target)
    request(options, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log('日志4：'+ response.body)
            resolve(response.body)
        } else {
            console.log('日志5：'+error)
            reject(error);
        }
    });
})