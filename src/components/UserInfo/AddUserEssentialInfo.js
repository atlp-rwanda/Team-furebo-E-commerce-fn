/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
/* eslint-disable no-use-before-define */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addEssentialInfo } from '../../redux/actions/userProfile/AddUserEssentialInfoAction';
import AddEssentialInfoFields from './AddEssentialInfoFields';
import '../../css/UserProfile/AddEssentialInfoFields.css';

const AddUserEssentialInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [nextPart, setNextPart] = useState(true);
  const [formData, setFormData] = useState({
    gender: '',
    birthdate: '',
    preferredLanguage: '',
    preferredCurrency: '',
    homeAddress: '',
    street: '',
    city: '',
    country: '',
    poBoxNumber: '',
    zipCode: '',
    phoneNumber: '',
    profileImage: '',
  });

  const handleChange = (e) => {
    if (e.target.name === 'country' || e.target.name === 'city') {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.profileImage) {
      dispatch(addEssentialInfo({
        ...formData,
        country: formData.country,
        state: formData.state,
      }));
      resetForm();
      setTimeout(() => {
        navigate('/view-profile');
      }, 2000);
    }
  };

  const resetForm = () => {
    setFormData({
      gender: '',
      birthdate: '',
      preferredLanguage: '',
      preferredCurrency: '',
      homeAddress: '',
      street: '',
      city: '',
      country: '',
      poBoxNumber: '',
      zipCode: '',
      phoneNumber: '',
      profileImage: '',
    });
  };

  const isSubmitDisabled = !formData.profileImage;

  return (
    <>
      <div className="essential-info-title-div">
        <span className="essential-info-title ">Add your Essential Information</span>
      </div>
      <div data-testid="user-essential-info-fields" className="user-essential-info-fields">
        <form data-testid="addEssential" className="add-essential" onSubmit={handleSubmit}>
          <AddEssentialInfoFields formData={formData} handleChange={handleChange} nextPart={nextPart} setNextPart={setNextPart} />
          {!nextPart && (
          <div className="next-part-button">
            <div className="previous-create-div">
              <button className="submit-button" type="submit" disabled={isSubmitDisabled}>
                {formData.profileImage ? 'CREATE' : 'Wait...'}
              </button>
            </div>
          </div>
          )}
        </form>
      </div>

    </>
  );
};

export default AddUserEssentialInfo;
