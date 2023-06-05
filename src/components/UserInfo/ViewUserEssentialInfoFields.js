/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-indent */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../css/UserProfile/ViewUserEssentialInfoFields.css'
import { FiCheck, FiEdit } from 'react-icons/fi';
import { GrFormPreviousLink } from 'react-icons/gr';
import { updateUserEssentialInfoAction } from '../../redux/actions/userProfile/UpdateUserEssentialInfoAction';
import NoEssentialInfoMessage from './NoEssentialInfoMessage';

const ViewUserEssentialInfoFields = ({ nextPart, setNextPart }) => {
  const { userEssentialInfo } = useSelector((state) => state.userProfile)
  const [editingField, setEditingField] = useState('');
  const [gender, setGender] = useState(userEssentialInfo.gender);
  const [birthdate, setBirthdate] = useState(userEssentialInfo.birthdate);
  const [preferredLanguage, setPreferredLanguage] = useState(userEssentialInfo.preferredLanguage);
  const [preferredCurrency, setPreferredCurrency] = useState(userEssentialInfo.preferredCurrency);
  const [phoneNumber, setPhoneNumber] = useState(userEssentialInfo.phoneNumber);
  const [street, setStreet] = useState(userEssentialInfo.street);
  const [city, setCity] = useState(userEssentialInfo.city);
  const [country, setCountry] = useState(userEssentialInfo.country);
  const [poBoxNumber, setPoBoxNumber] = useState(userEssentialInfo.poBoxNumber);
  const [zipCode, setZipCode] = useState(userEssentialInfo.zipCode);
  const [showEditIcons, setShowEditIcons] = useState(false);

  const dispatch = useDispatch();
  console.log(userEssentialInfo)
  const handleEditClick = (field) => {
    setEditingField(field);
  };

  const handleSaveClick = () => {
    const updatedInfo = {
      gender,
      birthdate,
      preferredLanguage,
      preferredCurrency,
      phoneNumber,
      street,
      city,
      country,
      poBoxNumber,
      zipCode,
    };

    dispatch(updateUserEssentialInfoAction(updatedInfo))
      .then(() => {
        // Save was successful, exit edit mode
        setEditingField('');
      })
      .catch((error) => {
        // Save failed, handle error
        console.log('Save failed:', error);
      });
  };

  const isEditing = (field) => editingField === field;
  const handleNextPart = () => {
    setNextPart(false);
  };
  return (
    <div data-testid="user-essential-info-container" className="user-essential-info-container">
      {Object.keys(userEssentialInfo).length === 0 ? (<NoEssentialInfoMessage />) : (
        <div className="user-essential-info">

          <div className="user-essential-billing-address">
            {nextPart && (
              <div className="essential-info">
                <div className="essential-info-view-left-right">
                  <div className="essential-info-left">
                    <div className="user-field">
                      <label htmlFor="gender">Gender</label>
                      <hr />
                      <div className="input-and-span">
                        {isEditing('gender') ? (
                          <>
                            <input
                              type="text"
                              value={gender}
                              onChange={(e) => setGender(e.target.value)}
                              data-testid="gender-input"
                              className="gender-input"
                            />
                            <FiCheck
                              onClick={handleSaveClick}
                              data-testid="gender-save"
                              className="gender-save"
                            />
                          </>
                        ) : (
                          <>
                            <span id="gender" data-testid="gender">
                              {gender}
                            </span>
                            {showEditIcons && (
                              <FiEdit
                                onClick={() => handleEditClick('gender')}
                                data-testid="gender-edit"
                                className="gender-edit"
                              />
                            )}
                          </>
                        )}
                      </div>
                    </div>
                    <div className="user-field">
                      <label htmlFor="birthdate">Birthdate</label>
                      <hr />
                      <div className="input-and-span">
                        {isEditing('birthdate') ? (
                          <>
                            <input
                              type="text"
                              value={birthdate}
                              onChange={(e) => setBirthdate(e.target.value)}
                              data-testid="birthdate-input"
                              className="birthdate-input"
                            />
                            <FiCheck
                              onClick={handleSaveClick}
                              data-testid="birthdate-save"
                              className="birthdate-save"
                            />
                          </>
                        ) : (
                          <>
                            <span id="birthdate" data-testid="birthdate">
                              {birthdate}
                            </span>
                            {showEditIcons && (
                              <FiEdit
                                onClick={() => handleEditClick('birthdate')}
                                data-testid="birthdate-edit"
                                className="birthdate-edit"
                              />
                            )}
                          </>
                        )}
                      </div>
                    </div>
                    <div className="user-field">
                      <label htmlFor="preferredLanguage">Preferred Language</label>
                      <hr />
                      <div className="input-and-span">
                        {isEditing('preferredLanguage') ? (
                          <>
                            <input
                              type="text"
                              value={preferredLanguage}
                              onChange={(e) => setPreferredLanguage(e.target.value)}
                              data-testid="preferredLanguage-input"
                              className="preferredLanguage-input"
                            />
                            <FiCheck
                              onClick={handleSaveClick}
                              data-testid="preferredLanguage-save"
                              className="preferredLanguage-save"
                            />
                          </>
                        ) : (
                          <>
                            <span id="preferredLanguage" data-testid="preferredLanguage">
                              {preferredLanguage}
                            </span>
                            {showEditIcons && (
                              <FiEdit
                                onClick={() => handleEditClick('preferredLanguage')}
                                data-testid="preferredLanguage-edit"
                                className="preferredLanguage-edit"
                              />
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="essential-info-right">
                    <div className="user-field">
                      <label htmlFor="preferredCurrency">Preferred Currency</label>
                      <hr />
                      <div className="input-and-span">
                        {isEditing('preferredCurrency') ? (
                          <>
                            <input
                              type="text"
                              value={preferredCurrency}
                              onChange={(e) => setPreferredCurrency(e.target.value)}
                              data-testid="preferredCurrency-input"
                              className="preferredCurrency-input"
                            />
                            <FiCheck
                              onClick={handleSaveClick}
                              data-testid="preferredCurrency-save"
                              className="preferredCurrency-save"
                            />
                          </>
                        ) : (
                          <>
                            <span id="preferredCurrency" data-testid="preferredCurrency">
                              {preferredCurrency}
                            </span>
                            {showEditIcons && (
                              <FiEdit
                                onClick={() => handleEditClick('preferredCurrency')}
                                data-testid="preferredCurrency-edit"
                                className="preferredCurrency-edit"
                              />
                            )}
                          </>
                        )}
                      </div>
                    </div>
                    <div className="user-field">
                      <label htmlFor="phoneNumber">Phone Number</label>
                      <hr />
                      <div className="input-and-span">
                        {isEditing('phoneNumber') ? (
                          <>
                            <input
                              type="text"
                              value={phoneNumber}
                              onChange={(e) => setPhoneNumber(e.target.value)}
                              data-testid="phoneNumber-input"
                              className="phoneNumber-input"
                            />
                            <FiCheck
                              onClick={handleSaveClick}
                              data-testid="phoneNumber-save"
                              className="phoneNumber-save"
                            />
                          </>
                        ) : (
                          <>
                            <span id="phoneNumber" data-testid="phoneNumber">
                              {phoneNumber}
                            </span>
                            {showEditIcons && (
                              <FiEdit
                                onClick={() => handleEditClick('phoneNumber')}
                                data-testid="phoneNumber-edit"
                                className="phoneNumber-edit"
                              />
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="next-part-div ">
                  <button className="next-button" onClick={handleNextPart}>Next</button>
                </div>
                <button className="show-edit-icons" onClick={() => setShowEditIcons(!showEditIcons)}>
                  <FiEdit />
                </button>
              </div>
            )}
            {!nextPart && (
              <>
                <div className="billing-address">
                  <div className="billing-address-view-left-right">
                    <div className="billing-address-left">
                      <div className="user-field">
                        <label htmlFor="street">Street</label>
                        <hr />
                        <div className="input-and-span">
                          {isEditing('street') ? (
                            <>
                              <input
                                type="text"
                                value={street}
                                onChange={(e) => setStreet(e.target.value)}
                                data-testid="street-input"
                                className="street-input"
                              />
                              <FiCheck
                                onClick={handleSaveClick}
                                data-testid="street-save"
                                className="street-save"
                              />
                            </>
                          ) : (
                            <>
                              <span id="street" data-testid="street">
                                {street}
                              </span>
                              {showEditIcons && (
                                <FiEdit
                                  onClick={() => handleEditClick('street')}
                                  data-testid="street-edit"
                                  className="street-edit"
                                />
                              )}
                            </>
                          )}
                        </div>
                      </div>
                      <div className="user-field">
                        <label htmlFor="city">City</label>
                        <hr />
                        <div className="input-and-span">
                          {isEditing('city') ? (
                            <>
                              <input
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                data-testid="city-input"
                                className="city-input"
                              />
                              <FiCheck
                                onClick={handleSaveClick}
                                data-testid="city-save"
                                className="city-save"
                              />
                            </>
                          ) : (
                            <>
                              <span id="city" data-testid="city">
                                {city}
                              </span>
                              {showEditIcons && (
                                <FiEdit
                                  onClick={() => handleEditClick('city')}
                                  data-testid="city-edit"
                                  className="city-edit"
                                />
                              )}
                            </>
                          )}
                        </div>
                      </div>
                      <div className="user-field">
                        <label htmlFor="country">Country</label>
                        <hr />
                        <div className="input-and-span">
                          {isEditing('country') ? (
                            <>
                              <input
                                type="text"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                data-testid="country-input"
                                className="country-input"
                              />
                              <FiCheck
                                onClick={handleSaveClick}
                                data-testid="country-save"
                                className="country-save"
                              />
                            </>
                          ) : (
                            <>
                              <span id="country" data-testid="country">
                                {country}
                              </span>
                              {showEditIcons && (
                                <FiEdit
                                  onClick={() => handleEditClick('country')}
                                  data-testid="country-edit"
                                  className="country-edit"
                                />
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="billing-address-rigt">
                      <div className="user-field">
                        <label htmlFor="poBoxNumber">PO Box Number</label>
                        <hr />
                        <div className="input-and-span">
                          {isEditing('poBoxNumber') ? (
                            <>
                              <input
                                type="text"
                                value={poBoxNumber}
                                onChange={(e) => setPoBoxNumber(e.target.value)}
                                data-testid="poBoxNumber-input"
                                className="poBoxNumber-input"
                              />
                              <FiCheck
                                onClick={handleSaveClick}
                                data-testid="poBoxNumber-save"
                                className="poBoxNumber-save"
                              />
                            </>
                          ) : (
                            <>
                              <span id="poBoxNumber" data-testid="poBoxNumber">
                                {poBoxNumber}
                              </span>
                              {showEditIcons && (
                                <FiEdit
                                  onClick={() => handleEditClick('poBoxNumber')}
                                  data-testid="poBoxNumber-edit"
                                  className="poBoxNumber-edit"
                                />
                              )}
                            </>
                          )}
                        </div>
                      </div>
                      <div className="user-field">
                        <label htmlFor="zipCode">Zip Code</label>
                        <hr />
                        <div className="input-and-span">
                          {isEditing('zipCode') ? (
                            <>
                              <input
                                type="text"
                                value={zipCode}
                                onChange={(e) => setZipCode(e.target.value)}
                                data-testid="zipCode-input"
                                className="zipCode-input"
                              />
                              <FiCheck
                                onClick={handleSaveClick}
                                data-testid="zipCode-save"
                                className="zipCode-save"
                              />
                            </>
                          ) : (
                            <>
                              <span id="zipCode" data-testid="zipCode">
                                {zipCode}
                              </span>
                              {showEditIcons && (
                                <FiEdit
                                  onClick={() => handleEditClick('zipCode')}
                                  data-testid="zipCode-edit"
                                  className="zipCode-edit"
                                />
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  {!nextPart && (
                    <div className="next-part-button">
                      <div className="previous-create-div">
                        <button className="previous-button" onClick={() => setNextPart(true)}>Previous</button>
                      </div>
                    </div>
                  )}
                </div>
                <button className="show-edit-icons" onClick={() => setShowEditIcons(!showEditIcons)}>
                  <FiEdit />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>

  );
};

export default ViewUserEssentialInfoFields;
