import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '../css/2faStyles/verifyOTP.css';
import '../css/AuthStyles/Auth.css';
import verifyOTPCode from '../redux/actions/2faForSellers/verifyOTP.action';

const VerifyOTP = () => {
  const [OTPCode, setOTPCode] = useState(Array(6).fill(''));
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const updatedCode = [...OTPCode];
    updatedCode[index] = e.target.value;
    setOTPCode(updatedCode);

    if (e.target.value !== '' && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };
  const handleKeyDown = (e, index) => {
    if (e.key === 'ArrowLeft' && index > 0) {
      e.preventDefault();
      inputRefs.current[index - 1].focus();
      inputRefs.current[index - 1].setSelectionRange(1, 1);
    } else if (e.key === 'ArrowRight' && index < inputRefs.current.length - 1) {
      e.preventDefault();
      inputRefs.current[index + 1].focus();
      inputRefs.current[index + 1].setSelectionRange(0, 0);
    } else if (e.key === 'Backspace' && index > 0 && OTPCode[index] === '') {
      e.preventDefault();
      inputRefs.current[index - 1].focus();
      inputRefs.current[index - 1].setSelectionRange(1, 1);
    }
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async e => {
    e.preventDefault();
    const code = OTPCode.join('');
    setIsButtonDisabled(true);
    await verifyOTPCode(code, dispatch, navigate);
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 2000);
  };

  return (
    <div className="verify" data-testid="VerifyCode">
      <div className="row justify-content-center mt-7 verifyContainer">
        <div className="col-lg-5 text-center verifyContent">
          <a href="index.html">
            <img src="assets/img/svg/logo.svg" alt="" />
          </a>
          <div className="card mt-4">
            <div className="card-body py-5 px-lg-5">
              <div className="svg-icon svg-icon-xl text-purple">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="512"
                  height="512"
                  viewBox="0 0 512 512"
                >
                  <title>ionicons-v5-g</title>
                  <path
                    d="M336,208V113a80,80,0,0,0-160,0v95"
                    className="pathOTP"
                  />
                  <rect
                    x="96"
                    y="208"
                    width="320"
                    height="272"
                    rx="48"
                    ry="48"
                    className="rectOTP"
                  />
                </svg>
              </div>
              <h1 className="mt-4">2-Step Verification</h1>
              <p className="mt-4 mb-1">
                We sent a verification code to your email.
              </p>
              <p>Please enter the code in the field below.</p>
              <form onSubmit={handleSubmit} data-testid="verify-form">
                <div className="row mt-4 pt-2 inputs">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div className="col" key={index}>
                      <input
                        type="text"
                        className="form-control form-control-lg text-center py-3 input-field"
                        maxLength={1}
                        autoFocus={index === 0}
                        required
                        name={`digit-${index}`}
                        value={OTPCode[index] || ''}
                        ref={input => (inputRefs.current[index] = input)}
                        onChange={e => handleChange(e, index)}
                        onKeyDown={e => handleKeyDown(e, index)}
                      />
                    </div>
                  ))}
                </div>
                <button
                  type="submit"
                  className={`verify-button mt-5 ${
                    isButtonDisabled ? 'disabled' : ''
                  }`}
                  disabled={isButtonDisabled}
                >
                  Verify My Account
                </button>
              </form>
            </div>
          </div>
          <p className="resendCode">
            Didn't receive it?
            <a
              href="/authentication"
              className="text-decoration-none ms-2"
              data-testid="resend-code-button"
            >
              Resend code
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;
