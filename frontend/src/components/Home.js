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

  // const [mappedProducts, setMappedProducts] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await getProducts();
  //       const data = response.data;
  //       console.log(data);

  //       setMappedProducts(data.products);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const [hovered1PairIndex, setHovered1PairIndex] = useState(null);
  const [hovered2PairIndex, setHovered2PairIndex] = useState(null);
  const [hovered3PairIndex, setHovered3PairIndex] = useState(null);
  const [hovered4PairIndex, setHovered4PairIndex] = useState(null);
  const [hovered5PairIndex, setHovered5PairIndex] = useState(null);

  // const newArray = mappedProducts
  //   .filter((product) => product.zone === 1 && product.level === 2)
  //   .map((product) => ({ ...product, selected: true }));

  const mappedProducts = [
    {
      Location: "ZONE7-32-1",
      Box: "G-224",
      RFID: [
        {
          EPC: "301A8D1BE25D0AC001CF4DFB",
          COMPANY: "BWS",
          PRODUCT: "9008171",
          SERIALNO: "30363131",
          MACH_DESC: "Main air compressor",
          MAKER_DESC: "DONGHWA PNEUTEC CO.LTD",
          MATERIAL: "VS.CAS.9013780",
          MATERIAL_DESC: "SLIP RING",
          PART_NO: "A406300124",
          ROB: 6,
        },
        {
          EPC: "301A94B9E264118001CF4E6A",
          COMPANY: "CAS",
          PRODUCT: "9015366",
          SERIALNO: "30363242",
          MACH_DESC: "Main air compressor",
          MAKER_DESC: "DONGHWA PNEUTEC CO.LTD",
          MATERIAL: "VS.CAS.9013780",
          MATERIAL_DESC: "SLIP RING",
          PART_NO: "A406300124",
          ROB: 6,
        },
        {
          EPC: "301AB363E26EC2C001CF2CD1",
          COMPANY: "FOS",
          PRODUCT: "9026315",
          SERIALNO: "30354641",
          MACH_DESC: "Main air compressor",
          MAKER_DESC: "DONGHWA PNEUTEC CO.LTD",
          MATERIAL: "VS.CAS.9013780",
          MATERIAL_DESC: "SLIP RING",
          PART_NO: "A406300124",
          ROB: 6,
        },
      ],
    },
  ];

  const newArray = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          newArray.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(newArray); // Log the contents of newArray

  const [isDivVisible, setIsDivVisible] = useState(false);

  const toggleDivVisibility = () => {
    setIsDivVisible(!isDivVisible);
  };

  // Zone 2
  const arr1 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr1.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv1Visible, setIsDiv1Visible] = useState(false);

  const toggleDiv1Visibility = () => {
    setIsDiv1Visible(!isDiv1Visible);
  };

  const arr2 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr2.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr2);

  const [isDiv2Visible, setIsDiv2Visible] = useState(false);

  const toggleDiv2Visibility = () => {
    setIsDiv2Visible(!isDiv2Visible);
  };
  const arr3 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr3.push({ ...rfidItem });
        });
      }
    }
  });
  // console.log(arr3);

  const [isDiv3Visible, setIsDiv3Visible] = useState(false);

  const toggleDiv3Visibility = () => {
    setIsDiv3Visible(!isDiv3Visible);
  };

  const arr4 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr4.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr4);

  const [isDiv4Visible, setIsDiv4Visible] = useState(false);

  const toggleDiv4Visibility = () => {
    setIsDiv4Visible(!isDiv4Visible);
  };

  const arr5 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr5.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr5);

  const [isDiv5Visible, setIsDiv5Visible] = useState(false);

  const toggleDiv5Visibility = () => {
    setIsDiv5Visible(!isDiv5Visible);
  };

  const arr6 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr6.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr6);

  const [isDiv6Visible, setIsDiv6Visible] = useState(false);

  const toggleDiv6Visibility = () => {
    setIsDiv6Visible(!isDiv6Visible);
  };
  const arr7 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr7.push({ ...rfidItem });
        });
      }
    }
  });
  // console.log(arr7);

  const [isDiv7Visible, setIsDiv7Visible] = useState(false);

  const toggleDiv7Visibility = () => {
    setIsDiv7Visible(!isDiv7Visible);
  };
  const arr8 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr8.push({ ...rfidItem });
        });
      }
    }
  });
  // console.log(arr8);

  const [isDiv8Visible, setIsDiv8Visible] = useState(false);

  const toggleDiv8Visibility = () => {
    setIsDiv8Visible(!isDiv8Visible);
  };
  const arr9 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr9.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr9);

  const [isDiv9Visible, setIsDiv9Visible] = useState(false);

  const toggleDiv9Visibility = () => {
    setIsDiv9Visible(!isDiv9Visible);
  };
  const arr10 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr10.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr10);

  const [isDiv10Visible, setIsDiv10Visible] = useState(false);

  const toggleDiv10Visibility = () => {
    setIsDiv10Visible(!isDiv10Visible);
  };
  const arr11 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr11.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr11);

  const [isDiv11Visible, setIsDiv11Visible] = useState(false);

  const toggleDiv11Visibility = () => {
    setIsDiv11Visible(!isDiv11Visible);
  };

  // Zone 3
  const arr12 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr12.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr12);

  const [isDiv12Visible, setIsDiv12Visible] = useState(false);

  const toggleDiv12Visibility = () => {
    setIsDiv12Visible(!isDiv12Visible);
  };

  const arr13 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr13.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv13Visible, setIsDiv13Visible] = useState(false);

  const toggleDiv13Visibility = () => {
    setIsDiv13Visible(!isDiv13Visible);
  };

  const arr14 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr14.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv14Visible, setIsDiv14Visible] = useState(false);

  const toggleDiv14Visibility = () => {
    setIsDiv14Visible(!isDiv14Visible);
  };

  const arr15 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr15.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv15Visible, setIsDiv15Visible] = useState(false);

  const toggleDiv15Visibility = () => {
    setIsDiv15Visible(!isDiv15Visible);
  };

  const arr16 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr16.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv16Visible, setIsDiv16Visible] = useState(false);

  const toggleDiv16Visibility = () => {
    setIsDiv16Visible(!isDiv16Visible);
  };

  const arr17 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr17.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv17Visible, setIsDiv17Visible] = useState(false);

  const toggleDiv17Visibility = () => {
    setIsDiv17Visible(!isDiv17Visible);
  };

  const arr18 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr18.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv18Visible, setIsDiv18Visible] = useState(false);

  const toggleDiv18Visibility = () => {
    setIsDiv18Visible(!isDiv18Visible);
  };

  const arr19 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr19.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv19Visible, setIsDiv19Visible] = useState(false);

  const toggleDiv19Visibility = () => {
    setIsDiv19Visible(!isDiv19Visible);
  };

  const arr20 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr20.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv20Visible, setIsDiv20Visible] = useState(false);

  const toggleDiv20Visibility = () => {
    setIsDiv20Visible(!isDiv20Visible);
  };

  const arr21 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr21.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv21Visible, setIsDiv21Visible] = useState(false);

  const toggleDiv21Visibility = () => {
    setIsDiv21Visible(!isDiv21Visible);
  };

  const arr22 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr22.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv22Visible, setIsDiv22Visible] = useState(false);

  const toggleDiv22Visibility = () => {
    setIsDiv22Visible(!isDiv22Visible);
  };

  const arr23 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr23.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv23Visible, setIsDiv23Visible] = useState(false);

  const toggleDiv23Visibility = () => {
    setIsDiv23Visible(!isDiv23Visible);
  };

  const arr24 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr24.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv24Visible, setIsDiv24Visible] = useState(false);

  const toggleDiv24Visibility = () => {
    setIsDiv24Visible(!isDiv24Visible);
  };

  const arr25 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr25.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv25Visible, setIsDiv25Visible] = useState(false);

  const toggleDiv25Visibility = () => {
    setIsDiv25Visible(!isDiv25Visible);
  };

  const arr26 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr26.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv26Visible, setIsDiv26Visible] = useState(false);

  const toggleDiv26Visibility = () => {
    setIsDiv26Visible(!isDiv26Visible);
  };

  const arr27 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr27.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv27Visible, setIsDiv27Visible] = useState(false);

  const toggleDiv27Visibility = () => {
    setIsDiv27Visible(!isDiv27Visible);
  };

  const arr28 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr28.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv28Visible, setIsDiv28Visible] = useState(false);

  const toggleDiv28Visibility = () => {
    setIsDiv28Visible(!isDiv28Visible);
  };

  const arr29 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr29.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv29Visible, setIsDiv29Visible] = useState(false);

  const toggleDiv29Visibility = () => {
    setIsDiv29Visible(!isDiv29Visible);
  };

  // Zone 4

  const arr30 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr30.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv30Visible, setIsDiv30Visible] = useState(false);

  const toggleDiv30Visibility = () => {
    setIsDiv30Visible(!isDiv30Visible);
  };

  const arr31 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr31.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv31Visible, setIsDiv31Visible] = useState(false);

  const toggleDiv31Visibility = () => {
    setIsDiv31Visible(!isDiv31Visible);
  };

  const arr32 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr32.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv32Visible, setIsDiv32Visible] = useState(false);

  const toggleDiv32Visibility = () => {
    setIsDiv32Visible(!isDiv32Visible);
  };

  const arr33 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr33.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv33Visible, setIsDiv33Visible] = useState(false);

  const toggleDiv33Visibility = () => {
    setIsDiv33Visible(!isDiv33Visible);
  };

  const arr34 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr34.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv34Visible, setIsDiv34Visible] = useState(false);

  const toggleDiv34Visibility = () => {
    setIsDiv34Visible(!isDiv34Visible);
  };

  const arr35 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr35.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv35Visible, setIsDiv35Visible] = useState(false);

  const toggleDiv35Visibility = () => {
    setIsDiv35Visible(!isDiv35Visible);
  };

  const arr36 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr36.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv36Visible, setIsDiv36Visible] = useState(false);

  const toggleDiv36Visibility = () => {
    setIsDiv36Visible(!isDiv36Visible);
  };

  const arr37 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr37.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv37Visible, setIsDiv37Visible] = useState(false);

  const toggleDiv37Visibility = () => {
    setIsDiv37Visible(!isDiv37Visible);
  };

  const arr38 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr38.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv38Visible, setIsDiv38Visible] = useState(false);

  const toggleDiv38Visibility = () => {
    setIsDiv38Visible(!isDiv38Visible);
  };

  const arr39 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr39.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv39Visible, setIsDiv39Visible] = useState(false);

  const toggleDiv39Visibility = () => {
    setIsDiv39Visible(!isDiv39Visible);
  };

  const arr40 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr40.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv40Visible, setIsDiv40Visible] = useState(false);

  const toggleDiv40Visibility = () => {
    setIsDiv40Visible(!isDiv40Visible);
  };

  const arr41 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr41.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv41Visible, setIsDiv41Visible] = useState(false);

  const toggleDiv41Visibility = () => {
    setIsDiv41Visible(!isDiv41Visible);
  };

  const arr42 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr42.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv42Visible, setIsDiv42Visible] = useState(false);

  const toggleDiv42Visibility = () => {
    setIsDiv42Visible(!isDiv42Visible);
  };

  const arr43 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr43.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv43Visible, setIsDiv43Visible] = useState(false);

  const toggleDiv43Visibility = () => {
    setIsDiv43Visible(!isDiv43Visible);
  };

  const arr44 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr44.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv44Visible, setIsDiv44Visible] = useState(false);

  const toggleDiv44Visibility = () => {
    setIsDiv44Visible(!isDiv44Visible);
  };

  const arr45 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr45.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv45Visible, setIsDiv45Visible] = useState(false);

  const toggleDiv45Visibility = () => {
    setIsDiv45Visible(!isDiv45Visible);
  };

  // Zone 5

  const arr46 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr46.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv46Visible, setIsDiv46Visible] = useState(false);

  const toggleDiv46Visibility = () => {
    setIsDiv46Visible(!isDiv46Visible);
  };
  const arr47 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr47.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv47Visible, setIsDiv47Visible] = useState(false);

  const toggleDiv47Visibility = () => {
    setIsDiv47Visible(!isDiv47Visible);
  };
  const arr48 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr48.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv48Visible, setIsDiv48Visible] = useState(false);

  const toggleDiv48Visibility = () => {
    setIsDiv48Visible(!isDiv48Visible);
  };
  const arr49 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr49.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv49Visible, setIsDiv49Visible] = useState(false);

  const toggleDiv49Visibility = () => {
    setIsDiv49Visible(!isDiv49Visible);
  };
  const arr50 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr50.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv50Visible, setIsDiv50Visible] = useState(false);

  const toggleDiv50Visibility = () => {
    setIsDiv50Visible(!isDiv50Visible);
  };
  const arr51 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr51.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv51Visible, setIsDiv51Visible] = useState(false);

  const toggleDiv51Visibility = () => {
    setIsDiv51Visible(!isDiv51Visible);
  };
  const arr52 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr52.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv52Visible, setIsDiv52Visible] = useState(false);

  const toggleDiv52Visibility = () => {
    setIsDiv52Visible(!isDiv52Visible);
  };
  const arr53 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr53.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv53Visible, setIsDiv53Visible] = useState(false);

  const toggleDiv53Visibility = () => {
    setIsDiv53Visible(!isDiv53Visible);
  };
  const arr54 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr54.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv54Visible, setIsDiv54Visible] = useState(false);

  const toggleDiv54Visibility = () => {
    setIsDiv54Visible(!isDiv54Visible);
  };
  const arr55 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr55.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv55Visible, setIsDiv55Visible] = useState(false);

  const toggleDiv55Visibility = () => {
    setIsDiv55Visible(!isDiv55Visible);
  };
  const arr56 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr56.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv56Visible, setIsDiv56Visible] = useState(false);

  const toggleDiv56Visibility = () => {
    setIsDiv56Visible(!isDiv56Visible);
  };
  const arr57 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr57.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv57Visible, setIsDiv57Visible] = useState(false);

  const toggleDiv57Visibility = () => {
    setIsDiv57Visible(!isDiv57Visible);
  };
  const arr58 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr58.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv58Visible, setIsDiv58Visible] = useState(false);

  const toggleDiv58Visibility = () => {
    setIsDiv58Visible(!isDiv58Visible);
  };
  const arr59 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr59.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv59Visible, setIsDiv59Visible] = useState(false);

  const toggleDiv59Visibility = () => {
    setIsDiv59Visible(!isDiv59Visible);
  };
  const arr60 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr60.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv60Visible, setIsDiv60Visible] = useState(false);

  const toggleDiv60Visibility = () => {
    setIsDiv60Visible(!isDiv60Visible);
  };
  const arr61 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr61.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv61Visible, setIsDiv61Visible] = useState(false);

  const toggleDiv61Visibility = () => {
    setIsDiv61Visible(!isDiv61Visible);
  };
  const arr62 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr62.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv62Visible, setIsDiv62Visible] = useState(false);

  const toggleDiv62Visibility = () => {
    setIsDiv62Visible(!isDiv62Visible);
  };
  const arr63 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr63.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv63Visible, setIsDiv63Visible] = useState(false);

  const toggleDiv63Visibility = () => {
    setIsDiv63Visible(!isDiv63Visible);
  };
  const arr64 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr64.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv64Visible, setIsDiv64Visible] = useState(false);

  const toggleDiv64Visibility = () => {
    setIsDiv64Visible(!isDiv64Visible);
  };
  const arr65 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr65.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv65Visible, setIsDiv65Visible] = useState(false);

  const toggleDiv65Visibility = () => {
    setIsDiv65Visible(!isDiv65Visible);
  };
  const arr66 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr66.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv66Visible, setIsDiv66Visible] = useState(false);

  const toggleDiv66Visibility = () => {
    setIsDiv66Visible(!isDiv66Visible);
  };
  const arr67 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr67.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv67Visible, setIsDiv67Visible] = useState(false);

  const toggleDiv67Visibility = () => {
    setIsDiv67Visible(!isDiv67Visible);
  };
  const arr68 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr68.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv68Visible, setIsDiv68Visible] = useState(false);

  const toggleDiv68Visibility = () => {
    setIsDiv68Visible(!isDiv68Visible);
  };
  const arr69 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr69.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv69Visible, setIsDiv69Visible] = useState(false);

  const toggleDiv69Visibility = () => {
    setIsDiv69Visible(!isDiv69Visible);
  };
  const arr70 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr70.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv70Visible, setIsDiv70Visible] = useState(false);

  const toggleDiv70Visibility = () => {
    setIsDiv70Visible(!isDiv70Visible);
  };
  const arr71 = [];

  mappedProducts.forEach((product) => {
    if (product.Location === "ZONE7-32-1" && product.Box === "G-224") {
      if (Array.isArray(product.RFID)) {
        product.RFID.forEach((rfidItem) => {
          arr71.push({ ...rfidItem });
        });
      }
    }
  });

  // console.log(arr1);

  const [isDiv71Visible, setIsDiv71Visible] = useState(false);

  const toggleDiv71Visibility = () => {
    setIsDiv71Visible(!isDiv71Visible);
  };

  return (
    <>
      <div className="bg-[#1E1E1E] w-[100vw] h-[100vh]">
        {/* Zone 3 */}
        <div className="absolute top-[5vh] left-[1vw]">
          <div
            className="w-[225px] h-[225px] bg-cover"
            style={{ backgroundImage: `url(${img_3})` }}
          >
            {/* {Array.from({ length: 3 }, (_, rowIndex) => (
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
            ))} */}
            <div
              className={`${
                arr12.length >= 1 ? "visible" : "hidden"
              } absolute top-[15vh] left-[3vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr12.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv12Visibility}
            ></div>
            {isDiv12Visible && (
              <div className="absolute left-[20vw] top-[10vh] w-[46vw] h-[80vh] overflow-y-auto">
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
                    {arr12.map((product, index) => (
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
                arr13.length >= 1 ? "visible" : "hidden"
              } absolute top-[15vh] left-[5vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr13.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv13Visibility}
            ></div>
            {isDiv13Visible && (
              <div className="absolute left-[20vw] top-[10vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr13.map((product, index) => (
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
                arr14.length >= 1 ? "visible" : "hidden"
              } absolute top-[15vh] left-[7vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr14.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv14Visibility}
            ></div>
            {isDiv14Visible && (
              <div className="absolute left-[20vw] top-[10vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr14.map((product, index) => (
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
                arr15.length >= 1 ? "visible" : "hidden"
              } absolute top-[11.5vh] left-[10vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr15.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv15Visibility}
            ></div>
            {isDiv15Visible && (
              <div className="absolute left-[20vw] top-[10vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr15.map((product, index) => (
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
                arr16.length >= 1 ? "visible" : "hidden"
              } absolute top-[11.5vh] left-[12vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr16.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv16Visibility}
            ></div>
            {isDiv16Visible && (
              <div className="absolute left-[20vw] top-[10vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr16.map((product, index) => (
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
                arr17.length >= 1 ? "visible" : "hidden"
              } absolute top-[11.5vh] left-[14vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr17.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv17Visibility}
            ></div>
            {isDiv17Visible && (
              <div className="absolute left-[20vw] top-[10vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr17.map((product, index) => (
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
                arr18.length >= 1 ? "visible" : "hidden"
              } absolute top-[15vh] left-[10vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr18.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv18Visibility}
            ></div>
            {isDiv18Visible && (
              <div className="absolute left-[20vw] top-[10vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr18.map((product, index) => (
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
                arr19.length >= 1 ? "visible" : "hidden"
              } absolute top-[15vh] left-[12vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr19.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv19Visibility}
            ></div>
            {isDiv19Visible && (
              <div className="absolute left-[20vw] top-[10vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr19.map((product, index) => (
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
                arr20.length >= 1 ? "visible" : "hidden"
              } absolute top-[15vh] left-[14vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr20.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv20Visibility}
            ></div>
            {isDiv20Visible && (
              <div className="absolute left-[20vw] top-[10vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr20.map((product, index) => (
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
                arr21.length >= 1 ? "visible" : "hidden"
              } absolute top-[21vh] left-[5vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr21.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv21Visibility}
            ></div>
            {isDiv21Visible && (
              <div className="absolute left-[20vw] top-[10vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr21.map((product, index) => (
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
                arr22.length >= 1 ? "visible" : "hidden"
              } absolute top-[18vh] left-[10vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr22.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv22Visibility}
            ></div>
            {isDiv22Visible && (
              <div className="absolute left-[20vw] top-[10vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr22.map((product, index) => (
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
                arr23.length >= 1 ? "visible" : "hidden"
              } absolute top-[18vh] left-[12vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr23.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv23Visibility}
            ></div>
            {isDiv23Visible && (
              <div className="absolute left-[20vw] top-[10vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr23.map((product, index) => (
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
                arr24.length >= 1 ? "visible" : "hidden"
              } absolute top-[18vh] left-[14vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr24.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv24Visibility}
            ></div>
            {isDiv24Visible && (
              <div className="absolute left-[20vw] top-[10vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr24.map((product, index) => (
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
                arr25.length >= 1 ? "visible" : "hidden"
              } absolute top-[21vh] left-[10vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr25.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv25Visibility}
            ></div>
            {isDiv25Visible && (
              <div className="absolute left-[20vw] top-[10vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr25.map((product, index) => (
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
                arr26.length >= 1 ? "visible" : "hidden"
              } absolute top-[21vh] left-[12vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr26.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv26Visibility}
            ></div>
            {isDiv26Visible && (
              <div className="absolute left-[20vw] top-[10vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr26.map((product, index) => (
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
                arr27.length >= 1 ? "visible" : "hidden"
              } absolute top-[21vh] left-[14vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr27.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv27Visibility}
            ></div>
            {isDiv27Visible && (
              <div className="absolute left-[20vw] top-[10vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr27.map((product, index) => (
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
                arr28.length >= 1 ? "visible" : "hidden"
              } absolute top-[26vh] left-[5vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr28.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv28Visibility}
            ></div>
            {isDiv28Visible && (
              <div className="absolute left-[20vw] top-[10vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr28.map((product, index) => (
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
                arr29.length >= 1 ? "visible" : "hidden"
              } absolute top-[26vh] left-[12vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr29.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv29Visibility}
            ></div>
            {isDiv29Visible && (
              <div className="absolute left-[20vw] top-[10vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr29.map((product, index) => (
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

        {/* Zone 4 */}
        <div className="absolute top-[14vh] left-[1vw]">
          <div
            className="mt-[23vh] md:mt-[42vh] w-[350px] h-[250px] md:w-[220px] md:h-[140px] bg-cover"
            style={{ backgroundImage: `url(${img_4})` }}
          >
            {/* {Array.from({ length: 3 }, (_, rowIndex) => (
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
                      product.zone === 6 && product.level === rowIndex + 1
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
            ))} */}
            {/* <div
              className={`${
                newArray.length >= 1 ? "visible" : "hidden"
              } absolute top-[40.5vh] left-[4vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                newArray.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDivVisibility}
            ></div>
            {isDivVisible && (
              <div className="absolute left-[50vw] top-[3vh] w-[46vw] h-[80vh] overflow-y-auto ">
                <table className="min-w-full bg-[#27211c] text-white rounded-2xl shadow-md">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                        Product Name
                      </th>
                      <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                        Product ID
                      </th>
                      <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                        Quantity
                      </th>
                      <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                        Description
                      </th>
                      <th className="px-4 py-2 text-left text-sm font-semibold uppercase">
                        Product Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {newArray.map((product, index) => (
                      <tr
                        key={index}
                        className={
                          index % 2 === 0 ? "bg-[#2C2C2C]" : "bg-[#262626]"
                        }
                      >
                        <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                          {product.product_name}
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                          {product.product_id}
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                          {product.quantity}
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                          {product.description}
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap text-[#F5F5F5]">
                          {product.product_details}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )} */}

            <div
              className={`${
                arr30.length >= 1 ? "visible" : "hidden"
              } absolute top-[35.5vh] left-[3vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr30.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv30Visibility}
            ></div>
            {isDiv30Visible && (
              <div className="absolute left-[50vw] top-[3vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr30.map((product, index) => (
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
                arr31.length >= 1 ? "visible" : "hidden"
              } absolute top-[35.5vh] left-[5.5vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr31.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv31Visibility}
            ></div>
            {isDiv31Visible && (
              <div className="absolute left-[50vw] top-[3vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr31.map((product, index) => (
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
                arr32.length >= 1 ? "visible" : "hidden"
              } absolute top-[35.5vh] left-[8.5vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr32.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv32Visibility}
            ></div>
            {isDiv32Visible && (
              <div className="absolute left-[50vw] top-[3vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr32.map((product, index) => (
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
                arr33.length >= 1 ? "visible" : "hidden"
              } absolute top-[35.5vh] left-[10.5vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr33.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv33Visibility}
            ></div>
            {isDiv33Visible && (
              <div className="absolute left-[50vw] top-[3vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr33.map((product, index) => (
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
                arr34.length >= 1 ? "visible" : "hidden"
              } absolute top-[35.5vh] left-[12.5vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr34.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv34Visibility}
            ></div>
            {isDiv34Visible && (
              <div className="absolute left-[50vw] top-[3vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr34.map((product, index) => (
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
                arr35.length >= 1 ? "visible" : "hidden"
              } absolute top-[35.5vh] left-[15vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr35.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv35Visibility}
            ></div>
            {isDiv35Visible && (
              <div className="absolute left-[50vw] top-[3vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr35.map((product, index) => (
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
                arr36.length >= 1 ? "visible" : "hidden"
              } absolute top-[35.5vh] left-[17vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr36.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv36Visibility}
            ></div>
            {isDiv36Visible && (
              <div className="absolute left-[50vw] top-[3vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr36.map((product, index) => (
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
                arr37.length >= 1 ? "visible" : "hidden"
              } absolute top-[35.5vh] left-[22vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr37.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv37Visibility}
            ></div>
            {isDiv37Visible && (
              <div className="absolute left-[50vw] top-[3vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr37.map((product, index) => (
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
                arr38.length >= 1 ? "visible" : "hidden"
              } absolute top-[40.5vh] left-[4vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr38.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv38Visibility}
            ></div>
            {isDiv38Visible && (
              <div className="absolute left-[50vw] top-[3vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr38.map((product, index) => (
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
                arr39.length >= 1 ? "visible" : "hidden"
              } absolute top-[40.5vh] left-[10.5vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr39.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv39Visibility}
            ></div>
            {isDiv39Visible && (
              <div className="absolute left-[50vw] top-[3vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr39.map((product, index) => (
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
                arr40.length >= 1 ? "visible" : "hidden"
              } absolute top-[40.5vh] left-[15vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr40.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv40Visibility}
            ></div>
            {isDiv40Visible && (
              <div className="absolute left-[50vw] top-[3vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr40.map((product, index) => (
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
                arr41.length >= 1 ? "visible" : "hidden"
              } absolute top-[40.5vh] left-[17vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr41.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv41Visibility}
            ></div>
            {isDiv41Visible && (
              <div className="absolute left-[50vw] top-[3vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr41.map((product, index) => (
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
                arr42.length >= 1 ? "visible" : "hidden"
              } absolute top-[45vh] left-[4vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr42.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv42Visibility}
            ></div>
            {isDiv42Visible && (
              <div className="absolute left-[50vw] top-[3vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr42.map((product, index) => (
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
                arr43.length >= 1 ? "visible" : "hidden"
              } absolute top-[45vh] left-[10.5vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr43.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv43Visibility}
            ></div>
            {isDiv43Visible && (
              <div className="absolute left-[50vw] top-[3vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr43.map((product, index) => (
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
                arr44.length >= 1 ? "visible" : "hidden"
              } absolute top-[45vh] left-[15vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr44.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv44Visibility}
            ></div>
            {isDiv44Visible && (
              <div className="absolute left-[50vw] top-[3vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr44.map((product, index) => (
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
                arr45.length >= 1 ? "visible" : "hidden"
              } absolute top-[45vh] left-[17vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr45.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv45Visibility}
            ></div>
            {isDiv45Visible && (
              <div className="absolute left-[50vw] top-[3vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr45.map((product, index) => (
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

        {/* Zone 5 */}
        <div className="absolute top-[64vh] left-[1vw]">
          <div
            className="w-[350px] h-[250px] md:w-[220px] md:h-[140px] bg-cover"
            style={{ backgroundImage: `url(${img_5})` }}
          >
            {/* {Array.from({ length: 3 }, (_, rowIndex) => (
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
            ))} */}
            <div
              className={`${
                arr46.length >= 1 ? "visible" : "hidden"
              } absolute top-[12.5vh] left-[3vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr46.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv46Visibility}
            ></div>
            {isDiv46Visible && (
              <div className="absolute left-[50vw] top-[-46vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr46.map((product, index) => (
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
                arr47.length >= 1 ? "visible" : "hidden"
              } absolute top-[12.5vh] left-[5vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr47.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv47Visibility}
            ></div>
            {isDiv47Visible && (
              <div className="absolute left-[50vw] top-[-46vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr47.map((product, index) => (
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
                arr48.length >= 1 ? "visible" : "hidden"
              } absolute top-[12.5vh] left-[8vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr48.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv48Visibility}
            ></div>
            {isDiv48Visible && (
              <div className="absolute left-[50vw] top-[-46vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr48.map((product, index) => (
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
                arr49.length >= 1 ? "visible" : "hidden"
              } absolute top-[12.5vh] left-[10vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr49.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv49Visibility}
            ></div>
            {isDiv49Visible && (
              <div className="absolute left-[50vw] top-[-46vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr49.map((product, index) => (
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
                arr50.length >= 1 ? "visible" : "hidden"
              } absolute top-[12.5vh] left-[12vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr50.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv50Visibility}
            ></div>
            {isDiv50Visible && (
              <div className="absolute left-[50vw] top-[-46vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr50.map((product, index) => (
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
                arr51.length >= 1 ? "visible" : "hidden"
              } absolute top-[12.5vh] left-[15vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr51.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv51Visibility}
            ></div>
            {isDiv51Visible && (
              <div className="absolute left-[50vw] top-[-46vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr51.map((product, index) => (
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
                arr52.length >= 1 ? "visible" : "hidden"
              } absolute top-[12.5vh] left-[17vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr52.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv52Visibility}
            ></div>
            {isDiv52Visible && (
              <div className="absolute left-[50vw] top-[-46vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr52.map((product, index) => (
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
                arr53.length >= 1 ? "visible" : "hidden"
              } absolute top-[12.5vh] left-[21vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr53.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv53Visibility}
            ></div>
            {isDiv53Visible && (
              <div className="absolute left-[50vw] top-[-46vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr53.map((product, index) => (
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
                arr54.length >= 1 ? "visible" : "hidden"
              } absolute top-[12.5vh] left-[23vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr54.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv54Visibility}
            ></div>
            {isDiv54Visible && (
              <div className="absolute left-[50vw] top-[-46vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr54.map((product, index) => (
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
                arr55.length >= 1 ? "visible" : "hidden"
              } absolute top-[17.5vh] left-[3vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr55.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv55Visibility}
            ></div>
            {isDiv55Visible && (
              <div className="absolute left-[50vw] top-[-46vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr55.map((product, index) => (
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
                arr56.length >= 1 ? "visible" : "hidden"
              } absolute top-[17.5vh] left-[5vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr56.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv56Visibility}
            ></div>
            {isDiv56Visible && (
              <div className="absolute left-[50vw] top-[-46vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr56.map((product, index) => (
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
                arr57.length >= 1 ? "visible" : "hidden"
              } absolute top-[17.5vh] left-[8vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr57.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv57Visibility}
            ></div>
            {isDiv57Visible && (
              <div className="absolute left-[50vw] top-[-46vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr57.map((product, index) => (
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
                arr58.length >= 1 ? "visible" : "hidden"
              } absolute top-[17.5vh] left-[10vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr58.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv58Visibility}
            ></div>
            {isDiv58Visible && (
              <div className="absolute left-[50vw] top-[-46vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr58.map((product, index) => (
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
                arr59.length >= 1 ? "visible" : "hidden"
              } absolute top-[17.5vh] left-[12vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr59.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv59Visibility}
            ></div>
            {isDiv59Visible && (
              <div className="absolute left-[50vw] top-[-46vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr59.map((product, index) => (
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
                arr60.length >= 1 ? "visible" : "hidden"
              } absolute top-[17.5vh] left-[15vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr60.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv60Visibility}
            ></div>
            {isDiv60Visible && (
              <div className="absolute left-[50vw] top-[-46vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr60.map((product, index) => (
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
                arr61.length >= 1 ? "visible" : "hidden"
              } absolute top-[17.5vh] left-[17vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr61.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv61Visibility}
            ></div>
            {isDiv61Visible && (
              <div className="absolute left-[50vw] top-[-46vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr61.map((product, index) => (
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
                arr62.length >= 1 ? "visible" : "hidden"
              } absolute top-[17.5vh] left-[21vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr62.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv62Visibility}
            ></div>
            {isDiv62Visible && (
              <div className="absolute left-[50vw] top-[-46vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr62.map((product, index) => (
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
                arr63.length >= 1 ? "visible" : "hidden"
              } absolute top-[17.5vh] left-[23vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr63.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv63Visibility}
            ></div>
            {isDiv63Visible && (
              <div className="absolute left-[50vw] top-[-46vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr63.map((product, index) => (
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
                arr64.length >= 1 ? "visible" : "hidden"
              } absolute top-[22vh] left-[5vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr64.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv64Visibility}
            ></div>
            {isDiv64Visible && (
              <div className="absolute left-[50vw] top-[-46vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr64.map((product, index) => (
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
                arr65.length >= 1 ? "visible" : "hidden"
              } absolute top-[22vh] left-[9vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr65.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv65Visibility}
            ></div>
            {isDiv65Visible && (
              <div className="absolute left-[50vw] top-[-46vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr65.map((product, index) => (
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
                arr66.length >= 1 ? "visible" : "hidden"
              } absolute top-[22vh] left-[11vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr66.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv66Visibility}
            ></div>
            {isDiv66Visible && (
              <div className="absolute left-[50vw] top-[-46vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr66.map((product, index) => (
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
                arr67.length >= 1 ? "visible" : "hidden"
              } absolute top-[22vh] left-[15vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr67.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv67Visibility}
            ></div>
            {isDiv67Visible && (
              <div className="absolute left-[50vw] top-[-46vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr67.map((product, index) => (
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
                arr68.length >= 1 ? "visible" : "hidden"
              } absolute top-[22vh] left-[17vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr68.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv68Visibility}
            ></div>
            {isDiv68Visible && (
              <div className="absolute left-[50vw] top-[-46vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr68.map((product, index) => (
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
                arr69.length >= 1 ? "visible" : "hidden"
              } absolute top-[22vh] left-[20vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr69.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv69Visibility}
            ></div>
            {isDiv69Visible && (
              <div className="absolute left-[50vw] top-[-46vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr69.map((product, index) => (
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
                arr70.length >= 1 ? "visible" : "hidden"
              } absolute top-[22vh] left-[22vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr70.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv70Visibility}
            ></div>
            {isDiv70Visible && (
              <div className="absolute left-[50vw] top-[-46vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr70.map((product, index) => (
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
                arr71.length >= 1 ? "visible" : "hidden"
              } absolute top-[22vh] left-[24vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr71.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv71Visibility}
            ></div>
            {isDiv71Visible && (
              <div className="absolute left-[50vw] top-[-46vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr71.map((product, index) => (
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

        {/* Zone 1 */}
        <div className="absolute top-[11vh] left-[30vw]">
          <div
            className="md:mt-[42vh] mt-[23vh] w-[225px] h-[225px] md:w-[140px] md:h-[170px] bg-cover"
            style={{ backgroundImage: `url(${img_1})` }}
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
                      product.zone === 7 && product.level === rowIndex + 1
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
        </div>

        {/* Zone 2 */}
        <div className="absolute top-[5vh] left-[30vw]">
          <div
            className="w-[225px] h-[225px] bg-cover"
            style={{ backgroundImage: `url(${img_2})` }}
          >
            {/* {Array.from({ length: 3 }, (_, rowIndex) => (
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
            ))} */}
            <div
              className={`${
                arr1.length >= 1 ? "visible" : "hidden"
              } absolute top-[15vh] left-[3vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr1.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv1Visibility}
            ></div>
            {isDiv1Visible && (
              <div className="absolute left-[20vw] top-[10vh] w-[46vw] h-[80vh] overflow-y-auto">
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
                    {arr1.map((product, index) => (
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
                arr2.length >= 1 ? "visible" : "hidden"
              } absolute top-[15vh] left-[5vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr2.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv2Visibility}
            ></div>
            {isDiv2Visible && (
              <div className="absolute left-[20vw] top-[10vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr2.map((product, index) => (
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
                arr3.length >= 1 ? "visible" : "hidden"
              } absolute top-[15vh] left-[7vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr3.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv3Visibility}
            ></div>
            {isDiv3Visible && (
              <div className="absolute left-[20vw] top-[10vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr3.map((product, index) => (
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
                arr4.length >= 1 ? "visible" : "hidden"
              } absolute top-[15vh] left-[10vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr4.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv4Visibility}
            ></div>
            {isDiv4Visible && (
              <div className="absolute left-[20vw] top-[10vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr4.map((product, index) => (
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
                arr5.length >= 1 ? "visible" : "hidden"
              } absolute top-[15vh] left-[12vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr5.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv5Visibility}
            ></div>
            {isDiv5Visible && (
              <div className="absolute left-[20vw] top-[10vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr5.map((product, index) => (
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
                arr6.length >= 1 ? "visible" : "hidden"
              } absolute top-[15vh] left-[14vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr6.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv6Visibility}
            ></div>
            {isDiv6Visible && (
              <div className="absolute left-[20vw] top-[10vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr6.map((product, index) => (
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
                arr7.length >= 1 ? "visible" : "hidden"
              } absolute top-[21vh] left-[3vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr7.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv7Visibility}
            ></div>
            {isDiv7Visible && (
              <div className="absolute left-[20vw] top-[10vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr7.map((product, index) => (
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
                arr8.length >= 1 ? "visible" : "hidden"
              } absolute top-[21vh] left-[5vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr8.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv8Visibility}
            ></div>
            {isDiv8Visible && (
              <div className="absolute left-[20vw] top-[10vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr8.map((product, index) => (
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
                arr9.length >= 1 ? "visible" : "hidden"
              } absolute top-[21vh] left-[7vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr9.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv9Visibility}
            ></div>
            {isDiv9Visible && (
              <div className="absolute left-[20vw] top-[10vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr9.map((product, index) => (
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
                arr10.length >= 1 ? "visible" : "hidden"
              } absolute top-[21vh] left-[12vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr10.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv10Visibility}
            ></div>
            {isDiv10Visible && (
              <div className="absolute left-[20vw] top-[10vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr10.map((product, index) => (
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
                arr11.length >= 1 ? "visible" : "hidden"
              } absolute top-[26vh] left-[5vw] w-[20px] h-[20px] bg-[#373535] rounded-lg cursor-pointer ${
                arr11.some((product) => product.product_name === searchValue)
                  ? "bg-green-500"
                  : "bg-[#373535]"
              }`}
              onClick={toggleDiv11Visibility}
            ></div>
            {isDiv11Visible && (
              <div className="absolute left-[20vw] top-[10vh] w-[46vw] h-[80vh] overflow-y-auto ">
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
                    {arr11.map((product, index) => (
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
      </div>
    </>
  );
};

export default Home;
