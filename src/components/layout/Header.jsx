import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import HoverDropDown from "./HeaderComponents/HoverDropDown";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { sidebarActions } from "../../store/slices/siderbarSlice";
import { cities } from "../../assets/cities";

const Header = () => {
  const dispatch = useDispatch();
  const [activeItem, setActiveItem] = useState("Stay");

  const [dropDown, setDropDown] = useState({
    visibility: false,
    childVisibility: false
  });

  const handleOpen = () => {
    dispatch(sidebarActions.toggleOpen());
  };

  const [scrollState, setScrollState] = useState({
    isScrolling: false,
    isDarkMode: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && window.scrollY <= 100) {
        setScrollState({ isScrolling: true, isDarkMode: false });
      } else if (window.scrollY > 100) {
        setScrollState({ isScrolling: true, isDarkMode: true });
      } else {
        setScrollState({ isScrolling: false, isDarkMode: false });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`z-[2] fixed w-full p-mobile text-black bg-white`}>
      <div className="flex items-center bg-transparent justify-between w-full p-nav">
        <div className="hidden md:flex">
          <picture>
            <img
              src="/images/symbols/icon.svg"
              alt=""
              className={`hero-logo flex-custom-center`}
            />
          </picture>
        </div>

        <nav className="flex items-center gap-nav">
          <div className="cheeseburger flex md:hidden" onClick={handleOpen}>
            <div className="cheeseburger-inner">
              <div
                className={`${scrollState.isDarkMode ? "bar bg-black" : "bar"}`}
              ></div>
              <div
                className={`${scrollState.isDarkMode ? "bar bg-black" : "bar"}`}
              ></div>
              <div
                className={`${scrollState.isDarkMode ? "bar bg-black" : "bar"}`}
              ></div>
            </div>
          </div>
          {/* will be mapped from data */}
          <ul className={`lg:flex logo hidden text-black`}>
            <li className="nav-a">
              <a className="flex-custom-center text-black relative overflow-hidden group font-karla">
                <span className="text-[1.3rem] nav-span inline-block transition-all duration-300 ease-in-out transform group-hover:-translate-y-full group-hover:opacity-0 text-black">
                  Home
                </span>
                <span className="text-[1.3rem] nav-span absolute top-full left-0 w-full transition-all duration-300 ease-in-out transform group-hover:-translate-y-full text-black">
                  Home
                </span>
              </a>
            </li>
            <li className="nav-a">
              <a className="flex-custom-center text-black relative overflow-hidden group font-karla">
                <span className="text-[1.3rem] nav-span inline-block transition-all duration-300 ease-in-out transform group-hover:-translate-y-full group-hover:opacity-0 text-black">
                  About Us
                </span>
                <span className="text-[1.3rem] nav-span absolute top-full left-0 w-full transition-all duration-300 ease-in-out transform group-hover:-translate-y-full text-black">
                  About Us
                </span>
              </a>
            </li>
            <li className="nav-a">
              <a className="flex-custom-center text-black relative overflow-hidden group font-karla">
                <span className="text-[1.3rem] nav-span inline-block transition-all duration-300 ease-in-out transform group-hover:-translate-y-full group-hover:opacity-0 text-black">
                  AYUSH
                </span>
                <span className="text-[1.3rem] nav-span absolute top-full left-0 w-full transition-all duration-300 ease-in-out transform group-hover:-translate-y-full text-black">
                  AYUSH
                </span>
              </a>
            </li>
            <li
              className="nav-a"
              onMouseEnter={() =>
                setDropDown({ visibility: true, identifier: "treatment" })
              }
              onMouseLeave={() =>
                setDropDown({ visibility: false, identifier: "treatment" })
              }
            >
              <a className="flex-custom-center text-black relative overflow-hidden group font-karla">
                <span className="text-[1.3rem] nav-span inline-block transition-all duration-300 ease-in-out transform group-hover:-translate-y-full group-hover:opacity-0 text-black">
                  <div className="flex gap-1">
                    Services <MdOutlineArrowDropDown color="black" />
                  </div>
                </span>
                <span className="text-[1.3rem] nav-span absolute top-full left-0 w-full transition-all duration-300 ease-in-out transform group-hover:-translate-y-full text-black">
                  <div className="flex gap-1">
                    Services <MdOutlineArrowDropDown color="black" />
                  </div>
                </span>
              </a>
            </li>
            <li className="nav-a">
              <a className="flex-custom-center text-black relative overflow-hidden group font-karla">
                <span className="text-[1.3rem] nav-span inline-block transition-all duration-300 ease-in-out transform group-hover:-translate-y-full group-hover:opacity-0 text-black">
                  Packages
                </span>
                <span className="text-[1.3rem] nav-span absolute top-full left-0 w-full transition-all duration-300 ease-in-out transform group-hover:-translate-y-full text-black">
                  Packages
                </span>
              </a>
            </li>
            <li className="nav-a">
              <a className="flex-custom-center text-black relative overflow-hidden group font-karla">
                <span className="text-[1.3rem] nav-span inline-block transition-all duration-300 ease-in-out transform group-hover:-translate-y-full group-hover:opacity-0 text-black">
                  Health Visa
                </span>
                <span className="text-[1.3rem] nav-span absolute top-full left-0 w-full transition-all duration-300 ease-in-out transform group-hover:-translate-y-full text-black">
                  Health Visa
                </span>
              </a>
            </li>
          </ul>
        </nav>
        {/* button */}
        <div>
          <div
            className={`btn h-[2em] hover:shadow-2xl hover:scale-105 hover:bg-opacity-90 transition-all duration-300 ease-in-out lg:h-[var(--btn-height-small)] rounded-none bg-[#052560] `}
          >
            <div className="btn-content flex gap-2">
              <a href="#news">
                <span className="lg:flex hidden text-white">Get a Quote</span>
                <span className="lg:hidden text-white">Updates</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${scrollState.isDarkMode ? "bg-[var(--color-border)] border-bottom" : "border-bottom"}`}
      ></div>
      {dropDown.visibility &&
          <HoverDropDown
            onMouseEnter={() =>
              setDropDown({ visibility: true, identifier: "city" })
            }
            onMouseLeave={() =>
              setDropDown({ visibility: false, identifier: "city" })
            }
          >
            <div className="flex flex-col h-full p-2 justify-center items-center">
              {cities.map((city, index) => (
                <div
                  key={index}
                  className="w-[100px] cursor-pointer rounded-md p-3 text-[#296ea4] flex flex-col justify-center items-center hover:underline"
                >
                  <p>{city.name}</p>
                </div>
              ))}
            </div>
          </HoverDropDown>
        }
    </header>
  );
};

export default Header;
