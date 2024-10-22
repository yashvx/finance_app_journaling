// src/pages/Dashboard.js
import React, { useState } from 'react';
import ExpenseForm from '../components/ExpenseForm';

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Dashboard</h1>

      {/* Income Section */}
      <div style={styles.section}>
        <h2>Income</h2>
        <div style={styles.placeholder}>Income details will go here.</div>
      </div>

      {/* Expenses Section */}
      <div style={styles.section}>
        <h2>Expenses</h2>
        <ExpenseForm onSubmit={addExpense} />
        <div>
          {expenses.map((expense, index) => (
            <div key={index} style={styles.expenseItem}>
              <strong>{expense.category}</strong>: ${expense.amount} on {expense.date}
            </div>
          ))}
        </div>
      </div>

      {/* Budget Summary Section */}
      <div style={styles.section}>
        <h2>Budget Summary</h2>
        <div style={styles.placeholder}>Budget summary will go here.</div>
      </div>
    </div>
  );
};

const styles = {
  section: {
    marginBottom: '20px',
  },
  placeholder: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
  expenseItem: {
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
};

export default Dashboard;
