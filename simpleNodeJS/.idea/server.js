/**
 * Created by manbir on 6/9/2017.
 */
var express = require('express'); //require is nods.js's version of include or import. it means look up this library called express and
var app = express();               // create an instance of it called app
                                    // app is going to have lots of cool functions like : allow you to listen to incoming http requests //respond to incoming requests and los of http manipulation
app.get('/',handleRoot );

function handleRoot(req, res){
    res.send('hello world');            //if an hhtp request comes in of type get, and its root , it will respond with text "Hello World"
}

app.listen(3000); // we listen to port 3000.