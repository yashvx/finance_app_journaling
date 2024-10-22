// src/pages/Login.js
import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    let errors = {};
    if (!formData.email) errors.email = "Email is required";
    if (!formData.password) errors.password = "Password is required";

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Submit the form (for now, we can just log the data)
      console.log('Form Submitted', formData);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
