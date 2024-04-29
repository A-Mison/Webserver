const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Sample data to be used for demonstration
const personalInfo = {
    "name": "John Doe",
    "birthdate": "1990-01-01",
    "gender": "Male",
    "contact_no": "123-456-7890",
    "address": "123 Main St, City, Country"
};

const skills = [
    {"description": "Python programming", "expertise_level": "Intermediate"},
    {"description": "Web development", "expertise_level": "Advanced"}
];

const education = [
    {"school": "University of XYZ", "year": "2010-2014"}
];

const workExperience = [
    {"company_name": "ABC Inc.", "designation": "Software Engineer", "details": "Developed web applications", "year": "2014-2018"}
];

const personalReferences = [
    {"name": "Jane Smith", "relationship": "Colleague", "contact_number": "987-654-3210"}
];

// Endpoints for accessing personal information
app.get('/personal_info', (req, res) => {
    res.json(personalInfo);
});

// Endpoints for accessing skills
app.get('/skills', (req, res) => {
    res.json(skills);
});

// Endpoints for accessing education
app.get('/education', (req, res) => {
    res.json(education);
});

// Endpoints for accessing work experience
app.get('/work_experience', (req, res) => {
    res.json(workExperience);
});

// Endpoints for accessing personal references
app.get('/personal_references', (req, res) => {
    res.json(personalReferences);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
