import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const AllProduct = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [sortPrice, setSortPrice] = useState([]);
  const [name, setName] = useState("");
  const [newProduct, setNewProduct] = useState(false);
  const [category, setCategory] = useState("");
  const [brandName, setBrandName] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [count, setCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `https://inno-mart-server.vercel.app/products?productName=${name}&price=${sortPrice}&newProduct=${newProduct}&category=${category}&brandName=${brandName}&page=${currentPage}&size=${itemsPerPage}`
      );
      setAllProduct(data.result);
      setCount(data.count.length);
    };
    getData();
  }, [
    name,
    sortPrice,
    newProduct,
    category,
    brandName,
    currentPage,
    itemsPerPage,
  ]);

  // search part is here
  const handleSearch = (e) => {
    e.preventDefault();
    const name = e.target.search.value;
    setName(name);
    setCategory("");
    setBrandName("");
  };

  // search range part is here
  const handleRangeSearch = (e) => {
    e.preventDefault();
    const name = e.target.search.value;
  };

  // category & brand names
  const categorys = [
    "Wearables",
    "Tablets",
    "Audio",
    "Laptops",
    "Monitors",
    "Smartphones",
    "Desktops",
    "Televisions",
    "Gaming",
  ];
  const brandNames = ["Huawei", "Sony", "Asus", "Apple", "Samsung"];


  const numbersOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numbersOfPages).keys()].map((e) => e + 1);

  const handlePaginationButton = (value) => {
    setCurrentPage(value);
  };

  return (
    <div className="max-w-7xl w-[90%] mx-auto my-20">
      <h2 className="text-3xl font-bold">All Products</h2>

      <div className="mt-10 md:mt-16">
        {/* search & sort funsanality */}
        <div className="flex flex-col md:flex-row md:items-center justify-end space-y-2 items-end">
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
          <div className="flex  md:ml-16 md:mx-6  items-center gap-3 justify-center">
            <p className="text-sm">Sort-By: </p>
            <select
              onChange={(e) =>
                e.target.value === "Price"
                  ? setSortPrice("")
                  : (setSortPrice(e.target.value),
                    setCategory(""),
                    setBrandName(""))
              }
              name="sort"
              className="py-2 px-3 rounded-xl font-semibold border border-[#FFA835] text-[#FFA835] select-info max-w-xs"
            >
              <option defaultValue=""> Price</option>
              <option defaultValue="Low to High"> Low to High</option>
              <option defaultValue="High to Low"> High to Low</option>
            </select>
          </div>

          {/* sort by newest */}
          <div className="ml-5">
            <button
              onClick={() => (
                setNewProduct(!newProduct), setCategory(""), setBrandName("")
              )}
              className={`py-2 px-6 rounded-xl hover:bg-[#FFA835] ${
                newProduct ? "bg-[#FFA835] text-white" : "bg-white"
              } hover:text-white duration-300 font-semibold border border-[#FFA835] text-[#FFA835] select-info`}
            >
              Newest Product
            </button>
          </div>
        </div>
      </div>

      {/* bottom part */}
      <div className=" gap-0 md:gap-3 grid grid-cols-1 md:grid-cols-4 mt-6">
        {/* all products */}
        <div className="col-span-3 ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {allProduct.map((product, idx) => (
              <ProductCard key={idx} product={product}></ProductCard>
            ))}
          </div>
             {/* pagination */}
             <div className="flex justify-center">
            <div className=" mt-12">
              {/* previous */}
              <button
                disabled={currentPage === 1}
                onClick={() => handlePaginationButton(currentPage - 1)}
                className="px-4 py-2 mx-1  disabled:text-gray-500 capitalize rounded-full disabled:cursor-not-allowed disabled:bg-gray-200 disabled:hover:text-gray-500 hover:bg-[#FF5537]/80 bg-[#FF5537] text-white"
              >
                <div className="flex items-center -mx-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-1 rtl:-scale-x-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16l-4-4m0 0l4-4m-4 4h18"
                    />
                  </svg>

                  <span className="mx-1">previous</span>
                </div>
              </button>

              {/* numbers */}
              {pages.map((btnNum) => (
                <button
                  onClick={() => handlePaginationButton(btnNum)}
                  key={btnNum}
                  className={`hidden px-4 py-2 mx-1 ${
                    currentPage === btnNum ? "bg-[#FF5537] text-white" : ""
                  } transition-colors duration-300 transform  rounded-full  sm:inline hover:bg-[#FF5537]/80  hover:text-white`}
                >
                  {btnNum}
                </button>
              ))}

              {/* NEXT */}
              <button
                disabled={currentPage === numbersOfPages}
                onClick={() => handlePaginationButton(currentPage + 1)}
                className="px-4 py-2 mx-1 text-white disabled:text-gray-500 capitalize rounded-full disabled:cursor-not-allowed disabled:bg-gray-200 disabled:hover:text-gray-500 hover:bg-[#FF5537]/80 bg-[#FF5537] "
              >
                <div className="flex items-center -mx-1">
                  <span className="mx-1">Next</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-1 rtl:-scale-x-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* side component */}
        <div className="rounded-lg border shadow-auth font-outfit mt-12 md:mt-0 p-7">
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
                  {categorys.map((c, idx) => (
                    <span
                      key={idx}
                      onClick={(e) => setCategory(e.target.innerText)}
                      className={`border p-1 px-2 rounded-md  ${
                        category === c
                          ? "bg-[#FFA835] text-white"
                          : "bg-gray-100"
                      } cursor-pointer hover:border-[#FFA835] hover:text-[#FFA835] `}
                    >
                      {c}
                    </span>
                  ))}
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
                  {brandNames.map((b, idx) => (
                    <span
                      key={idx}
                      onClick={(e) => setBrandName(e.target.innerText)}
                      className={`border p-1 px-2 rounded-md  ${
                        brandName === b
                          ? "bg-[#FFA835] text-white"
                          : "bg-gray-100"
                      } cursor-pointer hover:border-[#FFA835] hover:text-[#FFA835] `}
                    >
                      {b}
                    </span>
                  ))}
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
