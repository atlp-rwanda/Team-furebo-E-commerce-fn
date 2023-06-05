// view
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ViewUserBasicInfoFields from './ViewUserBasicInfoFields';
import { fetchUserBasicInfoAction } from '../../redux/actions/userProfile/FetchUserBasicInfoAction';

const ViewUserBasicInfo = () => {
  const dispatch = useDispatch();
  const userBasicInfo = useSelector((state) => state.basicInfo.userBasicInfo);

  useEffect(() => {
    dispatch(fetchUserBasicInfoAction());
  }, [dispatch]);

  return (
    <div>
      <ViewUserBasicInfoFields userBasicInfo={userBasicInfo} />
    </div>
  );
};

export default ViewUserBasicInfo;
