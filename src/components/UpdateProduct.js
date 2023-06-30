import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AiTwotoneDelete } from 'react-icons/ai';
import { GrChapterAdd } from 'react-icons/gr';
import { toast } from 'react-toastify';
import { singleProduct } from '../redux/slices/sellerProductSlice';
import { updateProduct } from '../redux/actions/SellerProduct';
import '../css/UpdateProduct/UpdateProduct.css';

const UpdateProduct = () => {
  const product = useSelector((state) => state.products.updateProduct);
  const [name, setName] = useState(product?.name || '');
  const [image, setImage] = useState(product?.image || []);
  const [price, setPrice] = useState(product?.price || '');
  const [quantity, setQuantity] = useState(product?.quantity || 1);
  const [category, setCategory] = useState(product?.category || '');
  const [exDate, setExDate] = useState(product?.exDate || '');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');
  const cloudName = 'damoif3ob';

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    successCondition, userInfo, error, pending,
  } = useSelector(
    (state) => state.products,
  );

  const pattern = /^(0?[1-9]|1[0-2])\/(0?[1-9]|1\d|2\d|3[01])\/\d{4}$/;

  useEffect(() => {
    if (product?.exDate) {
      setExDate(new Date(product.exDate).toLocaleDateString('en-US'));
    }
  }, [product]);
  const validateForm = () => {
    const errors = {};
    if (!name) {
      errors.name = 'Name is required';
    }
    if (image.length <= 4 && image.length >= 8) {
      errors.images = 'You are only allowed to add "Four" to "Eight" images';
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
    if (new Date(exDate) <= new Date()) {
      errors.exDate = 'Expired date must be greater than today';
    }
    if (!pattern.test(exDate)) {
      errors.exDate = 'Please enter a valid date';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const files = Array.from(e.target.files);
    console.log('files', files);
    setImage(files);
  };
  const handleDelete = (index) => {
    const updatedImages = [...image];
    updatedImages.splice(index, 1);
    setImage(updatedImages);
  };
  const handleIconClick = () => {
    fileInputRef.current.click();
  };
  const handleAddImage = (event) => {
    const file = event.target.files[0];
    setImage([...image, file]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true);
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
          id: product.id,
          name,
          image: imageURLs,
          price,
          quantity,
          category,
          exDate: new Date(exDate).toISOString().slice(0, 10),
        };
        console.log('new Product', newProduct);

        updateProduct(newProduct, dispatch, navigate);
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
        setLoading(false);
        console.error('Error uploading images to Cloudinary:', error);
        toast.error(error, { theme: 'colored' });
      }
    }
  };
  return (
    <div className="add-product-container" data-testid="UpdateProduct">
      <h1 className="product-heading">UPDATE Product</h1>
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
                className="placeholder"
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
              <div className="placeholder">
                Add Using The
                <span><GrChapterAdd className="text-upload-icon" /></span>
                Icon In Image Preview
              </div>
              {errors.images && <span className="error">{errors.images}</span>}
            </div>
            <div className="form-group">
              <label className="form-group-label" htmlFor="price">
                Price:
              </label>
              <input
                type="number"
                id="price"
                className="placeholder"
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
                className="placeholder"
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
                className="placeholder"
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
                type="string"
                data-testid="exDate-input"
                id="expiredDate"
                className="placeholder"
                value={exDate}
                onChange={(e) => setExDate(e.target.value)}
              />
              {errors.exDate && <span className="error">{errors.exDate}</span>}
            </div>
            <div>
              <button
                data-testid="updateProduct"
                className="add-product-btn"
                type="submit"
              >
                {loading ? 'loading...' : 'Update Product'}
              </button>
            </div>
          </form>
        </div>
        <div className="image-container">
          {image.length > 0 && (
            <div className="image-preview">
              <h2 className="image-heading">Image Preview:</h2>
              <div className="preview-container">
                {image.map((file, index) => (
                  <div key={index} className="image-container">
                    <img
                      className="img-card"
                      src={file instanceof File ? URL.createObjectURL(file) : file}
                      alt={`Preview ${index}`}
                    />
                    <AiTwotoneDelete
                      className="delete-image-btn"
                      onClick={() => handleDelete(index)}
                      data-testid={`delete-image-${index}`}
                    />
                  </div>
                ))}
              </div>

            </div>
          )}
          <div>
            <label htmlFor="image-upload" className="upload-label">
              <GrChapterAdd className="upload-icon" />
            </label>
            <input
              type="file"
              data-testid="addImage"
              id="image-upload"
              className="upload-input"
              ref={fileInputRef}
              onChange={handleAddImage}
              style={{ display: 'none' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
