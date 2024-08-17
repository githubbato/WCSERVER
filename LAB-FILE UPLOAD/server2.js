const express = require('express');
const app = express();

app.use(express.static('public'));

const path = require('path');
const mime = require('mime-types');
const multer = require('multer');


// Use multer to support file upload feature
const fileStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // specify the destination directory for the uploaded files 
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // use the original name of the file 
    },
});

const upload = multer({ storage: fileStorage });

// File upload route
app.post('/uploads', upload.single('myFile'), (req, res) => {
    console.log(req.file);

    // Set the correct MIME type for the uploaded file
    req.file.mimeType = mime.lookup(req.file.originalname);
    
    // Send a customized page to the client
    res.sendFile(path.join(__dirname, 'file-uploaded.html'));
});

// Route to upload page
app.get('/file-upload', (req, res) => {
    res.sendFile(path.join(__dirname + '/' + 'file-upload.html'));
});



app.listen(2000, function() {
    console.log(`Server running at http://localhost::2000`);
});