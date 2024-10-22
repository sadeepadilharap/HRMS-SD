// src/pages/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [values, setValues] = React.useState({
    user_id: '',
    user_password: '',
  });

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:3000/auth/login', values)  // Include values in post request
      .then((result) => {
        if (result.data.loginStatus) {
          navigate('/dashboard');
        } else {
          setError(result.data.Error);
        }

      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <div className='text-red-500'>
          {error && error}
        </div>
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
              value={values.user_id}
              onChange={(e) => setValues({ ...values, user_id: e.target.value })}
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
              value={values.user_password}
              onChange={(e) => setValues({ ...values, user_password: e.target.value })}
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

          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
