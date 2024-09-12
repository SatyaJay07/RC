const Student = require('../models/student');


exports.createStudent = async (req, res) => {
    try {
        //console.log(req.body);  //body has the input as per schema, access using
        const student = new Student(req.body);
        await student.save();
        res.status(201).send(student);
    } catch (error) {
        res.status(400).send(error);
    }
};


exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        //console.log(students);
        res.status(200).send(students);
    } catch (error) {
        res.status(500).send(error);
    }
};


exports.getStudentByRegisterNumber = async (req, res) => {
    try {
        // if(!req.params.registerNumber){
        //     res.text("enter a valid registration number");
        // }
        const student = await Student.findOne({ registerNumber: req.params.registerNumber });
        if (!student) return res.status(404).send('Student not found');
        res.status(200).send(student);
    } catch (error) {
        res.status(500).send(error);
    }
};


exports.updateStudentByRegisterNumber = async (req, res) => {
    try {
        const { registerNumber } = req.params;

        // Update the student document
        const student = await Student.findOneAndUpdate(
            { registerNumber: registerNumber },  
            req.body,  // Update with the request body (all fields provided in the body)
            { new: true}  
        );

        if (!student) {
            return res.status(404).send('Student not found');
        }

        res.status(200).send(student);  // Send the updated student document
    } catch (error) {
        res.status(400).send(error.message);  // Send the error message to the client
    }
};




exports.deleteStudentByRegisterNumber = async (req, res) => {
    try {
        const student = await Student.findOneAndDelete({ registerNumber: req.params.registerNumber });
        if (!student) return res.status(404).send('Student not found');
        res.status(200).send('Student deleted');
    } catch (error) {
        res.status(500).send(error);
    }
};
