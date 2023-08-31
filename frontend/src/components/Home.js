import React, { useEffect, useState } from "react";
import img_1 from "../assets/img_1.png";
import img_2 from "../assets/img_2.png";
import img_3 from "../assets/img_3.png";
import img_4 from "../assets/img_4.png";
import img_5 from "../assets/img_5.png";
import { products } from "../data/data";
import { getProducts } from "../api/productRequest";

const Home = ({ searchValue }) => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const handleProductHover = (product) => {
    setHoveredProduct(product);
  };
  const handleProductLeave = () => {
    setHoveredProduct(null);
  };

  const [mappedProducts, setMappedProducts] = useState([]);

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

  const [hovered1PairIndex, setHovered1PairIndex] = useState(null);
  const [hovered2PairIndex, setHovered2PairIndex] = useState(null);
  const [hovered3PairIndex, setHovered3PairIndex] = useState(null);
  const [hovered4PairIndex, setHovered4PairIndex] = useState(null);
  const [hovered5PairIndex, setHovered5PairIndex] = useState(null);

  return (
    <>
      <div className="bg-[#1E1E1E] w-[100vw] h-[100vh] sm:h-[100vh] md:h-[150vh]">
        <div className="flex flex-row-reverse md:flex-row-reverse justify-around md:justify-between">
          <div className="flex flex-col">
            {/* Zone 1 */}
            <div
              className="mt-[23vh] md:mt-[42vh] w-[350px] h-[250px] md:w-[220px] md:h-[140px] relative bg-cover"
              style={{ backgroundImage: `url(${img_1})` }}
            >
              {Array.from({ length: 3 }, (_, rowIndex) => (
                <div
                  key={rowIndex}
                  className="absolute flex flex-row md:left-[5vw] left-[2.5vw] space-x-5 md:space-x-2.5"
                  style={{
                    top:
                      window.innerWidth >= 767
                        ? `${82 + rowIndex * 35}px`
                        : `${50 + rowIndex * 22}px`,
                  }}
                >
                  {mappedProducts
                    .filter(
                      (product) =>
                        product.zone === 1 && product.level === rowIndex + 1
                    )
                    .sort((a, b) => a.rack - b.rack)
                    .reduce((pairs, product, index, array) => {
                      if (index % 4 === 0) {
                        pairs.push(array.slice(index, index + 4));
                      }
                      return pairs;
                    }, [])
                    .slice(0, 8) // Limit to 8 pairs for 4 divs
                    .map((pair, index) => (
                      <div
                        key={index}
                        className={`product-pair w-[20px] h-[20px] md:w-[15px] md:h-[15px] bg-[#373535] rounded-lg cursor-pointer ${
                          pair[0].product_name === searchValue ||
                          pair[1].product_name === searchValue ||
                          pair[2].product_name === searchValue ||
                          pair[3].product_name === searchValue
                            ? "bg-green-500"
                            : "bg-[#373535]"
                        }`}
                        onMouseEnter={() => setHovered1PairIndex(index)}
                        onMouseLeave={() => setHovered1PairIndex(null)}
                      >
                        {hovered1PairIndex === index && (
                          <div>
                            <div className="product-details fixed top-[12vh] left-[3vw] w-[285px] md:top-[10vh] md:left-[5vw] md:w-[160px] bg-[#3B3835] p-4 rounded-md shadow-md">
                              <h2 className="text-lg md:text-[12px] font-semibold">
                                Product: {pair[0].product_name}
                              </h2>
                              <p className="md:text-[10px]">
                                Quantity: {pair[0].quantity}
                              </p>
                              <p className="md:text-[10px]">
                                Description: {pair[0].description}
                              </p>
                            </div>
                            <div className="product-details fixed top-[12vh] left-[26.5vw] w-[285px] md:top-[10vh] md:left-[50vw] md:w-[160px] bg-[#3B3835] p-4 rounded-md shadow-md">
                              <h2 className="text-lg md:text-[12px] font-semibold">
                                Product: {pair[1].product_name}
                              </h2>
                              <p className="md:text-[10px]">
                                Quantity: {pair[1].quantity}
                              </p>
                              <p className="md:text-[10px]">
                                Description: {pair[1].description}
                              </p>
                            </div>
                            <div className="product-details fixed top-[12vh] left-[50.5vw] w-[285px] md:top-[30vh] md:left-[5vw] md:w-[160px] bg-[#3B3835] p-4 rounded-md shadow-md">
                              <h2 className="text-lg md:text-[12px] font-semibold">
                                Product: {pair[2].product_name}
                              </h2>
                              <p className="md:text-[10px]">
                                Quantity: {pair[2].quantity}
                              </p>
                              <p className="md:text-[10px]">
                                Description: {pair[2].description}
                              </p>
                            </div>
                            <div className="product-details fixed top-[12vh] left-[74.5vw] w-[285px] md:top-[30vh] md:left-[50vw] md:w-[160px] bg-[#3B3835] p-4 rounded-md shadow-md">
                              <h2 className="text-lg md:text-[12px] font-semibold">
                                Product: {pair[3].product_name}
                              </h2>
                              <p className="md:text-[10px]">
                                Quantity: {pair[3].quantity}
                              </p>
                              <p className="md:text-[10px]">
                                Description: {pair[3].description}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              ))}
            </div>
            {/* Zone 2 */}
            <div
              className="w-[350px] h-[250px] md:w-[220px] md:h-[140px] relative bg-cover"
              style={{ backgroundImage: `url(${img_2})` }}
            >
              {Array.from({ length: 3 }, (_, rowIndex) => (
                <div
                  key={rowIndex}
                  className="absolute flex flex-row md:left-[5vw] left-[2.5vw] space-x-5 md:space-x-2.5"
                  style={{
                    top:
                      window.innerWidth >= 767
                        ? `${82 + rowIndex * 35}px`
                        : `${50 + rowIndex * 22}px`,
                  }}
                >
                  {mappedProducts
                    .filter(
                      (product) =>
                        product.zone === 2 && product.level === rowIndex + 1
                    )
                    .sort((a, b) => a.rack - b.rack)
                    .reduce((pairs, product, index, array) => {
                      if (index % 4 === 0) {
                        pairs.push(array.slice(index, index + 4));
                      }
                      return pairs;
                    }, [])
                    .slice(0, 8) // Limit to 8 pairs for 4 divs
                    .map((pair, index) => (
                      <div
                        key={index}
                        className={`product-pair w-[20px] h-[20px] md:w-[15px] md:h-[15px] bg-[#373535] rounded-lg cursor-pointer ${
                          pair[0].product_name === searchValue ||
                          pair[1].product_name === searchValue ||
                          pair[2].product_name === searchValue ||
                          pair[3].product_name === searchValue
                            ? "bg-green-500"
                            : "bg-[#373535]"
                        }`}
                        onMouseEnter={() => setHovered2PairIndex(index)}
                        onMouseLeave={() => setHovered2PairIndex(null)}
                      >
                        {hovered2PairIndex === index && (
                          <div>
                            <div className="product-details fixed top-[12vh] left-[3vw] w-[285px] md:top-[10vh] md:left-[5vw] md:w-[160px] bg-[#3B3835] p-4 rounded-md shadow-md">
                              <h2 className="text-lg md:text-[12px] font-semibold">
                                Product: {pair[0].product_name}
                              </h2>
                              <p className="md:text-[10px]">
                                Quantity: {pair[0].quantity}
                              </p>
                              <p className="md:text-[10px]">
                                Description: {pair[0].description}
                              </p>
                            </div>
                            <div className="product-details fixed top-[12vh] left-[26.5vw] w-[285px] md:top-[10vh] md:left-[50vw] md:w-[160px] bg-[#3B3835] p-4 rounded-md shadow-md">
                              <h2 className="text-lg md:text-[12px] font-semibold">
                                Product: {pair[1].product_name}
                              </h2>
                              <p className="md:text-[10px]">
                                Quantity: {pair[1].quantity}
                              </p>
                              <p className="md:text-[10px]">
                                Description: {pair[1].description}
                              </p>
                            </div>
                            <div className="product-details fixed top-[12vh] left-[50.5vw] w-[285px] md:top-[30vh] md:left-[5vw] md:w-[160px] bg-[#3B3835] p-4 rounded-md shadow-md">
                              <h2 className="text-lg md:text-[12px] font-semibold">
                                Product: {pair[2].product_name}
                              </h2>
                              <p className="md:text-[10px]">
                                Quantity: {pair[2].quantity}
                              </p>
                              <p className="md:text-[10px]">
                                Description: {pair[2].description}
                              </p>
                            </div>
                            <div className="product-details fixed top-[12vh] left-[74.5vw] w-[285px] md:top-[30vh] md:left-[50vw] md:w-[160px] bg-[#3B3835] p-4 rounded-md shadow-md">
                              <h2 className="text-lg md:text-[12px] font-semibold">
                                Product: {pair[3].product_name}
                              </h2>
                              <p className="md:text-[10px]">
                                Quantity: {pair[3].quantity}
                              </p>
                              <p className="md:text-[10px]">
                                Description: {pair[3].description}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              ))}
            </div>
            {/* Zone 3 */}
            {window.innerWidth <= 687 ? (
              <div
                className="md:w-[140px] md:h-[170px] relative bg-cover"
                style={{ backgroundImage: `url(${img_3})` }}
              >
                {Array.from({ length: 3 }, (_, rowIndex) => (
                  <div
                    key={rowIndex}
                    // style={{ top: `${122 + rowIndex * 50}px` }} // Use inline styles for dynamic positioning
                    style={{
                      top:
                        window.innerWidth >= 767
                          ? `${100 + rowIndex * 40}px`
                          : `${60 + rowIndex * 25}px`,
                    }}
                    className="absolute flex flex-row left-[3vw] md:left-[7vw] md:top-[60px] md:space-x-3"
                  >
                    {mappedProducts
                      .filter(
                        (product) =>
                          product.zone === 3 && product.level === rowIndex + 1
                      )
                      .sort((a, b) => a.rack - b.rack)
                      .reduce((pairs, product, index, array) => {
                        if (index % 4 === 0) {
                          pairs.push(array.slice(index, index + 4));
                        }
                        return pairs;
                      }, [])
                      .slice(0, 4) // Limit to 4 pairs for 4 divs
                      .map((pair, index) => (
                        <div
                          key={index}
                          className={`product-pair md:h-[15px] md:w-[15px] bg-[#373535] rounded-lg cursor-pointer ${
                            pair[0].product_name === searchValue ||
                            pair[1].product_name === searchValue ||
                            pair[2].product_name === searchValue ||
                            pair[3].product_name === searchValue
                              ? "bg-green-500"
                              : "bg-[#373535]"
                          }`}
                          onMouseEnter={() => setHovered3PairIndex(index)}
                          onMouseLeave={() => setHovered3PairIndex(null)}
                        >
                          {hovered3PairIndex === index && (
                            <div>
                              <div className="product-details fixed top-[12vh] left-[3vw] w-[285px] md:top-[10vh] md:left-[5vw] md:w-[160px] bg-[#3B3835] p-4 rounded-md shadow-md">
                                <h2 className="text-lg md:text-[12px] font-semibold">
                                  Product: {pair[0].product_name}
                                </h2>
                                <p className="md:text-[10px]">
                                  Quantity: {pair[0].quantity}
                                </p>
                                <p className="md:text-[10px]">
                                  Description: {pair[0].description}
                                </p>
                              </div>
                              <div className="product-details fixed top-[12vh] left-[26.5vw] w-[285px] md:top-[10vh] md:left-[50vw] md:w-[160px] bg-[#3B3835] p-4 rounded-md shadow-md">
                                <h2 className="text-lg md:text-[12px] font-semibold">
                                  Product: {pair[1].product_name}
                                </h2>
                                <p className="md:text-[10px]">
                                  Quantity: {pair[1].quantity}
                                </p>
                                <p className="md:text-[10px]">
                                  Description: {pair[1].description}
                                </p>
                              </div>
                              <div className="product-details fixed top-[12vh] left-[50.5vw] w-[285px] md:top-[30vh] md:left-[5vw] md:w-[160px] bg-[#3B3835] p-4 rounded-md shadow-md">
                                <h2 className="text-lg md:text-[12px] font-semibold">
                                  Product: {pair[2].product_name}
                                </h2>
                                <p className="md:text-[10px]">
                                  Quantity: {pair[2].quantity}
                                </p>
                                <p className="md:text-[10px]">
                                  Description: {pair[2].description}
                                </p>
                              </div>
                              <div className="product-details fixed top-[12vh] left-[74.5vw] w-[285px] md:top-[30vh] md:left-[50vw] md:w-[160px] bg-[#3B3835] p-4 rounded-md shadow-md">
                                <h2 className="text-lg md:text-[12px] font-semibold">
                                  Product: {pair[3].product_name}
                                </h2>
                                <p className="md:text-[10px]">
                                  Quantity: {pair[3].quantity}
                                </p>
                                <p className="md:text-[10px]">
                                  Description: {pair[3].description}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            ) : (
              <div className="absolute top-[63vh] left-[36.5vw]">
                <div
                  className="relative w-[225px] h-[225px] bg-cover"
                  style={{ backgroundImage: `url(${img_3})` }}
                >
                  {Array.from({ length: 3 }, (_, rowIndex) => (
                    <div
                      key={rowIndex}
                      // style={{ top: `${122 + rowIndex * 50}px` }} // Use inline styles for dynamic positioning
                      style={{
                        top:
                          window.innerWidth >= 767
                            ? `${100 + rowIndex * 40}px`
                            : `${60 + rowIndex * 25}px`,
                      }}
                      className="absolute flex flex-row left-[3vw] md:left-[7vw] space-x-7 md:top-[60px] md:space-x-3"
                    >
                      {mappedProducts
                        .filter(
                          (product) =>
                            product.zone === 3 && product.level === rowIndex + 1
                        )
                        .sort((a, b) => a.rack - b.rack)
                        .reduce((pairs, product, index, array) => {
                          if (index % 4 === 0) {
                            pairs.push(array.slice(index, index + 4));
                          }
                          return pairs;
                        }, [])
                        .slice(0, 4) // Limit to 4 pairs for 4 divs
                        .map((pair, index) => (
                          <div
                            key={index}
                            className={`product-pair w-[20px] h-[20px] md:h-[15px] md:w-[15px] bg-[#373535] rounded-lg cursor-pointer ${
                              pair[0].product_name === searchValue ||
                              pair[1].product_name === searchValue ||
                              pair[2].product_name === searchValue ||
                              pair[3].product_name === searchValue
                                ? "bg-green-500"
                                : "bg-[#373535]"
                            }`}
                            onMouseEnter={() => setHovered3PairIndex(index)}
                            onMouseLeave={() => setHovered3PairIndex(null)}
                          >
                            {hovered3PairIndex === index && (
                              <div>
                                <div className="product-details fixed top-[12vh] left-[3vw] w-[285px] md:top-[10vh] md:left-[5vw] md:w-[160px] bg-[#3B3835] p-4 rounded-md shadow-md">
                                  <h2 className="text-lg md:text-[12px] font-semibold">
                                    Product: {pair[0].product_name}
                                  </h2>
                                  <p className="md:text-[10px]">
                                    Quantity: {pair[0].quantity}
                                  </p>
                                  <p className="md:text-[10px]">
                                    Description: {pair[0].description}
                                  </p>
                                </div>
                                <div className="product-details fixed top-[12vh] left-[26.5vw] w-[285px] md:top-[10vh] md:left-[50vw] md:w-[160px] bg-[#3B3835] p-4 rounded-md shadow-md">
                                  <h2 className="text-lg md:text-[12px] font-semibold">
                                    Product: {pair[1].product_name}
                                  </h2>
                                  <p className="md:text-[10px]">
                                    Quantity: {pair[1].quantity}
                                  </p>
                                  <p className="md:text-[10px]">
                                    Description: {pair[1].description}
                                  </p>
                                </div>
                                <div className="product-details fixed top-[12vh] left-[50.5vw] w-[285px] md:top-[30vh] md:left-[5vw] md:w-[160px] bg-[#3B3835] p-4 rounded-md shadow-md">
                                  <h2 className="text-lg md:text-[12px] font-semibold">
                                    Product: {pair[2].product_name}
                                  </h2>
                                  <p className="md:text-[10px]">
                                    Quantity: {pair[2].quantity}
                                  </p>
                                  <p className="md:text-[10px]">
                                    Description: {pair[2].description}
                                  </p>
                                </div>
                                <div className="product-details fixed top-[12vh] left-[74.5vw] w-[285px] md:top-[30vh] md:left-[50vw] md:w-[160px] bg-[#3B3835] p-4 rounded-md shadow-md">
                                  <h2 className="text-lg md:text-[12px] font-semibold">
                                    Product: {pair[3].product_name}
                                  </h2>
                                  <p className="md:text-[10px]">
                                    Quantity: {pair[3].quantity}
                                  </p>
                                  <p className="md:text-[10px]">
                                    Description: {pair[3].description}
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col">
            {/* Zone 4 */}
            <div
              className="md:mt-[42vh] mt-[23vh] w-[225px] h-[225px] md:w-[140px] md:h-[170px] relative bg-cover"
              style={{ backgroundImage: `url(${img_4})` }}
            >
              {Array.from({ length: 3 }, (_, rowIndex) => (
                <div
                  key={rowIndex}
                  // style={{ top: `${122 + rowIndex * 50}px` }} // Use inline styles for dynamic positioning
                  // style={{
                  //   top: `${100 + rowIndex * 40}px`,
                  //   "@media (max-width: 767px)": {
                  //     top: `${50 + rowIndex * 50}px`, // Customize this value for screens with max-width of 767px
                  //   },
                  // }}
                  style={{
                    top:
                      window.innerWidth >= 767
                        ? `${100 + rowIndex * 40}px`
                        : `${60 + rowIndex * 25}px`,
                  }}
                  className="absolute flex flex-row left-[3vw] md:left-[7vw] space-x-7 md:top-[60px] md:space-x-3"
                >
                  {mappedProducts
                    .filter(
                      (product) =>
                        product.zone === 4 && product.level === rowIndex + 1
                    )
                    .sort((a, b) => a.rack - b.rack)
                    .reduce((pairs, product, index, array) => {
                      if (index % 4 === 0) {
                        pairs.push(array.slice(index, index + 4));
                      }
                      return pairs;
                    }, [])
                    .slice(0, 4) // Limit to 4 pairs for 4 divs
                    .map((pair, index) => (
                      <div
                        key={index}
                        className={`product-pair w-[20px] h-[20px] md:h-[15px] md:w-[15px] bg-[#373535] rounded-lg cursor-pointer ${
                          pair[0].product_name === searchValue ||
                          pair[1].product_name === searchValue ||
                          pair[2].product_name === searchValue ||
                          pair[3].product_name === searchValue
                            ? "bg-green-500"
                            : "bg-[#373535]"
                        }`}
                        onMouseEnter={() => setHovered4PairIndex(index)}
                        onMouseLeave={() => setHovered4PairIndex(null)}
                      >
                        {hovered4PairIndex === index && (
                          <div>
                            <div className="product-details fixed top-[12vh] left-[3vw] w-[285px] md:top-[10vh] md:left-[5vw] md:w-[160px] bg-[#3B3835] p-4 rounded-md shadow-md">
                              <h2 className="text-lg md:text-[12px] font-semibold">
                                Product: {pair[0].product_name}
                              </h2>
                              <p className="md:text-[10px]">
                                Quantity: {pair[0].quantity}
                              </p>
                              <p className="md:text-[10px]">
                                Description: {pair[0].description}
                              </p>
                            </div>
                            <div className="product-details fixed top-[12vh] left-[26.5vw] w-[285px] md:top-[10vh] md:left-[50vw] md:w-[160px] bg-[#3B3835] p-4 rounded-md shadow-md">
                              <h2 className="text-lg md:text-[12px] font-semibold">
                                Product: {pair[1].product_name}
                              </h2>
                              <p className="md:text-[10px]">
                                Quantity: {pair[1].quantity}
                              </p>
                              <p className="md:text-[10px]">
                                Description: {pair[1].description}
                              </p>
                            </div>
                            <div className="product-details fixed top-[12vh] left-[50.5vw] w-[285px] md:top-[30vh] md:left-[5vw] md:w-[160px] bg-[#3B3835] p-4 rounded-md shadow-md">
                              <h2 className="text-lg md:text-[12px] font-semibold">
                                Product: {pair[2].product_name}
                              </h2>
                              <p className="md:text-[10px]">
                                Quantity: {pair[2].quantity}
                              </p>
                              <p className="md:text-[10px]">
                                Description: {pair[2].description}
                              </p>
                            </div>
                            <div className="product-details fixed top-[12vh] left-[74.5vw] w-[285px] md:top-[30vh] md:left-[50vw] md:w-[160px] bg-[#3B3835] p-4 rounded-md shadow-md">
                              <h2 className="text-lg md:text-[12px] font-semibold">
                                Product: {pair[3].product_name}
                              </h2>
                              <p className="md:text-[10px]">
                                Quantity: {pair[3].quantity}
                              </p>
                              <p className="md:text-[10px]">
                                Description: {pair[3].description}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              ))}
            </div>
            {/* Zone 5 */}
            <div
              className="w-[225px] h-[225px] md:w-[140px] md:h-[170px] relative bg-cover"
              style={{ backgroundImage: `url(${img_5})` }}
            >
              {Array.from({ length: 3 }, (_, rowIndex) => (
                <div
                  key={rowIndex}
                  // style={{ top: `${122 + rowIndex * 50}px` }} // Use inline styles for dynamic positioning
                  style={{
                    top:
                      window.innerWidth >= 767
                        ? `${100 + rowIndex * 40}px`
                        : `${60 + rowIndex * 25}px`,
                  }}
                  className="absolute flex flex-row left-[3vw] md:left-[7vw] space-x-7 md:top-[60px] md:space-x-3"
                >
                  {mappedProducts
                    .filter(
                      (product) =>
                        product.zone === 5 && product.level === rowIndex + 1
                    )
                    .sort((a, b) => a.rack - b.rack)
                    .reduce((pairs, product, index, array) => {
                      if (index % 4 === 0) {
                        pairs.push(array.slice(index, index + 4));
                      }
                      return pairs;
                    }, [])
                    .slice(0, 4) // Limit to 4 pairs for 4 divs
                    .map((pair, index) => (
                      <div
                        key={index}
                        className={`product-pair w-[20px] h-[20px] md:h-[15px] md:w-[15px] bg-[#373535] rounded-lg cursor-pointer ${
                          pair[0].product_name === searchValue ||
                          pair[1].product_name === searchValue ||
                          pair[2].product_name === searchValue ||
                          pair[3].product_name === searchValue
                            ? "bg-green-500"
                            : "bg-[#373535]"
                        }`}
                        onMouseEnter={() => setHovered5PairIndex(index)}
                        onMouseLeave={() => setHovered5PairIndex(null)}
                      >
                        {hovered5PairIndex === index && (
                          <div>
                            <div className="product-details fixed top-[12vh] left-[3vw] w-[285px] md:top-[10vh] md:left-[5vw] md:w-[160px] bg-[#3B3835] p-4 rounded-md shadow-md">
                              <h2 className="text-lg md:text-[12px] font-semibold">
                                Product: {pair[0].product_name}
                              </h2>
                              <p className="md:text-[10px]">
                                Quantity: {pair[0].quantity}
                              </p>
                              <p className="md:text-[10px]">
                                Description: {pair[0].description}
                              </p>
                            </div>
                            <div className="product-details fixed top-[12vh] left-[26.5vw] w-[285px] md:top-[10vh] md:left-[50vw] md:w-[160px] bg-[#3B3835] p-4 rounded-md shadow-md">
                              <h2 className="text-lg md:text-[12px] font-semibold">
                                Product: {pair[1].product_name}
                              </h2>
                              <p className="md:text-[10px]">
                                Quantity: {pair[1].quantity}
                              </p>
                              <p className="md:text-[10px]">
                                Description: {pair[1].description}
                              </p>
                            </div>
                            <div className="product-details fixed top-[12vh] left-[50.5vw] w-[285px] md:top-[30vh] md:left-[5vw] md:w-[160px] bg-[#3B3835] p-4 rounded-md shadow-md">
                              <h2 className="text-lg md:text-[12px] font-semibold">
                                Product: {pair[2].product_name}
                              </h2>
                              <p className="md:text-[10px]">
                                Quantity: {pair[2].quantity}
                              </p>
                              <p className="md:text-[10px]">
                                Description: {pair[2].description}
                              </p>
                            </div>
                            <div className="product-details fixed top-[12vh] left-[74.5vw] w-[285px] md:top-[30vh] md:left-[50vw] md:w-[160px] bg-[#3B3835] p-4 rounded-md shadow-md">
                              <h2 className="text-lg md:text-[12px] font-semibold">
                                Product: {pair[3].product_name}
                              </h2>
                              <p className="md:text-[10px]">
                                Quantity: {pair[3].quantity}
                              </p>
                              <p className="md:text-[10px]">
                                Description: {pair[3].description}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="">
          {hoveredProduct &&
            hoveredProduct.map(
              (hoveredP, i) =>
                hoveredP && (
                  <div
                    className="fixed top-[40vh] left-[60vw] transform-translate-[-50% -50%] bg-[#3B3835] p-4 rounded-md shadow-md"
                    key={i}
                  >
                    <h2 className="text-lg font-semibold">
                      Product Name: {hoveredP.product_name}
                    </h2>
                    <p>Product Details: {hoveredP.quantity}</p>
                    <p>Description: {hoveredP.description}</p>
                  </div>
                )
            )}
        </div>
      </div>
    </>
  );
};

export default Home;
