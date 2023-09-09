import React, { useEffect, useState } from "react";
import { getProducts } from "../api/productRequest";
import img_8 from "../assets/img_8.png";

export const OBoxes = ({ searchValue }) => {
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

  const arr = [];

  mappedProducts.forEach((product) => {
    if (product.Zone === "Zone0-0-0") {
      arr.push(product);
    }
  });

  // const [isDiv1Visible, setIsDiv1Visible] = useState(false);

  // const toggleDiv1Visibility = () => {
  //   setIsDiv1Visible(!isDiv1Visible);
  // };
  // const [isDiv2Visible, setIsDiv2Visible] = useState(false);

  // const toggleDiv2Visibility = () => {
  //   setIsDiv2Visible(!isDiv2Visible);
  // };
  // const [isDiv3Visible, setIsDiv3Visible] = useState(false);

  // const toggleDiv3Visibility = () => {
  //   setIsDiv3Visible(!isDiv3Visible);
  // };
  // const [isDiv4Visible, setIsDiv4Visible] = useState(false);

  // const toggleDiv4Visibility = () => {
  //   setIsDiv4Visible(!isDiv4Visible);
  // };
  // const [isDiv5Visible, setIsDiv5Visible] = useState(false);

  // const toggleDiv5Visibility = () => {
  //   setIsDiv5Visible(!isDiv5Visible);
  // };
  // const [isDiv6Visible, setIsDiv6Visible] = useState(false);

  // const toggleDiv6Visibility = () => {
  //   setIsDiv6Visible(!isDiv6Visible);
  // };
  // const [isDiv7Visible, setIsDiv7Visible] = useState(false);

  // const toggleDiv7Visibility = () => {
  //   setIsDiv7Visible(!isDiv7Visible);
  // };
  // const [isDiv8Visible, setIsDiv8Visible] = useState(false);

  // const toggleDiv8Visibility = () => {
  //   setIsDiv8Visible(!isDiv8Visible);
  // };
  // const [isDiv9Visible, setIsDiv9Visible] = useState(false);

  // const toggleDiv9Visibility = () => {
  //   setIsDiv9Visible(!isDiv9Visible);
  // };
  // const [isDiv10Visible, setIsDiv10Visible] = useState(false);

  // const toggleDiv10Visibility = () => {
  //   setIsDiv10Visible(!isDiv10Visible);
  // };
  // const [isDiv11Visible, setIsDiv11Visible] = useState(false);

  // const toggleDiv11Visibility = () => {
  //   setIsDiv11Visible(!isDiv11Visible);
  // };
  // const [isDiv12Visible, setIsDiv12Visible] = useState(false);

  // const toggleDiv12Visibility = () => {
  //   setIsDiv12Visible(!isDiv12Visible);
  // };
  // const [isDiv13Visible, setIsDiv13Visible] = useState(false);

  // const toggleDiv13Visibility = () => {
  //   setIsDiv13Visible(!isDiv13Visible);
  // };
  // const [isDiv14Visible, setIsDiv14Visible] = useState(false);

  // const toggleDiv14Visibility = () => {
  //   setIsDiv14Visible(!isDiv14Visible);
  // };
  // const [isDiv15Visible, setIsDiv15Visible] = useState(false);

  // const toggleDiv15Visibility = () => {
  //   setIsDiv15Visible(!isDiv15Visible);
  // };
  // const [isDiv16Visible, setIsDiv16Visible] = useState(false);

  // const toggleDiv16Visibility = () => {
  //   setIsDiv16Visible(!isDiv16Visible);
  // };
  // const [isDiv17Visible, setIsDiv17Visible] = useState(false);

  // const toggleDiv17Visibility = () => {
  //   setIsDiv17Visible(!isDiv17Visible);
  // };
  // const [isDiv18Visible, setIsDiv18Visible] = useState(false);

  // const toggleDiv18Visibility = () => {
  //   setIsDiv18Visible(!isDiv18Visible);
  // };

  return (
    <>
      <div className="bg-[#1E1E1E] w-[100vw] min-h-[100vh] h-auto">
        <div className="pt-[15vh] pl-[5vw] flex flex-row flex-wrap">
          {arr.map((product, i) => (
            <div className="m-[3vh]">
              <img
                src={img_8}
                alt={`${product.MATERIAL_DESC}`}
                className="object-contain h-[100px] w-[100px]"
              />
              <h2 className="text-white">Name: {product.MATERIAL_DESC}</h2>
              <h4 className="text-white">PART-NO: {product.PART_NO}</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
