import React from 'react';
import Google from '../components/loginGoogle'
import './login.css'

function Login () {
  return (
    <React.Fragment>
      <h1 className='notita-title'>Notita</h1>
      <p className='notita-subtitle'>¡Welcome! Get started with Notita</p>
      
      <Google />
    </React.Fragment>
  );
}

export default Login;