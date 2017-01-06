var http =  require( "http" );
var fs =    require( "fs" );

var server = http.createServer( processRequest );
server.listen( 80 );
console.log( "[ Server ] listening on port 80" );


function processRequest( request, response ){

    console.log( "[ Server ] request received" );
    console.log( "[ Server ] " + request.url );

    fs.readFile( "index.html", (err, data) => {

        var responseData = "<h1>hello world!</h1>";

        response.writeHead( 200, { "content-type" : "text/html" } );
        response.write( data );
        response.end();

    });// end readFile


}; // end function processRequest

