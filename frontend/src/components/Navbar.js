import React, { useEffect, useState } from "react";
import { getProducts } from "../api/productRequest";
import { AiOutlineSearch } from "react-icons/ai";
import { products } from "../data/data";
import { BiSearch } from "react-icons/bi";
import { GrRefresh } from "react-icons/gr";
import { AiOutlineCloseCircle } from "react-icons/ai";
import img_6 from "../assets/img_6.jpg";

const Navbar = ({ setSearchValue }) => {
  const [value, setValue] = useState("");
  const [mappedProducts, setMappedProducts] = useState([]);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    setSearchValue(searchTerm);
  };

  const [navState, setNavState] = useState(false);
  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

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
    if (Array.isArray(product.RFID)) {
      product.RFID.forEach((rfidItem) => {
        arr.push({ ...rfidItem });
      });
    }
  });

  return (
    <>
      <header
        className={
          !navState
            ? "absolute top-0 left-0 right-0 pt-2 pb-0 md:pt-1 bg-[#463f3a] opacity-100 z-50 border-b-2 xsm:absolute xsm:left-0 xsm:pb-1 md:pb-2"
            : "fixed top-0 left-0 right-0 h-[7vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme xsm:h-[8.2vh]"
        }
      >
        <nav className="flex items-center justify-around page-container">
          <div class="max-w-20 max-h-30 rounded-lg overflow-hidden">
            <img src={img_6} alt="logo" class="object-contain h-full w-full" />
          </div>
          <div
            className="flex justify-center items-center bg-white h-[40px] w-[40px] rounded-full cursor-pointer button-theme"
            onClick={() => window.location.reload()}
          >
            <GrRefresh />
          </div>
          <div className="w-[360px] flex flex-col items-center justify-center xsm:w-[200px]">
            <label className="flex flex-row mt-2">
              <AiOutlineSearch className="bg-[#f5f5f5] h-[40px] w-[27px] rounded-tl-2xl rounded-bl-2xl cursor-pointer" />
              <input
                type="text"
                name="name"
                className="outline-none bg-[#f5f5f5] h-[40px] w-[280px] rounded-tr-2xl rounded-br-2xl cursor-pointer xsm:w-[150px]"
                value={value}
                onChange={onChange}
                autoComplete="off"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    onSearch(value);
                  }
                }}
              />
            </label>
            <div className="flex flex-col opacity-100 z-[200] blur-effect-theme rounded-2xl mt-2 mb-1.5 w-[308px]">
              {arr
                .filter((item) => {
                  const searchTerm = value.toLowerCase();
                  const fullName = item.MACH_DESC.toLowerCase();
                  return (
                    searchTerm &&
                    fullName.startsWith(searchTerm) &&
                    fullName !== searchTerm
                  );
                })
                .slice(0, 10)
                .map((item, i) => (
                  <div
                    onClick={() => onSearch(item.MACH_DESC)}
                    className="cursor-pointer my-1.5 ml-3 mr-3 flex flex-row items-center gap-3"
                    key={i}
                  >
                    <h2>{item.MACH_DESC}</h2>
                    <button className="rounded-2xl active:scale-90 transition-all duration-100 ease-in-out shadow-md bg-white text-black py-1 px-2 text-[16px] md:px-1 md:py-0.5 button-theme">
                      <BiSearch />
                    </button>
                  </div>
                ))}
            </div>
          </div>
          <div
            className="flex justify-center items-center bg-white h-[36px] w-[90px] rounded-md cursor-pointer button-theme"
            onClick={() => window.location.reload()}
          >
            <p className="h-[35px] w-[55px] font-semibold mt-3">Table</p>
            <AiOutlineCloseCircle className="h-[35px] w-[20px]" />
          </div>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
