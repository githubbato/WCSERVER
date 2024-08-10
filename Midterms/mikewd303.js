var express = require("Express");
var app = express();

app.get("/", function(request, response){
    response.send("This the new route");
});

app.listen(5001, function(){
    console.log('Server running at http://localhost:5001');
});