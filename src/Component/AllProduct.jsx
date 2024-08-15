import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const AllProduct = () => {
    const [allProduct, setAllProduct] = useState([])

    useEffect(() => {
        const getData = async() => {
            const {data} = await axios.get("/Product.json");
            setAllProduct(data);
        }
        getData()
    }, [])

  return (
    <div className="max-w-7xl w-[90%] mx-auto my-20">
      <h2 className="text-3xl font-bold">All Products</h2>
      <div className=" gap-3 grid grid-cols-4 mt-6">
        {/* all products */}
        <div className="col-span-3 grid grid-cols-3 gap-3">
            {
                allProduct.map((product, idx) => <ProductCard key={idx} product={product}></ProductCard>)
            }

        </div>

        {/* side component */}
        <div className="rounded-lg border shadow-auth font-outfit p-7">
          <nav className=" space-y-6 ">
            <div className="space-y-3 ">
              
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

                  <span className="mx-2 text-lg font-medium">MY ORDERS</span>
                </p>
                <div className="*:block ml-10 mt-2 space-y-3 text-sm">
                  <Link>Order History</Link>
                  <Link>Download</Link>
                  <Link>Return</Link>
                  <Link>Transaction</Link>
                </div>
              </div>
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

                  <span className="mx-2 text-lg font-medium">MY STUFF</span>
                </p>
                <div className="*:block ml-10 mt-2 space-y-3 text-sm">
                  <Link>Wishlist</Link>
                  <Link>Reward Points</Link>
                  <Link>Coupon</Link>
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
