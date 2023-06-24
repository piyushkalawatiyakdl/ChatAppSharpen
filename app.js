const express=require('express');

const loginRoute=require('./routes/login');
const messagerRoute=require('./routes/message')

const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({extended :true}))
app.use(loginRoute);
app.use(messagerRoute);

app.listen(4000)