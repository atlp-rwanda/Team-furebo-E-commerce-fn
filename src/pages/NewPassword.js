import React from 'react';
import NewPasswordform from '../components/newPassword';
import '../css/AuthStyles/Auth.css';

const NewPassword = () => (
  <div className="authPage" data-testid="Newpasswordform">
    <NewPasswordform />
  </div>
);

export default NewPassword;
