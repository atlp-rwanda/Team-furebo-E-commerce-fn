import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../../css/UserProfile/ChangePasswordAtTimeGiven.css';
import { fetchChangePasswordAtGivenTimeAction } from '../../redux/actions/userProfile/fetchChangePasswordAtGivenTimeAction';

const ChangePasswordAtTimeGiven = () => {
  const dispatch = useDispatch();
  const isExpired = useSelector((state) => state.changePasswordAtGivenTime.isExpired);

  useEffect(() => {
    dispatch(fetchChangePasswordAtGivenTimeAction());
  }, [dispatch]);

  if (isExpired) {
    return (
      <div
        data-testid="ChangePasswordAtTimeGiven"
        className="password-expiration-message"
      >
        Your password has expired, Please
        {' '}
        <Link to="/changepassword">change your password</Link>
        .
      </div>
    );
  }

  return null;
};

export default ChangePasswordAtTimeGiven;
