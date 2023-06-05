/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import { CountrySelect, StateSelect, CountryFlag } from 'react-country-state-city';
import '../../css/UserProfile/AddEssentialInfoFields.css';
import 'react-country-state-city/dist/react-country-state-city.css';
import UserProfileImage from './UserProfileImage';

const AddEssentialInfoFields = ({
  formData, handleChange, nextPart, setNextPart,
}) => {
  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);
  const handleNextPart = () => {
    setNextPart(false);
  };

  return (
    <div className="user-essential-info" data-testid="user-essential-info">
      {nextPart && (
        <div className="essential-info">
          <div className="essential-info-fields">
            <div className="essential-info-fields-left-right">
              <div className="essential-info-fields-left">
                <div className="user-field ">
                  <label>Gender</label>
                  <hr />
                  <div className="gender-field-container">
                    <div className="gender-field">
                      <span className="gender-span">Male</span>
                      <input
                        className="gender-radio"
                        type="radio"
                        name="gender"
                        data-testid="gender-male"
                        value="Male"
                        checked={formData?.gender === 'Male'}
                        onChange={handleChange}
                      />

                    </div>
                    <div className="gender-field">
                      <span className="gender-span">Female</span>
                      <input
                        className="gender-radio"
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={formData?.gender === 'Female'}
                        onChange={handleChange}
                      />

                    </div>
                    <div className="gender-field">
                      <span className="gender-span">Other</span>
                      <input
                        className="gender-radio"
                        type="radio"
                        name="gender"
                        value="Other"
                        checked={formData?.gender === 'Other'}
                        onChange={handleChange}
                      />

                    </div>
                  </div>
                </div>
                <div className="user-field birthdate">
                  <label htmlFor="birthdate">Birthdate</label>
                  <hr />
                  <input
                    type="date"
                    id="birthdate"
                    name="birthdate"
                    value={formData?.birthdate}
                    onChange={handleChange}
                  />
                </div>
                <div className="user-field user-field-languages">
                  <label>Preferred Language</label>
                  <hr />
                  <select
                    name="preferredLanguage"
                    value={formData?.preferredLanguage}
                    onChange={handleChange}
                  >
                    <option value="English">English</option>
                    <option value="French">French</option>
                    <option value="Swahili">Swahili</option>
                    <option value="Kinyarwanda">Kinyarwanda</option>
                  </select>
                </div>
              </div>
              <div className="essential-info-fields-right">
                <div className="user-field">
                  <label>Preferred Currency</label>
                  <hr />
                  <div className="currency-field-container">
                    <div className="currency-field">
                      <span>USD</span>
                      <input
                        type="checkbox"
                        name="preferredCurrency"
                        value="USD"
                        checked={formData?.preferredCurrency?.includes('USD')}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="currency-field">
                      <span>EURO</span>
                      <input
                        type="checkbox"
                        name="preferredCurrency"
                        value="EURO"
                        checked={formData?.preferredCurrency?.includes('EURO')}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="currency-field">
                      <span>Shilling</span>
                      <input
                        type="checkbox"
                        name="preferredCurrency"
                        value="Shilling"
                        checked={formData?.preferredCurrency?.includes('Shilling')}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="currency-field">
                      <span>Francs</span>
                      <input
                        type="checkbox"
                        name="preferredCurrency"
                        value="Francs"
                        checked={formData?.preferredCurrency?.includes('Francs')}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="user-field">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <hr />
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData?.phoneNumber}
                    onChange={handleChange}
                    placeholder="Enter your Mobile Number"
                  />
                </div>
                <div className="user-field">
                  <label htmlFor="poBoxNumber">PO box Number</label>
                  <hr />
                  <input
                    type="text"
                    id="poBoxNumber"
                    name="poBoxNumber"
                    value={formData?.poBoxNumber}
                    onChange={handleChange}
                    placeholder="Enter your PO box Number"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="next-part-div ">
            <button className="next-button" onClick={handleNextPart}>Next</button>

          </div>
        </div>
      )}
      {!nextPart && (
        <div className="billing-address-container">
          <div className="billing-address-fields-left-right">
            <div className="billing-address-fields-left">
              <div className="user-field">
                <label htmlFor="homeAddress">Home Address</label>
                <hr />
                <input
                  type="text"
                  id="homeAddress"
                  name="homeAddress"
                  value={formData?.homeAddress}
                  onChange={handleChange}
                  placeholder="Enter your Home adress"
                />
              </div>
              <div className="user-field">
                <label htmlFor="country">Country</label>
                <hr />
                <CountrySelect
                  onChange={(e) => {
                    setCountryid(e.id);
                    handleChange({ target: { name: 'country', value: e.name } });
                  }}
                  placeHolder="Select Country"
                />
              </div>
              <div className="user-field">
                <label htmlFor="city">city</label>
                <hr />
                <StateSelect
                  countryid={countryid}
                  onChange={(e) => {
                    setstateid(e.id);
                    handleChange({ target: { name: 'city', value: e.name } });
                  }}
                  placeHolder="Select city"
                />
              </div>
            </div>
            <div className="billing-address-fields-right">

              <div className="user-field">
                <label htmlFor="street">Street</label>
                <hr />
                <input
                  type="text"
                  id="street"
                  name="street"
                  value={formData?.street}
                  onChange={handleChange}
                  placeholder="Enter your steet"
                />
              </div>
              <div className="user-field">
                <label htmlFor="zipCode">Zip Code</label>
                <hr />
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData?.zipCode}
                  onChange={handleChange}
                  placeholder="Enter your area ZipCode"
                />
              </div>

              <UserProfileImage formData={formData} handleChange={handleChange} />
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
      )}
    </div>
  );
};

export default AddEssentialInfoFields;
