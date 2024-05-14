const express = require('express');
const cors = require('cors');
const {profile} = require("console");
const app = express();
const port = 3000;

// Data for the resume
const resume = {
    Personal_Information: [
        {
            Name: 'Allen J. Mison',
            Birthdate: '12/28/2003',
            Gender: 'Male',
            Contact_No: '09567891099',
            Address: '123 Main Street Cebu City'
        },
    ],
    About_Me: [
        {
            Description: "Hello! I'm Allen J. Mison, passionate about Web Development. I enjoy creativity, problem-solving, and maintaining a balanced life. Whether designing, creating, or exploring, I thrive on challenges and value collaboration. Excited about making a positive impact, and looking forward to connecting with you!"
        }
    ],
    Skills: [
        {
            Languages: ['html', 'JavaScript', 'React']
        }
    ],
    Education: [
    
        {
            Degree: 'Bachelor of Science in Social Studies',
            Institution: 'University of Southern Philippines Foundation 2024',
            Year: '2022-2026'
        }
       
    ],
    Personal_References: [
        {
            Name: 'John Doe Lama',
            Contact_No: '09553401516',
            Relationship: 'Friend'
        }
    ],
    Work_Experience: [
        {
            Company: 'AJM DEVS Incorporated',
            Job_Title: 'Front-end Developer',
            Start_Date: '01/18/2024',
            End_Date: '05/20/2025'
        }
    ]
};

// Enable CORS
app.use(cors());

// Route to serve resume data
app.get('/', (req, res) => {
    res.json(resume);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}!`);
});
