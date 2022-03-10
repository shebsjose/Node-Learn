import express from 'express';
import children from './Student.js';
import mentor from './Teacher.js';
const app = express();
const port = 5000;

app.use('/student',children);
app.use('/teacher',mentor);

app.listen(port, ()=>{
    console.log('Listening port on 5000');
})