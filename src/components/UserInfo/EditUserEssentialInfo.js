
import React from 'react';
import PropTypes from 'prop-types';

const EditUserEssentialInfo = ({
  gender,
  birthdate,
  preferredLanguage,
  preferredCurrency,
  homeAddress,
  street,
  city,
  country,
  poBoxNumber,
  zipCode,
  phoneNumber,
  profileImage,
  onChange,
  onSubmit,
}) => (
  <form onSubmit={onSubmit} data-testid="editEssential">

    <div className="user-essential-info">
      <div className="essential-info">
        <div className="user-field">
          <label htmlFor="gender">Gender</label>
          <input
            type="text"
            id="gender"
            value={gender}
            onChange={onChange}
            name="gender"
          />
        </div>
        <div className="user-field">
          <label htmlFor="birthdate">Birthdate</label>
          <input
            type="text"
            id="birthdate"
            value={birthdate}
            onChange={onChange}
            name="birthdate"
          />
        </div>
        <div className="user-field">
          <label htmlFor="preferredLanguage">Preferred Language</label>
          <input
            type="text"
            id="preferredLanguage"
            value={preferredLanguage}
            onChange={onChange}
            name="preferredLanguage"
          />
        </div>
        <div className="user-field">
          <label htmlFor="preferredCurrency">Preferred Currency</label>
          <input
            type="text"
            id="preferredCurrency"
            value={preferredCurrency}
            onChange={onChange}
            name="preferredCurrency"
          />
        </div>
        <div className="user-field">
          <label htmlFor="homeAddress">Home Address</label>
          <input
            type="text"
            id="homeAddress"
            value={homeAddress}
            onChange={onChange}
            name="homeAddress"
          />
        </div>
        <div className="user-field">
          <label htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            value={street}
            onChange={onChange}
            name="street"
          />
        </div>
      </div>
      <div className="home-address">
        <div className="user-field">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={onChange}
            name="city"
          />
        </div>
        <div className="user-field">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={onChange}
            name="country"
          />
        </div>
        <div className="user-field">
          <label htmlFor="poBoxNumber">PO Box Number</label>
          <input
            type="text"
            id="poBoxNumber"
            value={poBoxNumber}
            onChange={onChange}
            name="poBoxNumber"
          />
        </div>
        <div className="user-field">
          <label htmlFor="zipCode">Zip Code</label>
          <input
            type="text"
            id="zipCode"
            value={zipCode}
            onChange={onChange}
            name="zipCode"
          />
        </div>
        <div className="user-field">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={onChange}
            name="phoneNumber"
          />
        </div>
        <div className="user-field">
          <label htmlFor="profileImage">Profile Image</label>
          <input
            type="text"
            id="profileImage"
            value={profileImage}
            onChange={onChange}
            name="profileImage"
          />
        </div>
      </div>
    </div>
  </form>
);

EditUserEssentialInfo.propTypes = {
  gender: PropTypes.string.isRequired,
  birthdate: PropTypes.string.isRequired,
  preferredLanguage: PropTypes.string.isRequired,
  preferredCurrency: PropTypes.string.isRequired,
  homeAddress: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  poBoxNumber: PropTypes.string.isRequired,
  zipCode: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default EditUserEssentialInfo;
