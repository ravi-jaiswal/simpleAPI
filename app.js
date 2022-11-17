let https = require('https');
let express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

console.log(__dirname);



let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
var data = {
    portal: "TutorialsPoint",
    tagLine: "SIMPLY LEARNING",
    location: "Hyderabad"
 }

app.post('/',(req,res)=>{
    console.log(req.body);

})

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');

});

app.listen(PORT);

