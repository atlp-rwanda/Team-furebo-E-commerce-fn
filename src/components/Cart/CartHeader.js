import React from 'react';
import ClearCartButtons from './ClearCartButtons';
import '../../css/in-view-page-header.css';

const CartHeader = ({ hasItems }) => (
  <>
    <div data-testid="in-view-page-cart-header" className="in-view-page-header">
      <h2>Your Cart</h2>
      {hasItems && <ClearCartButtons />}
    </div>
    <hr />
  </>
);

export default CartHeader;
