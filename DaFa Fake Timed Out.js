//gtps http block req GET
//Gtps http
//made by DaFa#9981
//helped by DaFa#9981

const readline = require("readline");
var http = require('http'); 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter password: ", function(password) {
        if (password === "DAFAPRO")
        {
        console.log("Loginned!")
        var server = http.createServer(function (req, res) {   

    if (req.url == "/growtopia/server_data.php") {
        var ip = (req.headers['x-forwarded-for'] || '').split(',').pop().trim() || 
        req.connection.remoteAddress || 
        req.socket.remoteAddress || 
        req.connection.socket.remoteAddress
        if(req.method === "POST") {
        console.log(`[Growtopia Logs] ${req.connection.remoteAddress} successfully entered to the connection!`)
        }
        if(req.method === "GET") {
        console.log(`[Request Log] ${req.connection.remoteAddress} Already Get blocked`)
        req.connection.destroy();
        }
        
        res.write('server|IPSERVER\nport|17091\ntype|1\n#maint|Maintenance\n\nbeta_server|127.0.0.1\nbeta_port|17091\n\nbeta_type|1\nmeta|localhost\nRTENDMARKERBS1001');
        res.end();
        }
    else
        res.writeHead(505)
});

server.listen(80); 
console.log('Protect by DaFa ')
console.log('Now Http Connection is timeout ')
        }
        else
        {
        console.log("Wrong password")
        process.exit(0); //kode exit
        }
        rl.close();
    });
