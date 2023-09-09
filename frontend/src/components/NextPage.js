import React from "react";
import img_6 from "../assets/img_6.png";
import img_7 from "../assets/img_7.png";
import { useState, useEffect } from "react";
import { getProducts } from "../api/productRequest";

const NextPage = ({ searchValue }) => {
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

  const arr79 = [];

  mappedProducts.forEach((product) => {
    if (product.Zone === "Zone6-1-79" && product.Box === "B-79") {
      arr79.push(product);
    }
  });

  // console.log(arr79);
  // console.log(arr79[0].Box);

  const [isDiv79Visible, setIsDiv79Visible] = useState(false);

  const toggleDiv79Visibility = () => {
    setIsDiv79Visible(!isDiv79Visible);
  };

  const arr80 = [];

  mappedProducts.forEach((product) => {
    if (product.Zone === "Zone6-1-80" && product.Box === "B-80") {
      arr80.push(product);
    }
  });

  const [isDiv80Visible, setIsDiv80Visible] = useState(false);

  const toggleDiv80Visibility = () => {
    setIsDiv80Visible(!isDiv80Visible);
  };

  const arr81 = [];

  mappedProducts.forEach((product) => {
    if (product.Zone === "Zone6-1-81" && product.Box === "B-81") {
      arr81.push(product);
    }
  });

  const [isDiv81Visible, setIsDiv81Visible] = useState(false);

  const toggleDiv81Visibility = () => {
    setIsDiv81Visible(!isDiv81Visible);
  };

  const arr82 = [];

  mappedProducts.forEach((product) => {
    if (product.Zone === "Zone6-2-82" && product.Box === "B-82") {
      arr82.push(product);
    }
  });

  const [isDiv82Visible, setIsDiv82Visible] = useState(false);

  const toggleDiv82Visibility = () => {
    setIsDiv82Visible(!isDiv82Visible);
  };

  const arr83 = [];

  mappedProducts.forEach((product) => {
    if (product.Zone === "Zone6-2-83" && product.Box === "B-83") {
      arr83.push(product);
    }
  });

  const [isDiv83Visible, setIsDiv83Visible] = useState(false);

  const toggleDiv83Visibility = () => {
    setIsDiv83Visible(!isDiv83Visible);
  };

  const arr84 = [];

  mappedProducts.forEach((product) => {
    if (product.Zone === "Zone6-3-84" && product.Box === "B-84") {
      arr84.push(product);
    }
  });

  const [isDiv84Visible, setIsDiv84Visible] = useState(false);

  const toggleDiv84Visibility = () => {
    setIsDiv84Visible(!isDiv84Visible);
  };

  const arr85 = [];

  mappedProducts.forEach((product) => {
    if (product.Zone === "Zone6-3-85" && product.Box === "B-85") {
      arr85.push(product);
    }
  });

  const [isDiv85Visible, setIsDiv85Visible] = useState(false);

  const toggleDiv85Visibility = () => {
    setIsDiv85Visible(!isDiv85Visible);
  };
  const arr86 = [];

  mappedProducts.forEach((product) => {
    if (product.Zone === "Zone7-1-86" && product.Box === "B-86") {
      arr86.push(product);
    }
  });

  const [isDiv86Visible, setIsDiv86Visible] = useState(false);

  const toggleDiv86Visibility = () => {
    setIsDiv86Visible(!isDiv86Visible);
  };
  const arr87 = [];

  mappedProducts.forEach((product) => {
    if (product.Zone === "Zone7-2-87" && product.Box === "B-87") {
      arr87.push(product);
    }
  });

  const [isDiv87Visible, setIsDiv87Visible] = useState(false);

  const toggleDiv87Visibility = () => {
    setIsDiv87Visible(!isDiv87Visible);
  };
  const arr88 = [];

  mappedProducts.forEach((product) => {
    if (product.Zone === "Zone7-3-88" && product.Box === "B-88") {
      arr88.push(product);
    }
  });

  const [isDiv88Visible, setIsDiv88Visible] = useState(false);

  const toggleDiv88Visibility = () => {
    setIsDiv88Visible(!isDiv88Visible);
  };

  return (
    <>
      <div className="bg-[#1E1E1E] w-[100vw] h-[100vh]">
        <div
          className="w-[200px] h-[300px] mt-[5vh] ml-[10vw] bg-cover relative"
          style={{ backgroundImage: `url(${img_6})` }}
        >
          <div
            className={`${
              arr79.length >= 1 ? "visible" : "hidden"
            } absolute top-[16vh] left-[4vw] w-[18px] h-[18px] bg-[#828282] rounded-md cursor-pointer text-sm ${
              arr79.some(
                (product) =>
                  product.MATERIAL_DESC === searchValue ||
                  product.PART_NO === searchValue
              )
                ? "bg-green-500"
                : "bg-[#373535]"
            }`}
            onClick={toggleDiv79Visibility}
          >
            {/* {arr79[0]?.Box ? arr79[0].Box.replace("B-", "") : ""} */}
          </div>
          {isDiv79Visible && (
            <div className="absolute left-[40vw] top-[10vh] w-[46vw] h-[80vh] overflow-y-auto">
              <table className="min-w-full bg-[#27211c] text-white rounded-2xl shadow-md">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      MACH_DESC
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      MAKER_DESC
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      MATERIAL
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      MATERIAL_DESC
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      PART_NO
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      ROB
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {arr79.map((product, index) => (
                    <tr
                      key={index}
                      className={
                        index % 2 === 0 ? "bg-[#2C2C2C]" : "bg-[#262626]"
                      }
                    >
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.MACH_DESC}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.MAKER_DESC}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.MATERIAL}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.MATERIAL_DESC}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.PART_NO}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.ROB}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <div
            className={`${
              arr80.length >= 1 ? "visible" : "hidden"
            } absolute top-[13vh] left-[4vw] w-[18px] h-[18px] bg-[#828282] rounded-md cursor-pointer ${
              arr80.some(
                (product) =>
                  product.MATERIAL_DESC === searchValue ||
                  product.PART_NO === searchValue
              )
                ? "bg-green-500"
                : "bg-[#373535]"
            }`}
            onClick={toggleDiv80Visibility}
          >
            {/* {arr80[0].Box.replace(/^B-/i, "")} */}
          </div>
          {isDiv80Visible && (
            <div className="absolute left-[40vw] top-[10vh] w-[46vw] h-[80vh] overflow-y-auto">
              <table className="min-w-full bg-[#27211c] text-white rounded-2xl shadow-md">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      MACH_DESC
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      MAKER_DESC
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      MATERIAL
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      MATERIAL_DESC
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      PART_NO
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      ROB
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {arr80.map((product, index) => (
                    <tr
                      key={index}
                      className={
                        index % 2 === 0 ? "bg-[#2C2C2C]" : "bg-[#262626]"
                      }
                    >
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.MACH_DESC}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.MAKER_DESC}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.MATERIAL}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.MATERIAL_DESC}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.PART_NO}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.ROB}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <div
            className={`${
              arr81.length >= 1 ? "visible" : "hidden"
            } absolute top-[16vh] left-[8vw] w-[18px] h-[18px] bg-[#828282] rounded-md cursor-pointer ${
              arr81.some(
                (product) =>
                  product.MATERIAL_DESC === searchValue ||
                  product.PART_NO === searchValue
              )
                ? "bg-green-500"
                : "bg-[#373535]"
            }`}
            onClick={toggleDiv81Visibility}
          >
            {/* {arr81[0].Box.replace(/^B-/i, "")} */}
          </div>
          {isDiv81Visible && (
            <div className="absolute left-[40vw] top-[10vh] w-[46vw] h-[80vh] overflow-y-auto">
              <table className="min-w-full bg-[#27211c] text-white rounded-2xl shadow-md">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      MACH_DESC
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      MAKER_DESC
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      MATERIAL
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      MATERIAL_DESC
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      PART_NO
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      ROB
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {arr81.map((product, index) => (
                    <tr
                      key={index}
                      className={
                        index % 2 === 0 ? "bg-[#2C2C2C]" : "bg-[#262626]"
                      }
                    >
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.MACH_DESC}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.MAKER_DESC}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.MATERIAL}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.MATERIAL_DESC}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.PART_NO}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.ROB}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <div
            className={`${
              arr82.length >= 1 ? "visible" : "hidden"
            } absolute top-[22vh] left-[4vw] w-[18px] h-[18px] bg-[#828282] rounded-md cursor-pointer ${
              arr82.some(
                (product) =>
                  product.MATERIAL_DESC === searchValue ||
                  product.PART_NO === searchValue
              )
                ? "bg-green-500"
                : "bg-[#373535]"
            }`}
            onClick={toggleDiv82Visibility}
          ></div>
          {isDiv82Visible && (
            <div className="absolute left-[40vw] top-[10vh] w-[46vw] h-[80vh] overflow-y-auto">
              <table className="min-w-full bg-[#27211c] text-white rounded-2xl shadow-md">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      MACH_DESC
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      MAKER_DESC
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      MATERIAL
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      MATERIAL_DESC
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      PART_NO
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      ROB
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {arr82.map((product, index) => (
                    <tr
                      key={index}
                      className={
                        index % 2 === 0 ? "bg-[#2C2C2C]" : "bg-[#262626]"
                      }
                    >
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.MACH_DESC}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.MAKER_DESC}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.MATERIAL}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.MATERIAL_DESC}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.PART_NO}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.ROB}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <div
            className={`${
              arr83.length >= 1 ? "visible" : "hidden"
            } absolute top-[22vh] left-[8vw] w-[18px] h-[18px] bg-[#828282] rounded-md cursor-pointer ${
              arr83.some(
                (product) =>
                  product.MATERIAL_DESC === searchValue ||
                  product.PART_NO === searchValue
              )
                ? "bg-green-500"
                : "bg-[#373535]"
            }`}
            onClick={toggleDiv83Visibility}
          ></div>
          {isDiv83Visible && (
            <div className="absolute left-[40vw] top-[10vh] w-[46vw] h-[80vh] overflow-y-auto">
              <table className="min-w-full bg-[#27211c] text-white rounded-2xl shadow-md">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      MACH_DESC
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      MAKER_DESC
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      MATERIAL
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      MATERIAL_DESC
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      PART_NO
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      ROB
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {arr83.map((product, index) => (
                    <tr
                      key={index}
                      className={
                        index % 2 === 0 ? "bg-[#2C2C2C]" : "bg-[#262626]"
                      }
                    >
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.MACH_DESC}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.MAKER_DESC}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.MATERIAL}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.MATERIAL_DESC}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.PART_NO}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.ROB}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <div
            className={`${
              arr84.length >= 1 ? "visible" : "hidden"
            } absolute top-[28.5vh] left-[4vw] w-[18px] h-[18px] bg-[#828282] rounded-md cursor-pointer ${
              arr84.some(
                (product) =>
                  product.MATERIAL_DESC === searchValue ||
                  product.PART_NO === searchValue
              )
                ? "bg-green-500"
                : "bg-[#373535]"
            }`}
            onClick={toggleDiv84Visibility}
          ></div>
          {isDiv84Visible && (
            <div className="absolute left-[40vw] top-[10vh] w-[46vw] h-[80vh] overflow-y-auto">
              <table className="min-w-full bg-[#27211c] text-white rounded-2xl shadow-md">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      MACH_DESC
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      MAKER_DESC
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      MATERIAL
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      MATERIAL_DESC
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      PART_NO
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      ROB
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {arr84.map((product, index) => (
                    <tr
                      key={index}
                      className={
                        index % 2 === 0 ? "bg-[#2C2C2C]" : "bg-[#262626]"
                      }
                    >
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.MACH_DESC}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.MAKER_DESC}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.MATERIAL}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.MATERIAL_DESC}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.PART_NO}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.ROB}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <div
            className={`${
              arr85.length >= 1 ? "visible" : "hidden"
            } absolute top-[28.5vh] left-[8vw] w-[18px] h-[18px] bg-[#828282] rounded-md cursor-pointer ${
              arr85.some(
                (product) =>
                  product.MATERIAL_DESC === searchValue ||
                  product.PART_NO === searchValue
              )
                ? "bg-green-500"
                : "bg-[#373535]"
            }`}
            onClick={toggleDiv85Visibility}
          ></div>
          {isDiv85Visible && (
            <div className="absolute left-[40vw] top-[10vh] w-[46vw] h-[80vh] overflow-y-auto">
              <table className="min-w-full bg-[#27211c] text-white rounded-2xl shadow-md">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      MACH_DESC
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      MAKER_DESC
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      MATERIAL
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      MATERIAL_DESC
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      PART_NO
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      ROB
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {arr85.map((product, index) => (
                    <tr
                      key={index}
                      className={
                        index % 2 === 0 ? "bg-[#2C2C2C]" : "bg-[#262626]"
                      }
                    >
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.MACH_DESC}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.MAKER_DESC}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.MATERIAL}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.MATERIAL_DESC}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.PART_NO}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.ROB}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        <div
          className="w-[200px] h-[300px] mt-[0vh] ml-[10vw] bg-cover relative"
          style={{ backgroundImage: `url(${img_7})` }}
        >
          <div
            className={`${
              arr86.length >= 1 ? "visible" : "hidden"
            } absolute top-[16vh] left-[6vw] w-[18px] h-[18px] bg-[#828282] rounded-md cursor-pointer ${
              arr86.some(
                (product) =>
                  product.MATERIAL_DESC === searchValue ||
                  product.PART_NO === searchValue
              )
                ? "bg-green-500"
                : "bg-[#373535]"
            }`}
            onClick={toggleDiv86Visibility}
          ></div>
          {isDiv86Visible && (
            <div className="absolute left-[40vw] top-[-35vh] w-[46vw] h-[80vh] overflow-y-auto">
              <table className="min-w-full bg-[#27211c] text-white rounded-2xl shadow-md">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      MACH_DESC
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      MAKER_DESC
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      MATERIAL
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      MATERIAL_DESC
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      PART_NO
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      ROB
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {arr86.map((product, index) => (
                    <tr
                      key={index}
                      className={
                        index % 2 === 0 ? "bg-[#2C2C2C]" : "bg-[#262626]"
                      }
                    >
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.MACH_DESC}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.MAKER_DESC}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.MATERIAL}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.MATERIAL_DESC}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.PART_NO}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.ROB}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <div
            className={`${
              arr87.length >= 1 ? "visible" : "hidden"
            } absolute top-[23vh] left-[6vw] w-[18px] h-[18px] bg-[#828282] rounded-md cursor-pointer ${
              arr87.some(
                (product) =>
                  product.MATERIAL_DESC === searchValue ||
                  product.PART_NO === searchValue
              )
                ? "bg-green-500"
                : "bg-[#373535]"
            }`}
            onClick={toggleDiv87Visibility}
          ></div>
          {isDiv87Visible && (
            <div className="absolute left-[40vw] top-[-35vh] w-[46vw] h-[80vh] overflow-y-auto">
              <table className="min-w-full bg-[#27211c] text-white rounded-2xl shadow-md">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      MACH_DESC
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      MAKER_DESC
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      MATERIAL
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      MATERIAL_DESC
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      PART_NO
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      ROB
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {arr87.map((product, index) => (
                    <tr
                      key={index}
                      className={
                        index % 2 === 0 ? "bg-[#2C2C2C]" : "bg-[#262626]"
                      }
                    >
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.MACH_DESC}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.MAKER_DESC}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.MATERIAL}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.MATERIAL_DESC}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.PART_NO}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.ROB}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <div
            className={`${
              arr88.length >= 1 ? "visible" : "hidden"
            } absolute top-[30vh] left-[6vw] w-[18px] h-[18px] bg-[#828282] rounded-md cursor-pointer ${
              arr88.some(
                (product) =>
                  product.MATERIAL_DESC === searchValue ||
                  product.PART_NO === searchValue
              )
                ? "bg-green-500"
                : "bg-[#373535]"
            }`}
            onClick={toggleDiv88Visibility}
          ></div>
          {isDiv88Visible && (
            <div className="absolute left-[40vw] top-[-35vh] w-[46vw] h-[80vh] overflow-y-auto">
              <table className="min-w-full bg-[#27211c] text-white rounded-2xl shadow-md">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      MACH_DESC
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      MAKER_DESC
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      MATERIAL
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      MATERIAL_DESC
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      PART_NO
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                      ROB
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {arr88.map((product, index) => (
                    <tr
                      key={index}
                      className={
                        index % 2 === 0 ? "bg-[#2C2C2C]" : "bg-[#262626]"
                      }
                    >
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.MACH_DESC}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.MAKER_DESC}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.MATERIAL}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.MATERIAL_DESC}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.PART_NO}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                        {product.ROB}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NextPage;
