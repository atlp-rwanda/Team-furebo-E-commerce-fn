import React from 'react';
import AuthForm from '../components/AuthForm';
import '../css/AuthStyles/Auth.css';

const Auth = () => (
  <div className="authPage" data-testid="Auth">
    <AuthForm />
  </div>
);

export default Auth;
