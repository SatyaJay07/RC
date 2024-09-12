const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    registerNumber: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    branch: { type: String, required: true }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
