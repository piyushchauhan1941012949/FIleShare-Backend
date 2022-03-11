const express = require('express');
const path = require('path');
const app = express();




const PORT = process.env.PORT || 3000

app.use(express.static('public'));
app.use(express.json());
const connectDB = require('./config/db');
const router = require('./routes/files');
connectDB();

//Tamplete engine
app.set('views',path.join(__dirname,'/views'));
app.set('view engine','ejs');

app.use('/api/files',require('./routes/files'));
app.use('/files',require('./routes/show'));
app.use('/files/download',require('./routes/download'));


app.listen(PORT,function(){
    let p = `Listinging On Port ${PORT}`;
    console.log(p)
})