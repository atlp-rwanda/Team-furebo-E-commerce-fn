/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ViewUserEssentialInfoFields from './ViewUserEssentialInfoFields';
import { fetchUserEssentialInfoAction } from '../../redux/actions/userProfile/FetchUserEssentialInfoAction';

const ViewUserEssentialInfo = () => {
  const dispatch = useDispatch();
  const userEssentialInfo = useSelector((state) => state.userProfile.userEssentialInfo);
  const loading = useSelector((state) => state.userProfile.loading);
  const [nextPart, setNextPart] = useState(true);

  useEffect(() => {
    dispatch(fetchUserEssentialInfoAction());
  }, [dispatch]);

  return (
    <div className="view-user-essential-info">

      <ViewUserEssentialInfoFields userEssentialInfo={userEssentialInfo} nextPart={nextPart} setNextPart={setNextPart} />

    </div>
  );
};

export default ViewUserEssentialInfo;
