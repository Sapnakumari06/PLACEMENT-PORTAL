import axios from 'axios';

// Rest of your code
 // login.js



function Login() {
    axios = require('axios'); // Make sure you've installed Axios

    const loginData = {
      email: 'user@example.com', // Replace with the user's email
      password: 'password123',    // Replace with the user's password
    };
    
    axios.post('http://localhost:5000/api/placements/api/login', loginData)
      .then((response) => {
        console.log('Login successful', response.data);
      })
      .catch((error) => {
        // Handle login errors here
        console.error('Login failed', error);
      });
}

export default Login; // Make sure to export it as default

