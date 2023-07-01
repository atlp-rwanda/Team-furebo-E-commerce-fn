/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { SlCalender } from 'react-icons/sl';
import { FiEdit, FiCheck } from 'react-icons/fi';
import PlaceholderImage from '../../assets/images/Placeholder.png';
import { updateUserBasicInfoAction } from '../../redux/actions/userProfile/UpdateUserBasicInfoAction';
import '../../css/UserProfile/ViewUserBasicInfoFields.css';
import Enable2faCheckBox from '../enable2FA.button';

const ViewUserBasicInfoFields = ({ userBasicInfo }) => {
  const [editingField, setEditingField] = useState('');
  const [firstName, setFirstName] = useState(userBasicInfo.firstName);
  const [lastName, setLastName] = useState(userBasicInfo.lastName);
  const [email, setEmail] = useState(userBasicInfo.email);
  const [Role, setUserRole] = useState(null);
  const [showEditIcons, setShowEditIcons] = useState(false);
  const { userEssentialInfo } = useSelector((state) => state.userProfile);
  const dispatch = useDispatch();

  useEffect(() => {
    setFirstName(userBasicInfo.firstName);
    setLastName(userBasicInfo.lastName);
    setEmail(userBasicInfo.email);
  }, [userBasicInfo]);

  const handleEditClick = (field) => {
    setEditingField(field);
    setShowEditIcons(!showEditIcons);
  };

  const handleSaveClick = () => {
    const updatedInfo = {
      firstName,
      lastName,
      email,
    };

    dispatch(updateUserBasicInfoAction(updatedInfo))
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

  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    const userRole = userInfo?.userData?.role;
    if (userRole) {
      const userRoleName = JSON.parse(userRole).name;
      setUserRole(userRoleName);
    }
  }, []);

  return (
    <div className="view-user-basic-infor">
      <div data-testid="viewBasic" className="user-profile-container">
        <div className="view-user-profile">
          <div className="user-profile-image-container">
            <div className="user-profile-image">
              <img
                id="profileImage"
                src={userEssentialInfo.profileImage || PlaceholderImage}
                alt="Profile Image"
                data-testid="profileImage"
              />
            </div>
          </div>
          <div className="user-profile-info">
            <div>
              <div className="user-field first-last-name">
                <div className="input-and-span ">
                  {isEditing('firstName') ? (
                    <>
                      <FiCheck onClick={handleSaveClick} className="save-icon" data-testid="saveIcon" />
                      <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="first-name-input" data-testid="firstNameInput" />
                    </>
                  ) : (
                    <>
                      {showEditIcons && <FiEdit onClick={() => handleEditClick('firstName')} className="edit-icon" data-testid="firstNameEditIcon" />}
                      <span id="firstName" className="first-name" data-testid="firstName">{firstName}</span>
                    </>
                  )}
                  {isEditing('lastName') ? (
                    <>
                      <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="last-name-input" data-testid="lastNameInput" />
                      <FiCheck onClick={handleSaveClick} className="save-icon" data-testid="saveIcon" />
                    </>
                  ) : (
                    <>
                      <span id="lastName" className="last-name" data-testid="lastName">{lastName}</span>
                      {showEditIcons && <FiEdit onClick={() => handleEditClick('lastName')} className="edit-icon" data-testid="lastNameEditIcon" />}
                    </>
                  )}
                </div>
              </div>

              <div className="user-field email-field">
                <div className="input-and-span">
                  {isEditing('email') ? (
                    <>
                      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="email-input" data-testid="emailInput" />
                      <FiCheck onClick={handleSaveClick} className="save-icon" data-testid="saveIcon" />
                    </>
                  ) : (
                    <>
                      {showEditIcons && <FiEdit onClick={() => handleEditClick('email')} className="edit-icon" data-testid="emailEditIcon" />}
                      <span id="email" className="email" data-testid="email">{email}</span>
                    </>
                  )}
                </div>
              </div>
              <hr />
              <div className="Joined-field">
                {/* <SlCalender id="calender-icon" /> */}
                <span className="Joined-text">Joined</span>
                <span id="createdAt" className="joined-date" data-testid="joinedDate">{userBasicInfo.createdAt}</span>
              </div>
              <div className="two-fct-aut-edit-div">
                <div className="user-field">
                  {Role === 'merchant' && (
                    <div className="user-field twofaStatus">
                      <span>
                        <Enable2faCheckBox />
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="show-edit-icons-div">
                <button className="show-edit-icons" onClick={() => setShowEditIcons(!showEditIcons)}>
                  <FiEdit />
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUserBasicInfoFields;
