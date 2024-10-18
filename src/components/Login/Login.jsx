import { useState } from 'react';
import './Login.css'; // Import CSS

import axios from 'axios';

const StudentLogin = () => {

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const handleEye = ()=>{
    // let eyebtn = document.querySelector('.fa-eye');
    setPasswordVisible(!passwordVisible)
    console.log("password showing", passwordVisible)
    const eyeIcon = document.querySelector('#eyeIcon');
    eyeIcon.classList.toggle('fa-eye')
  }

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  let handleLogin = (e) => {
    e.preventDefault();
    console.log("Admin => ",loginData)

    axios.post("http://localhost:8000/admin-login",loginData)
    .then((response)=>{
      console.log(response);
    })
    .catch((error)=>{
      console.log('Error logging in:', error.response.data)
    })
    
  

  }

  return (
    <div id="login-wrapper">
      <div className="login-form">
    <h2>Welcome Back</h2>
    <form>
      <div className="form-group">
        <p>Username</p>
        <i className="fa-regular fa-user fa-form-group-icon"></i>
        <input
          type='text'
          name="username"
          value={loginData.username}
          placeholder='Enter Username'
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <i onClick={handleEye} id="eyeIcon" className='fa-solid fa-eye fa-eye-slash'></i>
        {/* <i class="fa-solid fa-eye-slash"></i> */}
        <input
          type={passwordVisible ? 'text' : 'password'}
          name="password"
          value={loginData.password}
          placeholder='Enter Password'
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" onClick={handleLogin} className='login-btn'>Login</button>
      <button type="cancel" className='cancel-btn'>Cancel</button>
    </form>
  </div>
  </div>
  );
};

export default StudentLogin;
