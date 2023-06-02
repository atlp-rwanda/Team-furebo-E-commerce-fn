<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> 15c6b94 (feat: seller delete product functionality)
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Tooltip, Button } from '@material-tailwind/react';
import Swal from 'sweetalert2';
<<<<<<< HEAD
import { deleteProduct, getSingleProduct } from '../redux/actions/SellerProduct';
import { singleProduct, setUpdateProduct } from '../redux/slices/sellerProductSlice';
import Logo from '../assets/images/our-logo.png';
import '../css/SingleProductStyles/SingleProduct.css';

const SingleProduct = () => {
=======
import { deleteProduct } from '../redux/actions/SellerProduct';
import { singleProduct } from '../redux/slices/sellerProductSlice';
import '../css/SingleProductStyles/SingleProduct.css';

const SingleProduct = () => {
  const product = useSelector((state) => state.products.singleProduct);

>>>>>>> 15c6b94 (feat: seller delete product functionality)
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState(null);
  const {
    pending,
  } = useSelector((state) => state.products);
<<<<<<< HEAD
  const initialProduct = useSelector((state) => state.products.singleProduct);
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('inside', product);
        const response = await getSingleProduct(id);
        setProduct(response.data);
        dispatch({ type: 'products/updateSingleProduct', payload: response.data });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching single product:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
=======
>>>>>>> 15c6b94 (feat: seller delete product functionality)

  const handleDeleteProduct = async (e) => {
    e.preventDefault();
    try {
      Swal.fire({
        title: 'Are you Sure?',
        // eslint-disable-next-line quotes
        text: 'This permenantly deletes the product!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        cancelButtonText: 'cancel',
        confirmButtonText: 'Yes delete it',
<<<<<<< HEAD
        customClass: {
          content: 'warning-window',
        },
=======
>>>>>>> 15c6b94 (feat: seller delete product functionality)
      }).then((result) => {
        if (result.isConfirmed) {
          deleteProduct(product, dispatch, navigate);
        }
      });
    } catch (errorss) {
      setErrors('Error fetching profile data', errorss);
      toast.error('Sorry Product was not deleted', { theme: 'colored' });
    }
  };
<<<<<<< HEAD
  const handleUpdateProduct = () => {
    dispatch(setUpdateProduct(product));
    console.log(product);
    navigate(`/updateProduct/${product.id}`);
  };

  if (loading) {
    return (
      <div className="message">
        Please Wait
        <span className="animate-bounce">
          {'  '}
          ...
        </span>
        <img className="logo-image2" src={Logo} alt="" width="100px" />
        <br />
=======
  if (pending) {
    return (
      <div className="justify center text-3xl">
        Loading
        <span className="animate-bounce">...</span>
>>>>>>> 15c6b94 (feat: seller delete product functionality)
      </div>
    );
  }

  return (
    <div className="parent-container" data-testid="SingleProduct">
      <div className="container">
        {[product]
          .map((item, index) => (
            <div key={index} className="separate-sides">
              <div className="image-container">
                <img
                  className="image-class"
<<<<<<< HEAD
                  src={item?.image[0]}
                  alt={item?.name}
=======
                  src={item.image[0]}
                  alt={item.name}
>>>>>>> 15c6b94 (feat: seller delete product functionality)
                />
              </div>
              <div className="">
                <div className="right-side-details">
                  <h3 className="name-class">
<<<<<<< HEAD
                    {item?.name}
=======
                    {item.name}
>>>>>>> 15c6b94 (feat: seller delete product functionality)
                  </h3>
                  <p className="description-class">
                    It is important to reiterate that a good product description is an investment
                    that pays for itself. Product picture alone
                    isn’t enough. The headline, UX, images, trust signals and other on-page el
                    ements are just as important. Use these product description exam.
                  </p>
                  <ul className="list" style={{ listStyleType: 'disc' }}>
                    <li>
                      <p className="category-class">
                        Category:
                        {' '}
                        <span className style={{ fontWeight: 'bold' }}>
<<<<<<< HEAD
                          {item?.category}
=======
                          {item.category}
>>>>>>> 15c6b94 (feat: seller delete product functionality)
                        </span>
                      </p>
                    </li>
                    <li>
                      <p className="category-class">
                        Quantity:
                        {' '}
<<<<<<< HEAD
                        <span className style={{ fontWeight: 'bold' }}>{item?.quantity}</span>
=======
                        <span className style={{ fontWeight: 'bold' }}>{item.quantity}</span>
>>>>>>> 15c6b94 (feat: seller delete product functionality)
                      </p>
                    </li>
                    <li>
                      <p className="category-class">
                        Created At:
                        {' '}
<<<<<<< HEAD
                        <span className style={{ fontWeight: 'bold' }}>{new Date(item?.createdAt).toLocaleDateString('en-US')}</span>
                      </p>
                    </li>
                    <li>
                      {item?.exDate ? (
                        <p className="category-class">
                          Expiration Date:
                          {' '}
                          <span className style={{ fontWeight: 'bold' }}>{new Date(item?.exDate).toLocaleDateString('en-US')}</span>
=======
                        <span className style={{ fontWeight: 'bold' }}>{new Date(item.createdAt).toLocaleDateString('en-US')}</span>
                      </p>
                    </li>
                    <li>
                      {item.exDate ? (
                        <p className="category-class">
                          Expiration Date:
                          {' '}
                          <span className style={{ fontWeight: 'bold' }}>{new Date(item.exDate).toLocaleDateString('en-US')}</span>
>>>>>>> 15c6b94 (feat: seller delete product functionality)
                        </p>
                      ) : null}
                    </li>
                    <li>
                      <p className="category-class">
                        Status:
                        {' '}
                        <span className style={{ fontWeight: 'bold' }}>
<<<<<<< HEAD
                          {item?.status}
=======
                          {item.status}
>>>>>>> 15c6b94 (feat: seller delete product functionality)
                        </span>
                      </p>
                    </li>
                    <p className="price">
                      $
                      {' '}
<<<<<<< HEAD
                      {item?.price}
=======
                      {item.price}
>>>>>>> 15c6b94 (feat: seller delete product functionality)
                    </p>
                  </ul>
                  <div className="actionButtonAll">
                    <div>
                      <Tooltip content="Update Product" placement="bottom">
                        <Button
                          className="actionButtonU"
                          color="green"
                          size="lg"
                          variant="outlined"
                          ripple
<<<<<<< HEAD
                          onClick={() => handleUpdateProduct(product)}
=======
>>>>>>> 15c6b94 (feat: seller delete product functionality)
                        >
                          Update
                        </Button>
                      </Tooltip>

                    </div>
                    <div>
                      <Tooltip content="Delete Product" placement="bottom">
                        <Button
                          className="actionButtonD"
                          color="red"
                          size="lg"
                          variant="outlined"
                          ripple
                          onClick={handleDeleteProduct}
                          data-testid="Delete"
                        >
                          Delete
                        </Button>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SingleProduct;
