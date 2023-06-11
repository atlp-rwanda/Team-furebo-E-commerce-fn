/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import '../../css/AddProducts/AddProduct.css';
import { useDispatch } from 'react-redux';
import AddProducts from '../../redux/actions/addProduct';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState([]);
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('');
  const [exDate, setExDate] = useState('');
  const [errors, setErrors] = useState({});
  const [submissionMessage, setSubmissionMessage] = useState('');
  const cloudName = 'damoif3ob';

  const dispatch = useDispatch();
  const validateForm = () => {
    const errors = {};
    if (!name) {
      errors.name = 'Name is required';
    }
    if (image.length < 4) {
      errors.images = 'At least four images are required';
    }
    if (!price) {
      errors.price = 'Price is required';
    }
    if (price < 0) {
      errors.price = 'Price must be a positive number';
    }
    if (!quantity) {
      errors.quantity = 'Quantity is required';
    }
    if (quantity < 0) {
      errors.quantity = 'Quantity must be a positive number';
    }
    if (!category) {
      errors.category = 'Category is required';
    }
    if (!exDate) {
      errors.exDate = 'Expired date is required';
    }
    if (new Date(exDate) <= new Date()) {
      errors.exDate = 'Expired date must be greater than today';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const files = Array.from(e.target.files);
    setImage(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const imageURLs = [];
        for (const file of image) {
          const formData = new FormData();
          formData.append('file', file);
          formData.append('upload_preset', 'x8ceiutn');
          const response = await fetch(
            `https://api.cloudinary.com/v1_1/${'damoif3ob'}/upload`,
            {
              method: 'POST',
              body: formData,
            },
          );
          const data = await response.json();
          imageURLs.push(data.secure_url);
        }
        const newProduct = {
          name,
          image: imageURLs,
          price,
          quantity,
          category,
          exDate: new Date(exDate).toISOString().slice(0, 10),
        };

        AddProducts(newProduct, dispatch);
        setName('');
        setImage([]);
        setPrice('');
        setQuantity(1);
        setCategory('');
        setExDate('');
        setSubmissionMessage('Form submitted successfully!');
        setTimeout(() => {
          setSubmissionMessage('');
        }, 10000);
      } catch (error) {
        console.error('Error uploading images to Cloudinary:', error);
        setSubmissionMessage(
          'Failed to submit the form. Please try again later.',
        );
      }
    }
  };
  return (
    <div className="add-product-container" data-testid="AddProduct">
      <h1 className="product-heading">Add Product</h1>
      <div className="form-group-container">
        <div>
          <form className="add-product-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-group-label" htmlFor="name">
                Name:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Product Name"
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label className="form-group-label" htmlFor="images">
                Images:
              </label>
              <input type="file" id="images" multiple onChange={handleChange} />
              {errors.images && <span className="error">{errors.images}</span>}
            </div>
            <div className="form-group">
              <label className="form-group-label" htmlFor="price">
                Price:
              </label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
              />
              {errors.price && <span className="error">{errors.price}</span>}
            </div>
            <div className="form-group">
              <label className="form-group-label" htmlFor="quantity">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Quantity"
              />
              {errors.quantity && (
                <span className="error">{errors.quantity}</span>
              )}
            </div>
            <div className="form-group">
              <label className="form-group-label" htmlFor="category">
                Category:
              </label>
              <input
                type="text"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Category"
              />
              {errors.category && (
                <span className="error">{errors.category}</span>
              )}
            </div>
            <div className="form-group">
              <label className="form-group-label" htmlFor="expiredDate">
                Expired Date:
              </label>
              <input
                type="date"
                data-testid="exDate-input"
                id="expiredDate"
                value={exDate}
                onChange={(e) => setExDate(e.target.value)}
              />
              {errors.exDate && <span className="error">{errors.exDate}</span>}
            </div>
            <div>
              <button
                data-testid="addProduct"
                className="add-product-btn"
                type="submit"
              >
                Add Product
              </button>
            </div>
          </form>
          {submissionMessage && (
            <p className="submission-message">{submissionMessage}</p>
          )}
        </div>
        <div className="image-container">
          {image.length > 0 && (
            <div className="image-preview">
              <h2 className="image-heading">Image Preview:</h2>
              <div className="preview-container">
                {image.map((file, index) => (
                  <img
                    className="img-card"
                    key={index}
                    src={URL.createObjectURL(file)}
                    alt={`Preview ${index}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
