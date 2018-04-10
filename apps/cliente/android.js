var http = require('http');

var opcoes = { 
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
    }
}

//Content-type
var bufferResponse = [];

var html = 'nome=José' //x-www-form-urlencoded via POST
var json = {nome: 'José'} //Json via POST
var stringJson = JSON.stringify(json);

var req = http.request(opcoes,function(res)
{
    res.on('data', function (pedaco)
    {
        bufferResponse.push(pedaco);
    });

    res.on('end', function()
    {
        var corpoResponse = Buffer.concat(bufferResponse).toString();
        console.log(corpoResponse);
    });

});

//req.write(json);
req.write(stringJson);
req.end();

/*via GET */
/*
http.get(opcoes,function(res)
{
    res.on('data', function (pedaco)
    {
        bufferResponse.push(pedaco);
    });

    res.on('end', function()
    {
        var corpoResponse = Buffer.concat(bufferResponse).toString();
        console.log(corpoResponse);
    });

    res.on('error', function()
    {

    });
});
*/