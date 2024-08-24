var express = require('express');
var app = express();
const bodyParser = require('body-parser');
var students = [{
        'name': 'Talens, Isaiah',
        'studno': '12345',
    },
    {
        'name': 'Sicat, Joriel',
        'studno': '6789',
    }
];

app.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.writeHead(JSON.stringify(students));
    res.end();
});

app.get('/student', (req, res) => {
    var studId = req.query.id;
    var studIndex = -1;
    for (var i = 0; i < students.length; i++) {
        if (studId == students[i].studno) {
            studIndex = i;
            break;
        }
    }
    if (studIndex != -1) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.writeHead(JSON.stringify(students[studIndex]));
        res.end();
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("<html><body><h1>Student Not Found</h1></body></html>");
        res.end();
    }
});

app.get('/add', (req, res) => {
    res.sendFile(__dirname + "/" + "form.html");
});
var urlencodedparser = bodyParser.urlencoded({ extended: false });
app.post('/create', urlencodedparser, (req, res) => {
    var student = {
        'name': req.body.name,
        'studno': req.body.studno
    };
    students.push(student);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<html><body><h1>Student Added/h1></body></html>");
    res.end();
});

app.listen(3000, function() {
    console.log('Server is running at http://localhost:3000');
});