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
    let target = "https://y4cc.cc/l" + req.url;
    request.get({
        url:target,
        headers:{
            'Content-Type': 'application/octet-stream'
        }
    }).on('response',function (response) {
        console.log(response.statusCode)
        this.pipe(res)
    })
}

