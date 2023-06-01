
import React from 'react';

const AddUserEssentialInfoForm = ({ formData, handleChange, handleSubmit }) => (
  <form data-testid="addEssential" onSubmit={handleSubmit}>
    <div className="user-essential-info">
      <div className="essential-info">
        <div className="user-field">
          <label htmlFor="gender">Gender</label>
          <input
            type="text"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          />
        </div>
        <div className="user-field">
          <label htmlFor="birthdate">Birthdate</label>
          <input
            type="text"
            id="birthdate"
            name="birthdate"
            value={formData.birthdate}
            onChange={handleChange}
          />
        </div>
        <div className="user-field">
          <label htmlFor="preferredLanguage">Preferred Language</label>
          <input
            type="text"
            id="preferredLanguage"
            name="preferredLanguage"
            value={formData.preferredLanguage}
            onChange={handleChange}
          />
        </div>
        <div className="user-field">
          <label htmlFor="preferredCurrency">Preferred Currency</label>
          <input
            type="text"
            id="preferredCurrency"
            name="preferredCurrency"
            value={formData.preferredCurrency}
            onChange={handleChange}
          />
        </div>
        <div className="user-field">
          <label htmlFor="homeAddress">Home Address</label>
          <input
            type="text"
            id="homeAddress"
            name="homeAddress"
            value={formData.homeAddress}
            onChange={handleChange}
          />
        </div>
        <div className="user-field">
          <label htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            name="street"
            value={formData.street}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="home-address">
        <div className="user-field">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div className="user-field">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
        </div>
        <div className="user-field">
          <label htmlFor="poBoxNumber">PO Box Number</label>
          <input
            type="text"
            id="poBoxNumber"
            name="poBoxNumber"
            value={formData.poBoxNumber}
            onChange={handleChange}
          />
        </div>
        <div className="user-field">
          <label htmlFor="zipCode">Zip Code</label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
          />
        </div>
        <div className="user-field">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="user-field">
          <label htmlFor="profileImage">Profile Image</label>
          <input
            type="text"
            id="profileImage"
            name="profileImage"
            value={formData.profileImage}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
    <button className="btn btn-submit" type="submit">
      CREATE
    </button>
  </form>
);

export default AddUserEssentialInfoForm;
