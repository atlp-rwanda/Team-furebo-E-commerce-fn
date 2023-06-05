import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import enable2FAForMerchants from '../redux/actions/2faForSellers/enable2fa.action';
import disable2FAForMerchants from '../redux/actions/2faForSellers/disable2fa.action';
import Fetch2FaStatus from '../redux/actions/2faForSellers/Fetch2faStatus.action';
import '../css/2faStyles/2faCheckbox.css';
import 'react-toastify/dist/ReactToastify.css';

const TwoFaCheckbox = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  useEffect(() => {
    const fetch2FaStatus = async () => {
      try {
        const twoFaStatus = await Fetch2FaStatus();
        setIsChecked(twoFaStatus.enable2FA);
      } catch (error) {
        console.error('Error fetching 2FA status:', error);
      }
    };

    fetch2FaStatus();
  }, []);

  const handleCheckboxChange = async () => {
    try {
      if (!isChecked) {
        setIsButtonDisabled(true);
        await enable2FAForMerchants(navigate);
        setIsChecked(true);
        setTimeout(() => {
          setIsButtonDisabled(false);
        }, 2000);
      } else {
        setIsButtonDisabled(true);
        await disable2FAForMerchants();
        setIsChecked(false);
        setTimeout(() => {
          setIsButtonDisabled(false);
        }, 2000);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="checkbox-container">
      <div className="flex-container">
        <input
          className="form-check-input"
          disabled={isButtonDisabled}
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span
          className="checkbox-label"
          style={{ borderLeft: 'none', paddingLeft: 0 }}
        >
          {' '}
          {isChecked ? 'ON' : 'OFF'}
        </span>
      </div>
    </div>
  );
};

export default TwoFaCheckbox;
