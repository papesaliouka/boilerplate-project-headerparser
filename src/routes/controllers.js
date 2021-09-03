function httpGetWhoAmI (req,res){
    let ipaddress = req.connection.remoteAddress;
    let software = req.headers['user-agent'];
    let language = req.headers['accept-language'];
    res.json({ipaddress,language,software})
    res.end()
}

module.exports = httpGetWhoAmI