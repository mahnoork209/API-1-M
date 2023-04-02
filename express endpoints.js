const express = require('express');
const router = express.Router();
const Department = require('../models/department');
const Employee = require('../models/employee');

// GET all departments
router.get('/departments', async (req, res) => {
  try {
    const departments = await Department.find().populate('employees');
    res.json(departments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new department
router.post('/departments', async (req, res) => {
  const department = new Department({
    name: req.body.name,
    description: req.body.description,
  });
  try {
    const newDepartment = await department.save();
    res.status(201).json(newDepartment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET a department by ID
router.get('/departments/:id', getDepartment, (req, res) => {
  res.json(res.department);
});

// PUT a department by ID
router.put('/departments/:id', getDepartment, async (req, res) => {
  if (req.body.name != null) {
    res.department.name = req.body.name;
  }
  if (req.body.description != null) {
    res.department.description = req.body.description;
  }
  try {
    const updatedDepartment = await res.department.save();
    res.json(updatedDepartment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE a department by ID
router.delete('/departments/:id', getDepartment, async (req, res)) => {
  try {
    await res.department.remove();
  }
}
