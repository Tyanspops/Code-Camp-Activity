const express = require("express"); 
// instantiates Express
const app = express();
// for serving files in the public folder, such as CSS files
app.use(express.static("./public"));
// server responds when the client sends a GET request for the / endpoint

app.get("/", function(req,res) {
    res.sendFile(__dirname + "/index.html");
    res.sendFile(__dirname + "/style.css");
});
app.post("/", function(req,res) {
    res.sendFile(__dirname + "/index2.html");
    res.sendFile(__dirname + "/style.css");
});


app.listen(process.env.PORT || 3000, function() {
    console.log(`Server is running on port ${process.env.PORT}.`);
});
