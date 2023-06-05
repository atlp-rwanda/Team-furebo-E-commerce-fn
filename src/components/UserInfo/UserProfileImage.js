/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { storage } from './firebase';

const UserProfileImage = ({ handleChange }) => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [imageUrl, setImageUrl] = useState('');
  const [imagePreview, setImagePreview] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const fileName = `${uuidv4()}_${file.name}`;
    const imageRef = ref(storage, `images/${fileName}`);
    const uploadTask = uploadBytesResumable(imageRef, file);

    // Read the selected image file and generate a preview URL
    const reader = new FileReader();
    reader.onload = (event) => {
      setImagePreview(event.target.result);
    };
    reader.readAsDataURL(file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        console.log('Error uploading image: ', error);
      },
      async () => {
        const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
        setImageUrl(downloadUrl);
        handleChange({ target: { name: 'profileImage', value: downloadUrl } });
      },
    );
  };

  return (
    <div className="user-field profile-image-field">
      <label htmlFor="profileImage">Profile Image</label>
      <hr />
      <div className="profile-image-prev-input">

        {imagePreview && <img src={imagePreview} alt="Preview" width={50} height={50} />}
        {uploadProgress > 0 && uploadProgress < 100 ? (
          <progress value={uploadProgress} max="100" />
        ) : (
          <input type="file" id="profileImage" name="profileImage" onChange={handleFileChange} />
        )}
      </div>
    </div>
  );
};

export default UserProfileImage;
