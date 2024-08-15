import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const AllProduct = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [sortPrice, setSortPrice] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("/Product.json");
      setAllProduct(data);
    };
    getData();
  }, []);
  console.log(allProduct);

  // search part is here
  const handleSearch = (e) => {
    e.preventDefault();
    const name = e.target.search.value;
    console.log(name);
  };

  // sort by price


    // search range part is here
    const handleRangeSearch = (e) => {
      e.preventDefault();
      const name = e.target.search.value;
      console.log(name);
    };

  return (
    <div className="max-w-7xl w-[90%] mx-auto my-20">
      <h2 className="text-3xl font-bold">All Products</h2>

      <div className=" mt-16">
        {/* search & sort funsanality */}
        <div className="flex flex-col md:flex-row items-center md:justify-end ">
          {/* search */}
          <form
            onSubmit={handleSearch}
            className="flex items-center flex-grow justify-center relative"
          >
            <input
              type="text"
              name="search"
              placeholder="Product Name"
              className="py-2 px-4 rounded-xl font-semibold border border-[#FFA835] text-[#FFA835] w-full"
            />
            <button
              type="submit"
              className="py-2 px-5 hover:bg-[#FFA835]/85 bg-[#FFA835] text-white rounded-xl absolute right-0"
            >
              Search
            </button>
          </form>

          {/* sort by price */}
          <div className="flex mr-5 md:ml-16 mx-6 items-center gap-3 justify-center">
            <p>Sort By:</p>
            <select
              onChange={(e) => setSortPrice(e.target.value)}
              name="sort"
              className="py-2 px-3 rounded-xl font-semibold border border-[#FFA835] text-[#FFA835] select-info w-48 max-w-xs"
            >
              <option defaultValue=""> Price</option>
              <option defaultValue="Descending Order"> Descending Order</option>
              <option defaultValue="Ascending Order"> Ascending Order</option>
            </select>
          </div>

          {/* sort by newest */}
          <div className="">
            <button
              onClick={(e) => setSortPrice(e.target.value)}
              name="sort"
              className="py-2 px-6 rounded-xl hover:bg-[#FFA835] hover:text-white duration-300 font-semibold border border-[#FFA835] text-[#FFA835] select-info"
            >
              Newest Product
            </button>
          </div>
        </div>
      </div>

      {/* bottom part */}
      <div className=" gap-3 grid grid-cols-4 mt-6">
        {/* all products */}
        <div className="col-span-3 grid grid-cols-3 gap-3">
          {allProduct.map((product, idx) => (
            <ProductCard key={idx} product={product}></ProductCard>
          ))}
        </div>

        {/* side component */}
        <div className="rounded-lg border shadow-auth font-outfit p-7">
          <nav className=" space-y-6 ">
            <div className="space-y-3 ">
              {/* Category Name part */}
              <div className="border-b pb-6">
                <p className="flex mt-6 items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 text-[#FFA835]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>

                  <span className="mx-2 text-lg font-medium">
                    Category Name
                  </span>
                </p>
                <div className="flex flex-wrap gap-2 ml-10 mt-2 text-sm">
                  <span className="border p-1 px-2 rounded-md cursor-pointer hover:border-[#FFA835] hover:text-[#FFA835] bg-gray-100">
                    Wearables
                  </span>
                  <span className="border p-1 px-2 rounded-md cursor-pointer hover:border-[#FFA835] hover:text-[#FFA835] bg-gray-100">
                    Tablets
                  </span>
                  <span className="border p-1 px-2 rounded-md cursor-pointer hover:border-[#FFA835] hover:text-[#FFA835] bg-gray-100">
                    Audio
                  </span>
                  <span className="border p-1 px-2 rounded-md cursor-pointer hover:border-[#FFA835] hover:text-[#FFA835] bg-gray-100">
                    Laptops
                  </span>
                  <span className="border p-1 px-2 rounded-md cursor-pointer hover:border-[#FFA835] hover:text-[#FFA835] bg-gray-100">
                    Smartphones
                  </span>
                  <span className="border p-1 px-2 rounded-md cursor-pointer hover:border-[#FFA835] hover:text-[#FFA835] bg-gray-100">
                    Monitors
                  </span>
                  <span className="border p-1 px-2 rounded-md cursor-pointer hover:border-[#FFA835] hover:text-[#FFA835] bg-gray-100">
                    Desktops
                  </span>
                  <span className="border p-1 px-2 rounded-md cursor-pointer hover:border-[#FFA835] hover:text-[#FFA835] bg-gray-100">
                    Televisions
                  </span>
                  <span className="border p-1 px-2 rounded-md cursor-pointer hover:border-[#FFA835] hover:text-[#FFA835] bg-gray-100">
                    Gaming
                  </span>
                </div>
              </div>

              {/* Brand Name */}
              <div className="border-b pb-6">
                <p className="flex mt-6 items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 text-[#FFA835]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
                    />
                  </svg>

                  <span className="mx-2 text-lg font-medium">Brand Name</span>
                </p>
                <div className="flex flex-wrap gap-2 ml-10 mt-2 text-sm">
                  <span className="border p-1 px-2 rounded-md cursor-pointer hover:border-[#FFA835] hover:text-[#FFA835] bg-gray-100">
                    Huawei
                  </span>
                  <span className="border p-1 px-2 rounded-md cursor-pointer hover:border-[#FFA835] hover:text-[#FFA835] bg-gray-100">
                    Sony
                  </span>
                  <span className="border p-1 px-2 rounded-md cursor-pointer hover:border-[#FFA835] hover:text-[#FFA835] bg-gray-100">
                    Asus
                  </span>
                  <span className="border p-1 px-2 rounded-md cursor-pointer hover:border-[#FFA835] hover:text-[#FFA835] bg-gray-100">
                    Apple
                  </span>
                  <span className="border p-1 px-2 rounded-md cursor-pointer hover:border-[#FFA835] hover:text-[#FFA835] bg-gray-100">
                    Samsung
                  </span>
                </div>
              </div>

              {/* Price range */}
              <div className="">
                <p className="flex mt-6 items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 text-[#FFA835]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
                    />
                  </svg>

                  <span className="mx-2 text-lg font-medium">Price Range</span>
                </p>

                <div className="ml-10">
                  {/* search */}
                  <form
                    onSubmit={handleRangeSearch}
                    className="flex items-center flex-grow justify-center relative"
                  >
                    <input
                      type="text"
                      name="search"
                      placeholder="Range"
                      className="py-2 px-4 rounded-xl font-semibold text-sm border border-[#FFA835] text-[#FFA835] w-full"
                    />
                    <button
                      type="submit"
                      className="py-2 px-5 hover:bg-[#FFA835]/85 bg-[#FFA835] text-sm text-white rounded-xl absolute right-0"
                    >
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
