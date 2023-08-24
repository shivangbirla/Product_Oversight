import React, { useEffect, useState } from "react";
import img1 from "../assets/shelf1.png";
import img2 from "../assets/shelf2.png";
import img3 from "../assets/shelf3.png";
import { products } from "../data/data";
import { getProducts } from "../api/productRequest";

const Home = ({ searchValue }) => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [mappedProducts, setMappedProducts] = useState([]);

  const handleProductHover = (product) => {
    setHoveredProduct(product);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProducts();
        const data = response.data;
        console.log(data);

        setMappedProducts(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="bg-[#1E1E1E] w-[100vw] h-auto pt-[0vh] flex flex-row">
        <div className="flex flex-col">
          {/* Zone 1 */}
          <div
            className="mt-[20vh] ml-[5vh] w-[500px] h-[300px] relative bg-cover"
            style={{ backgroundImage: `url(${img1})` }}
          >
            {Array.from({ length: 3 }, (_, rowIndex) => (
              <div
                key={rowIndex}
                style={{ top: `${122 + rowIndex * 50}px` }} // Use inline styles for dynamic positioning
                className="absolute left-[7vw] flex space-x-20"
              >
                {mappedProducts
                  .filter(
                    (product) =>
                      product.zone === 1 && product.level === rowIndex + 1
                  )
                  .sort((a, b) => a.rack - b.rack) // Sort products by column value
                  .slice(0, 4) // Only take the first 4 products in each row
                  .map((product) => (
                    <div
                      key={product.product_id}
                      className={`w-[25px] h-[25px] bg-black rounded-lg cursor-pointer ${
                        product.product_name === searchValue
                          ? "bg-green-500"
                          : "bg-black"
                      }`}
                      onMouseEnter={() => handleProductHover(product)}
                      onMouseLeave={() => setHoveredProduct(null)}
                    ></div>
                  ))}
              </div>
            ))}
          </div>
          {/* Zone 2 */}
          <div
            className="mt-[10vh] ml-[5vh] w-[500px] h-[300px] relative bg-cover"
            style={{ backgroundImage: `url(${img1})` }}
          >
            {Array.from({ length: 3 }, (_, rowIndex) => (
              <div
                key={rowIndex}
                style={{ top: `${122 + rowIndex * 50}px` }} // Use inline styles for dynamic positioning
                className="absolute left-[7vw] flex space-x-20"
              >
                {mappedProducts
                  .filter(
                    (product) =>
                      product.zone === 2 && product.level === rowIndex + 1
                  )
                  .sort((a, b) => a.rack - b.rack) // Sort products by column value
                  .slice(0, 4) // Only take the first 4 products in each row
                  .map((product) => (
                    <div
                      key={product.product_id}
                      className={`w-[25px] h-[25px] bg-black rounded-lg cursor-pointer ${
                        product.product_name === searchValue
                          ? "bg-green-500"
                          : "bg-black"
                      }`}
                      onMouseEnter={() => handleProductHover(product)}
                      onMouseLeave={() => setHoveredProduct(null)}
                    ></div>
                  ))}
              </div>
            ))}
          </div>
          {/* Zone 3 */}
          <div
            className="mt-[10vh] ml-[5vh] w-[400px] h-[500px] relative bg-cover"
            style={{ backgroundImage: `url(${img2})` }}
          >
            {Array.from({ length: 3 }, (_, rowIndex) => (
              <div
                key={rowIndex}
                style={{ top: `${180 + rowIndex * 60}px` }} // Use inline styles for dynamic positioning
                className="absolute left-[9vw] flex space-x-20"
              >
                {mappedProducts
                  .filter(
                    (product) =>
                      product.zone === 3 && product.level === rowIndex + 1
                  )
                  .sort((a, b) => a.rack - b.rack) // Sort products by column value
                  .slice(0, 2) // Only take the first 4 products in each row
                  .map((product) => (
                    <div
                      key={product.product_id}
                      className={`w-[25px] h-[25px] bg-black rounded-lg cursor-pointer ${
                        product.product_name === searchValue
                          ? "bg-green-500"
                          : "bg-black"
                      }`}
                      onMouseEnter={() => handleProductHover(product)}
                      onMouseLeave={() => setHoveredProduct(null)}
                    ></div>
                  ))}
              </div>
            ))}
          </div>
          {/* Zone 4 */}
          <div
            className="mt-[10vh] ml-[5vh] w-[400px] h-[500px] relative bg-cover"
            style={{ backgroundImage: `url(${img2})` }}
          >
            {Array.from({ length: 3 }, (_, rowIndex) => (
              <div
                key={rowIndex}
                style={{ top: `${180 + rowIndex * 60}px` }} // Use inline styles for dynamic positioning
                className="absolute left-[9vw] flex space-x-20"
              >
                {mappedProducts
                  .filter(
                    (product) =>
                      product.zone === 4 && product.level === rowIndex + 1
                  )
                  .sort((a, b) => a.rack - b.rack) // Sort products by column value
                  .slice(0, 2) // Only take the first 4 products in each row
                  .map((product) => (
                    <div
                      key={product.product_id}
                      className={`w-[25px] h-[25px] bg-black rounded-lg cursor-pointer ${
                        product.product_name === searchValue
                          ? "bg-green-500"
                          : "bg-black"
                      }`}
                      onMouseEnter={() => handleProductHover(product)}
                      onMouseLeave={() => setHoveredProduct(null)}
                    ></div>
                  ))}
              </div>
            ))}
          </div>
          {/* Zone 5 */}
          <div
            className="mt-[10vh] ml-[5vh] w-[400px] h-[500px] relative bg-cover"
            style={{ backgroundImage: `url(${img2})` }}
          >
            {Array.from({ length: 3 }, (_, rowIndex) => (
              <div
                key={rowIndex}
                style={{ top: `${180 + rowIndex * 60}px` }} // Use inline styles for dynamic positioning
                className="absolute left-[9vw] flex space-x-20"
              >
                {mappedProducts
                  .filter(
                    (product) =>
                      product.zone === 5 && product.level === rowIndex + 1
                  )
                  .sort((a, b) => a.rack - b.rack) // Sort products by column value
                  .slice(0, 2) // Only take the first 4 products in each row
                  .map((product) => (
                    <div
                      key={product.product_id}
                      className={`w-[25px] h-[25px] bg-black rounded-lg cursor-pointer ${
                        product.product_name === searchValue
                          ? "bg-green-500"
                          : "bg-black"
                      }`}
                      onMouseEnter={() => handleProductHover(product)}
                      onMouseLeave={() => setHoveredProduct(null)}
                    ></div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        <div className="">
          {hoveredProduct && (
            <div className="fixed top-[40vh] left-[60vw] transform-translate-[-50% -50%] bg-[#3B3835] p-4 rounded-md shadow-md">
              <h2 className="text-lg font-semibold">
                Product Name: {hoveredProduct.product_name}
              </h2>
              <p>Product Details: {hoveredProduct.quantity}</p>
              <p>Description: {hoveredProduct.description}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
