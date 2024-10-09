// src/pages/Login.jsx
import React from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = () => {
  const [values, setValues] = React.useState({
    userID: '',
    password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:3000/auth/login', values)  // Include values in post request
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-primary mb-6 text-center">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          {/* User ID Field */}
          <div className="mb-4">
            <TextField
              label="User ID"
              variant="outlined"
              fullWidth
              value={values.userID}
              onChange={(e) => setValues({ ...values, userID: e.target.value })}
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={values.password}
              onChange={(e) => setValues({ ...values, password: e.target.value })}
              required
            />
          </div>

          {/* Login Button */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className="bg-accent text-white hover:bg-accentDarker transition-colors"
            onClick={handleSubmit}
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
