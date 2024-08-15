import React from "react";
import { FaArrowRight, FaRegStar } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { LuClock } from "react-icons/lu";

const ProductCard = ({ product }) => {
  const {
    productName,
    productImage,
    price,
    creationDate,
    category,
    description,
    ratings,
  } = product;
  return (
    <div>
      <div className="h-full ">
        <div className="card h-full border rounded-2xl bg-white dark:bg-white/90 card-compact font-open shadow-lg">
          <figure
            className="md:h-60 border w-full h-[250px] rounded-xl bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${productImage})` }}
          ></figure>
          <div className="relative px-6 mt-5">
            <div className="font-md ">
              <h2 className="text-xl pt-4 dark:text-black/70 font-bold">
                {" "}
                {productName}
              </h2>
            </div>

            <div className="flex pt-4 mb-3 text-sm  font-medium justify-between">
              <div>
                <div className=" text-sm font-medium ">
                  Category:
                  <span className="text-black/90  border text-xs p-1 rounded-md bg-gray-100 ml-3">
                    {category}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <h4>{ratings}</h4> <FaRegStar className="text-xl" />
              </div>
            </div>

            <div className="flex pb-4 text-sm mt-2 font-medium items-center ">
              Creation Date:
              <span className="text-black/90   ml-3">
                {new Date(creationDate).toLocaleDateString()}
              </span>
            </div>

            <div className="border-t pb-3">
              <h3 className="text-md mt-2 font-bold">Price: {price}$</h3>
              <p className="text-sm mt-2  font-semibold">
                <span className="font-bold">Description:</span> {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
