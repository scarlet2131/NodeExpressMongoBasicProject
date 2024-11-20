const express = require('express');
const Student = require('../models/student');
const router = express.Router();

// Add a new student
router.post('/add', async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).send({ message: 'Student added successfully', student });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// Remove a student by ID
router.delete('/remove/:id', async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.send({ message: 'Student removed successfully' });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// Update a student by ID
router.put('/update/:id', async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send({ message: 'Student updated successfully', student });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// Get all students
router.get('/', async (req, res) => {
    try {
        const students = await Student.find().populate('courses');
        res.send(students);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});


module.exports = router;
