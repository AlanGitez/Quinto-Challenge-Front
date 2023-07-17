import React, { useState } from 'react';


export default function AddCourse() {
  const BASE_API_URL = "http://localhost:8081/courses"

  const [formData, setFormData] = useState({
    name: '',
    schedule: ''
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch( BASE_API_URL + '/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        
        console.log(data);
      });
  };
    
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>Add Course</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="schedule">Schedule:</label>
          <input
            type="text"
            className="form-control"
            id="schedule"
            name="schedule"
            value={formData.schedule}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}