var http = require("http");
var fs = require("fs");
var url = require("url");

http.createServer(function (req,res){
    const url = req.url

    if (url === '/'){
        fs.readFile("./index.html",function(err,data){
            if(err){
                res.writeHead(200,{'Content-Type': "text/html"});
                res.write("Error connecting to Index");
                return res.end();
            }
            res.writeHead(200,{'Content-Type': "text/html"});
            res.write(data);
            return res.end();
        })
    }
    else if(url === '/about'){
        fs.readFile("./about.html",function(err,data){
            if(err){
                res.writeHead(200,{'Content-Type': "text/html"});
                res.write("Error connecting to About");
                return res.end();
            }
            res.writeHead(200,{'Content-Type': "text/html"});
            res.write(data);
            return res.end();
        })
    }
    else if(url === "/contact-me"){
        fs.readFile('./contact-me.html', function(err,data){
            if(err){
                res.writeHead(200,{'Content-Type': "text/html"});
                res.write("Error connecting to contact");
                return res.end();
            }
            res.writeHead(200,{'Content-Type': "text/html"});
            res.write(data);
            return res.end();
        })
    }
    else{
        fs.readFile("./404.html", function(err,data){
            if(err){
                res.writeHead(200,{'Content-Type': "text/html"});
                res.write("Error connecting to 404");
                return res.end();
            }
            res.writeHead(200,{'Content-Type': "text/html"});
            res.write(data);
            return res.end();
        })
    }
}).listen(8080)

/*const buttons = document.querySelectorAll("./buttonListeners");

buttons.forEach(inputButton, () =>{
    inputButton.addEventListener("click", () => {
        console.log(inputButton.innerHtml)
    })
})*/