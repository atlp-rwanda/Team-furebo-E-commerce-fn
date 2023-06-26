import React from "react";
// import { OnChangeSelectOption } from "../addProduct/selectOption";
import { priceOption } from "./priceOption";
// import { OnChangeInputField } from "../inputField";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
// import { getCategories } from "../../redux/features/product-redux/categoriesAction";
import { searchProduct } from "../../redux/actions/searchProduct/SearchProduct";
import { HiAdjustments } from "react-icons/hi";

function Filter() {
  const dispatch = useDispatch();
  const [searchName, setSearchName] = useState('')
  const [searchCategory, setSearchCategory] = useState('')
  const [searchMinPrice, setSearchMinPrice] = useState(0)
  const [searchMaxPrice, setSearchMaxPrice] = useState(0)

//   const { search } = useSelector((state) => state);
//   const { searchForm } = search;
  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    dispatch(updateSearchForm({ [name]: value }));
  };
  const handleCategoryChange = (event) => {
    const { name, value } = event.target;
    dispatch(updateSearchForm({ [name]: value }));
  };
  const handleDateChange = (event) => {
    const { name, value } = event.target;
    dispatch(updateSearchForm({ [name]: value }));
  };
//   useEffect(() => {
//     dispatch(searchProduct(searchForm));
//   }, [searchForm]);
  return (
    <div className=" w-full flex  items-center my-4 screen-base:inline-block">
        <div className="flex items-center">
            <HiAdjustments />
            <p className="text-lg font-bold mx-4">More Filters</p>
        </div>
        <form>
            <input 
                name ="category" 
                placeholder="Enter category Here" 
                id="search-category" 
                type="search" 
                onChange={handleCategoryChange} 
                data-testid="search-category-input" 
            />
            <input 
                name ="minPrice" 
                placeholder="Min Price" 
                id="search-minPrice" 
                type="text" 
                onChange={handlePriceChange}
                data-testid="search-minPrice-input" 
            />
            <input 
                name ="maxPrice" 
                placeholder="Max Price" 
                id="search-maxPrice" 
                type="text" 
                onChange={handlePriceChange}
                data-testid="search-maxPrice-input" 
            />
        </form>
    </div>
  );
}

export default Filter;