// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const LoginSignupPage = () => {
  const [isLoginFormVisible, setLoginFormVisible] = useState(true);

  // States for login
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // States for signup
  const [signupFirstName, setSignupFirstName] = useState('');
  const [signupLastName, setSignupLastName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupPhoneNumber, setSignupPhoneNumber] = useState('');

  // Function to handle login form submission
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
    console.log('Login Email:', loginEmail);
    console.log('Login Password:', loginPassword);
    // Reset login fields after submission
    setLoginEmail('');
    setLoginPassword('');
  };

  // Function to handle signup form submission
  const handleSignupSubmit = (event) => {
    event.preventDefault();
    // Add your signup logic here
    console.log('Signup First Name:', signupFirstName);
    console.log('Signup Last Name:', signupLastName);
    console.log('Signup Email:', signupEmail);
    console.log('Signup Password:', signupPassword);
    console.log('Signup Phone Number:', signupPhoneNumber);
    // Reset signup fields after submission
    setSignupFirstName('');
    setSignupLastName('');
    setSignupEmail('');
    setSignupPassword('');
    setSignupPhoneNumber('');
  };

  const toggleForm = () => {
    setLoginFormVisible(!isLoginFormVisible);
  };

  return (
    <div className="centered-container">
      {isLoginFormVisible ? (
        <>
          <h2>Login</h2>
          <form onSubmit={handleLoginSubmit}>
            <div>
              <label className='emailLogin' htmlFor="loginEmail">Email:</label>
              <input
                type="email"
                id="loginEmail"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className='pwdLogin' htmlFor="loginPassword">Password:</label>
              <input
                type="password"
                id="loginPassword"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </>
      ) : (
        <>
          <h2>Sign Up</h2>
          <form onSubmit={handleSignupSubmit}>
            <div>
              <label className='fnSignup' htmlFor="signupFirstName">First Name:</label>
              <input
                type="text"
                id="signupFirstName"
                value={signupFirstName}
                onChange={(e) => setSignupFirstName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className='lnSignup' htmlFor="signupLastName">Last Name:</label>
              <input
                type="text"
                id="signupLastName"
                value={signupLastName}
                onChange={(e) => setSignupLastName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className='emailSignup' htmlFor="signupEmail">Email:</label>
              <input
                type="email"
                id="signupEmail"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className='pwdSignup' htmlFor="signupPassword">Password:</label>
              <input
                type="password"
                id="signupPassword"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label className='pnSignup' htmlFor="signupPhoneNumber">Phone Number:</label>
              <input
                type="tel"
                id="signupPhoneNumber"
                value={signupPhoneNumber}
                onChange={(e) => setSignupPhoneNumber(e.target.value)}
                required
              />
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </>
      )}
      <p className='account'>
        <p>{isLoginFormVisible ? "Don't have an account? " : "Already have an account? "}</p>
        <a href="#toggleForm" onClick={toggleForm}>
          <p className='change'>{isLoginFormVisible ? 'Sign up' : 'Login'}</p>
        </a>
      </p>
    </div>
  );
};

export default LoginSignupPage;
