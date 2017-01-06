var url   = require("url");
var http  = require("http");


var server = http.createServer( function( req, res){

    var pathname = url.parse( req.url ).pathname;
    console.log( `pathName: ${pathname}`);

    if ( pathname === "/" ){
        res.writeHead( 200, { "Content-Type":"text/html" });
        res.end( "<h1>Home Page</h1>" );
    }
    else if( pathname === "/login"){
        res.writeHead( 200, { "Content-Type":"text/plain" });
        res.end( "login page" );
    }
    else if( pathname === "/admin" ){
        res.writeHead( 200, { "Content-Type":"text/html" });
        res.end( "<h1>Admin</h1>" );
    }
    else {
        res.writeHead( 404, { "Content-Type":"text/plain" });
        res.end( "Page Not Found" );
    }

});
server.listen( 3000 ); // end http.createServer()

console.log( "server running on port 3000"); 
