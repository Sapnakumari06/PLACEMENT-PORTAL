// components/Register.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

export default function Register() {
  const [formData, setFormData] = useState({
    unique_id: '',
    first_name: '',
    last_name: '',
    date_of_birth: '',
    email: '',
    phone: '',
    department_id: 1, // Replace with the appropriate department ID
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send registration data to the server
      await axios.post('/api/register', formData);
      alert('Registration successful');
    } catch (error) {
      console.error('Registration failed', error);
      alert('Registration failed');
    }
  };

  return (
    <div className="register-container">
      <Form onSubmit={handleSubmit}>
        {/* Your form fields go here */}
        <Form.Group controlId="unique_id">
          <Form.Label>Enter your Unique ID</Form.Label>
          <Form.Control
            type="text"
            name="unique_id"
            value={formData.unique_id}
            onChange={handleChange}
            required
          />
        </Form.Group>
        {/* Add more form fields here */}
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
}
