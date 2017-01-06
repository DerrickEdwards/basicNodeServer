var http = require( "http" );
var server = http.createServer( processRequest );
server.listen( 80 );
console.log( "[ Server ] listening on port 80" );


function processRequest( request, response ){

    console.log( "[ Server ] request received" );
    console.log( "[ Server ] " + request.url );


    var responseData = "<h1>hello world!</h1>";

    response.writeHead( 200, { "content-type" : "text/html" } );
    response.write( responseData );
    response.end();


}; // end function processRequest

