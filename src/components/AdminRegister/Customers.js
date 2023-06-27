/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AllQueries } from '../../redux/actions/customerSupport/customerSupport';
import QueryCard from './QueryCard';

const Customers = (handleQueries) => {
  const [queries, setQueries] = useState([]);
  useEffect(() => {
    const getAllQueries = async () => {
      const returnedQueries = await AllQueries();
      if (returnedQueries) {
        setQueries(returnedQueries.data.data);
      }
    };

    getAllQueries();
  }, [handleQueries]);

  return (

    <div className="QueryContainer" data-testid="Customer-supportPage">
      <h1>Customer Support</h1>
      <div className="containerQry">
        {queries?.map((query) => (
          <QueryCard key={query.id} data={query} handleOrders={handleQueries} />
        ))}
      </div>

    </div>

  );
};

export default Customers;
