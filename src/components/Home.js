import React, { useState } from "react";
import img from "../assets/shelf.png";
import { products } from "../data/data";

const Home = ({ searchValue }) => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const handleProductHover = (product) => {
    setHoveredProduct(product);
  };

  return (
    <>
      <div className="bg-[#1E1E1E] w-[100vw] h-[100vh] pt-[0vh] flex flex-row">
        <div className="relative page-container ">
          {/* <img src={img} className="w-[33vw] h-[40vh]" /> */}
          {Array.from({ length: 4 }, (_, rowIndex) => (
            <div
              key={rowIndex}
              className={`absolute top-${10 + rowIndex * 10} left-[10vw]`} // Adjusted top positioning
            >
              <div className="flex space-x-3 border-b-2">
                {products
                  .filter((product) => product.rowNo === rowIndex + 1)
                  .slice(0, 4) // Only take the first 4 products in each row
                  .map((product) => (
                    <div
                      key={product.productId}
                      className={`w-[25px] h-[25px] bg-black rounded-lg cursor-pointer ${
                        product.productName === searchValue // Compare with searchValue
                          ? "bg-green-500"
                          : "bg-black"
                      }`}
                      onMouseEnter={() => handleProductHover(product)}
                      onMouseLeave={() => setHoveredProduct(null)}
                    ></div>
                  ))}
              </div>
            </div>
          ))}
        </div>
        <div className="">
          {hoveredProduct && (
            <div className="absolute top-[50vh] left-[50vw] transform-translate-[-50% -50%] bg-[#3B3835] p-4 rounded-md shadow-md">
              <h2 className="text-lg font-semibold">
                Product Name: {hoveredProduct.productName}
              </h2>
              <p>Product Details: {hoveredProduct.productDetails}</p>
              <p>Description: {hoveredProduct.description}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
