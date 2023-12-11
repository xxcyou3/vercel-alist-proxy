//const request = require('request');
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
            res.send(req1);
            res.end();
        })
        .catch(req1 => {
            res.json({
                status: 2,
                msg: req1
            })
        })
}

const main = (url) => new Promise(async (resolve, reject) => {
    const origin = url.headers.get("origin") ?? "*";
    let target = "https://y4cc.cc/l" + url.url;
    console.log('日志：' + url.url)
    url = new Request(target, url);
    url = new Request(url, {redirect: "follow"});
    let response = await fetch(url);
    response = new Response(response.body, response);
    response.headers.delete("set-cookie");
    response.headers.set("Access-Control-Allow-Origin", origin);
    response.headers.append("Vary", "Origin");
    resolve(response)
})