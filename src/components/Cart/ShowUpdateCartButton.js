/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
import React from 'react';
import { FiEdit } from 'react-icons/fi';
import UpdateCartButtons from './UpdateCartButtons';

const ShowUpdateCartButton = ({
  handleDecrease,
  handleIncrease,
  quantity,
  setShowButtons,
  showButtons,
}) => {
  const handleButtonClick = () => {
    setShowButtons(prevShowButtons => !prevShowButtons);
  };
  return (
    <div
      data-testid="show-update-btns-toggle"
      className="show-update-btns-toggle"
    >
      {showButtons && (
        <UpdateCartButtons
          handleDecrease={handleDecrease}
          handleIncrease={handleIncrease}
          quantity={quantity}
          setShowButtons={setShowButtons}
        />
      )}
      <button onClick={handleButtonClick} className="show-update-btns">
        <FiEdit />
      </button>
    </div>
  );
};

export default ShowUpdateCartButton;
