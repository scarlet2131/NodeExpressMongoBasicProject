const express = require('express');
const Course = require('../models/course');
const router = express.Router();

// Add or modify a course
router.post('/add', async (req, res) => {
    try {
        const course = await Course.findOneAndUpdate({ code: req.body.code }, req.body, {
            upsert: true,
            new: true,
        });
        res.status(201).send({ message: 'Course added or updated successfully', course });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// Update a Course by ID
router.put('/update/:id', async (req, res) => {
    try {
        const student = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send({ message: 'Course updated successfully', student });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});
// Delete a course by ID
router.delete('/remove/:id', async (req, res) => {
    try {
        await Course.findByIdAndDelete(req.params.id);
        res.send({ message: 'Course removed successfully' });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// Get all courses
router.get('/', async (req, res) => {
    try {
        const courses = await Course.find();
        res.send(courses);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

module.exports = router;
