import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import disableAccount from '../../redux/actions/DisableAccount';

export default function DisableAccountButton(userData) {
  const dispatch = useDispatch();
  const [dismissed, setDismissed] = useState(false);
  const [updatedData, setUpdatedData] = useState({
    isEnabled: userData.isEnabled,
  });

  const { successCondition, userStatus, error, pending } = useSelector(
    state => state.disableAccount
  );

  const userId = userData.id;

  const handleDisableButtonClick = () => {
    setUpdatedData({ ...updatedData, isEnabled: false });
    setDismissed(true);
  };

  const handleXButtonClick = () => {
    setDismissed(false);
    setUpdatedData({ ...updatedData, isEnabled: userData.isEnabled });
  };

  const handleSubmit = () => {
    disableAccount(updatedData, userId, dispatch);
  };

  return (
    <div data-testid="disableAccountButton">
      <button className="button2" onClick={handleDisableButtonClick}>
        Disable Account
      </button>
      {dismissed && (
        <div className="popUp">
          <div className="sendingForm">
            <div onClick={handleXButtonClick} className="disablePopUp">
              X
            </div>
            <div className="confirmation-message">
              <p>Are you sure you want to disable this account?</p>
            </div>
            <button onClick={handleSubmit}> Disable Account </button>
            {/* <button onClick={() => setDismissed(false)}>Cancel</button> */}
            {pending && <span className="pending">loading...</span>}
            {successCondition && (
              <span className="successDisplay">{userStatus.message}</span>
            )}
            {error.condition && (
              <span className="errorDisplay">{error.message}</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
