import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: ""
  });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = credentials;

    if (password !== cpassword) {
      props.showAlert("Passwords do not match", "danger");
      return;
    }

    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    });

    const json = await response.json();
    console.log(json);

    if (json.success) {
      localStorage.setItem('token', json.authtoken);
      navigate("/");
      props.showAlert("Account created successfully", "success");
    } else {
      props.showAlert("Invalid credentials", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-3">
      <h2 className="my-2">Create an account to continue to inotebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={credentials.name}
            onChange={onChange}
            id="name"
            name="name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={credentials.email}
            onChange={onChange}
            id="email"
            name="email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={credentials.password}
            onChange={onChange}
            name="password"
            id="password"
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            value={credentials.cpassword}
            onChange={onChange}
            name="cpassword"
            id="cpassword"
            minLength={5}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
