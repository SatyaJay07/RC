const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const studentController = require('./controllers/studentController');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/crud-app', {})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

//imports from the controller file
app.post('/students', studentController.createStudent);

app.get('/students', studentController.getAllStudents);

app.get('/students/:registerNumber', studentController.getStudentByRegisterNumber);

app.put('/students/:registerNumber', studentController.updateStudentByRegisterNumber);

app.delete('/students/:registerNumber', studentController.deleteStudentByRegisterNumber);
