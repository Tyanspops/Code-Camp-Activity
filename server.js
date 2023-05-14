// require express so that you can use it
// "express" is the name of the module
const express = require("express"); 
// instantiates Express
const app = express();
// for serving files in the public folder, such as CSS files
app.use(express.static("./public"));
// server responds when the client sends a GET request for the / endpoint
app.get("/", function(req,res) {
    res.sendFile(__dirname + "/src/pages/index.html");
});
// server responds when the client sends a POST request for the / endpoint
app.post("/", function(req,res) {
     // whatever you want to happen after the post request
});
// listens for port (basically starts up server)
app.listen(process.env.PORT || 3000, function() {
    console.log(`Server is running on port ${process.env.PORT}.`);
});
