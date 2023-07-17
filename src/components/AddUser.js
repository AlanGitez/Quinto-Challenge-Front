import React, { useState } from 'react';


export default function AddUser() {
  const BASE_API_URL = "http://localhost:8081/users"

  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    role: '',
    dni: '',
    email: '',
    password: ''
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(BASE_API_URL + '/add', {
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
      <h1>Add User</h1>
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
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            name="lastname"
            value={formData.lasTname}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <input
            type="text"
            className="form-control"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dni">Dni:</label>
          <input
            type="text"
            className="form-control"
            id="dni"
            name="dni"
            value={formData.dni}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
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