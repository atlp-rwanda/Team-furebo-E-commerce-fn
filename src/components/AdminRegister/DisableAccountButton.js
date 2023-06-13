import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import disableAccount from "../../redux/actions/DisableAccount";

export default function DisableAccountButton(props) {
    const dispatch = useDispatch();
    const [dismissed, setDismissed] = useState(false);
    const [updatedData, setUpdatedData] = useState({ isEnabled: props.data.currentUserStatus });
  
    const {
      successCondition, userStatus, error, pending,
    } = useSelector(
      (state) => state.disableAccount,
    );

    const userId = props.data.userId

    const handleDisableButtonClick = () => {
        if (props.data.currentUserStatus) {
            setUpdatedData({ ...updatedData, isEnabled: false });
        } else {
            setUpdatedData({ ...updatedData, isEnabled: true });
        }
        setDismissed(true);
    };

    const handleXButtonClick = () => {
        setDismissed(false)
        setUpdatedData({ ...updatedData, isEnabled: props.data.currentUserStatus });
    }
  
    const handleSubmit = () => {
        disableAccount(updatedData, userId, dispatch);
    };
    
    return (
        <div data-testid="disableAccountButton">
            <button 
                className="button2"
                onClick={handleDisableButtonClick}
            >
                {(props.data.currentUserStatus) ? <>Disable Account</> : <>Enable Account</>}
               
            </button>
            {dismissed && (
                <div className="popUp">
                    <div className="sendingForm">
                        <div onClick={handleXButtonClick} className="disablePopUp">
                            X
                        </div>
                        <div className="confirmation-message">
                            <p>
                                Are you sure you want to 
                                {(props.data.currentUserStatus) ? <> disable </> : <> enable </>} 
                                this account?
                            </p>
                        </div>
                        <button style={{backgroundColor: "#2ed47a"}} onClick={handleSubmit}>Confirm</button>
                        <button onClick={() => setDismissed(false)}>Cancel</button>
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