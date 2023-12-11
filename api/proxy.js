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
            let Head = {
            }
            if (req1.header) {
                for (const k in req1.header) {
                    for (const v of req1.header[k]) {
                        Head.push({k: v})
                    }
                }
            }
            res.writeHead(200, Head);
            res.write(req1.body);
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
    let target = "https://y4cc.cc/l" + url.url;
    let options = {
        'method': 'GET',
        'url': target,
        'headers': {
            'Notion-Version': url.headers['notion-version'],
            'Authorization': url.headers['authorization']
        }
    };
    console.log('日志3：'+target)
    request(options, function (error, response) {
        //?????
        if (!error) {
            resolve(response)
        } else {
            console.log('日志5：'+error)
            reject(error);
        }
    });
})