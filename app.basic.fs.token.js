var http =  require( "http" );
var fs =    require( "fs" );

var server = http.createServer( processRequest );
server.listen( 80 );
console.log( "[ Server ] listening on port 80" );


function processRequest( request, response ){

    console.log( "[ Server ] request URL: " + request.url );
    
    // check for security token
    if (request.url.includes("abcdef")){

        console.log( "[ Server ] Security Token found" );
    
        fs.readFile( "index.html", (err, data) => {

            response.writeHead( 200, { "content-type" : "text/html" } );
            response.write( data );
            response.end();

        });// end readFile

    } // end if 
    else {

        console.log( "[ Server ] Security Token NOT FOUND" );

        var responseData = "<h1>Not Authorized!</h1>";

        response.writeHead( 404, { "content-type" : "text/html" } );
        response.write( responseData );
        response.end();

    }; // end else

}; // end function processRequest

