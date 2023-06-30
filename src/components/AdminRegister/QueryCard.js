import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import image from '../../assets/images/faq.png';

const QueryCard = ({ data, handleQueries }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dismissed, setDismissed] = useState(false);
  return (

    <div className="cardWraper" data-testid="QueryCard">
      <div className="cardWraperInner">
        <img src={image} alt="images" />
        <div className="cardWraperInnerBody">
          <h1>{`Query Id: ${data.id} `}</h1>
          <p>{`Full Name: ${data.fullname}`}</p>
          <p>{`email: ${data.id}`}</p>
          <p>{`message: ${data.message}`}</p>
        </div>
      </div>
    </div>
  );
};

export default QueryCard;
