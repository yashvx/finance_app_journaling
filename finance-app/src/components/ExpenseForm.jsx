// src/components/ExpenseForm.js
import React, { useState } from 'react';

const ExpenseForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    category: '',
    amount: '',
    date: ''
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
    if (!formData.category) errors.category = "Category is required";
    if (!formData.amount) errors.amount = "Amount is required";
    if (!formData.date) errors.date = "Date is required";

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Call the onSubmit function to pass form data to parent component
      onSubmit(formData);

      // Clear the form
      setFormData({
        category: '',
        amount: '',
        date: ''
      });
    }
  };

  return (
    <div>
      <h2>Add New Expense</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
          {errors.category && <span>{errors.category}</span>}
        </div>
        <div>
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
          />
          {errors.amount && <span>{errors.amount}</span>}
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          {errors.date && <span>{errors.date}</span>}
        </div>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
