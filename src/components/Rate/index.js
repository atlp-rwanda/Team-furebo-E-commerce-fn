import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import '../../css/Rate/Rate.css';
import rateProducts from '../../redux/actions/RateProduct';
import { rateProductStart } from '../../redux/slices/rateProductSlice';

const Rate = ({ productId }) => {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.user.fullName);
  const { pending } = useSelector(state => state.rateProduct);

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [review, setReview] = useState('');

  const handleChange = e => {
    setReview(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(rateProductStart());
    const newRate = {
      rating,
      review,
      userName,
    };
    rateProducts(newRate, productId, dispatch);
    setReview('');
    localStorage.setItem('rateResult', JSON.stringify(newRate));
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starColor = i <= (hover || rating) ? '#ffc107' : '#e4e5e9';
      stars.push(
        <label className="star-label" key={i}>
          <input
            type="radio"
            name="rating"
            className="star-radio"
            value={i}
            onClick={() => setRating(i)}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
          />
          <FaStar
            className="star"
            size="1.5rem"
            color={starColor}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
          />
        </label>
      );
    }
    return stars;
  };

  return (
    <div className="rate">
      <p className="rate-review">Review</p>
      <form onSubmit={handleSubmit}>
        <div className="star-container">{renderStars()}</div>
        <div>
          <input
            data-testid="rate-input"
            type="text"
            value={review}
            className="rate-input"
            name="rate-comment"
            onChange={handleChange}
          />
        </div>
        <button data-testid="rate-submit-button" className="rate-btn">
          {pending ? 'Loading' : 'Add Review'}
        </button>
      </form>
    </div>
  );
};

export default Rate;
