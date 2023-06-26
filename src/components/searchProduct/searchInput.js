import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';
import searchProduct from "../../redux/actions/searchProduct/SearchProduct";
import { data } from "autoprefixer";

// function useQuery() {
//     return new URLSearchParams(useLocation().search);
// }

// const dispatch = useDispatch();
// const navigate = useNavigate();

// const [searchName, setSearchName] = useState("")
// const [searchCategory, setSearchCategory] = useState("")
// const [searchMinPrice, setSearchMinPrice] = useState(0)
// const [searchMaxPrice, setSearchMaxPrice] = useState(0)

function SearchInput() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
//   const [searchData, setSearchData] = useState({
//     searchName: "",
//     searchCategory: "",
//     searchMinPrice: 0,
//     searchMaxPrice: null,
//   }) 
    const [searchName, setSearchName] = useState('') 
    const [searchCategory, setSearchCategory] = useState('')
    const [searchMinPrice, setSearchMinPrice] = useState(0)
    const [searchMaxPrice, setSearchMaxPrice] = useState()
//   const query = useQuery();
//   const category = query.get('category') || "";
//   const minPrice = query.get('minPrice') || 0;
//   const maxPrice = query.get('maxPrice') || 150000;

    const {
        successCondition, searchResults, error, pending,
    } = useSelector(
        (state) => state.searchProduct,
    );

    const handleNameChange = (event) => {
        setSearchName(event.target.value)
    };

    const submitSearch = async (e) => {
        let name, category, minPrice, maxPrice
        if (searchName) {
            name = searchName
        }
        if (searchCategory) {
            category = searchCategory
        }
        if (searchMinPrice) {
            minPrice = searchMinPrice
        }
        if (searchMaxPrice) {
            maxPrice = searchMaxPrice
        }
        // setSearchData(...searchData, {searchName: searchName} )
        console.log(name)
        await searchProduct(name, category, minPrice, maxPrice, dispatch);
        // await searchProduct(name, dispatch);
        navigate("/search-results");
    };

    return (
        // <form
        //     onSubmit={submitSearch}
        //     className=""
        // >
        // {/* <InputField
        //     type="text"
        //     placeholder="search Here"
        //     name="name"
        //     register={register("name")}
        //     className="bg-transparent px-4 py-2 outline-none col-span-2  w-96 screen-base:w-48"
        //     data-testid="search-input"
        // /> */}

        // </form>
        <div className="search" onSubmit={submitSearch}>
            <FaSearch className="searchIcn" data-testid="search-icon"/>
            <input onChange={handleNameChange} name="searchName" placeholder="search Here" id="search" type="text" data-testid="search-input" />
            <button
                onClick={submitSearch}
                data-testid="button-search"
            >
                search
            </button>
        </div>
    );
}

export default SearchInput;