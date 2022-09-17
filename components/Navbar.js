import Image from "next/image";
import React, { useRef } from "react";
import Link from "next/link";

import {
  AiFillCloseCircle,
  AiOutlineShoppingCart,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";

const Navbar = () => {
  const ref = useRef();
  const toggleCat = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else {
      ref.current.classList.add("translate-x-full");
      ref.current.classList.remove("translate-x-0");
    }
  };

  return (
    <div className="flex justify-center items-center  flex-col md:flex-row md:justify-start py-2 shadow-md ">
      <div className=" ">
        <Link href="/">
          <a className="flex items-center mx-5">
            <Image src="/logo.png" alt="" width={80} height={40} />
            <span className="ml-3 text-2xl font-bold text-indigo-500">
              Ecommerce.com
            </span>
          </a>
        </Link>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-6 font-bold md:text-md">
          <Link href="/tshirts" className="mr-6">
            <a>
              <li>T-shirts</li>
            </a>
          </Link>
          <Link href="/hoodies" className="mr-6">
            <a>
              <li>Hoodies</li>
            </a>
          </Link>
          <Link href="/stickers" className="mr-6">
            <a>
              <li>Stickers</li>
            </a>
          </Link>
          <Link href="/mugs" className="mr-6">
            <a>
              <li>Mugs</li>
            </a>
          </Link>
        </ul>
      </div>
      <div
        onClick={toggleCat}
        className="cart absolute right-0 top-2 mx-5 cursor-pointer"
      >
        <AiOutlineShoppingCart className="text-xl md:text-2xl mt-3" />
      </div>
      <div
        ref={ref}
        className="w-72 h-full sideCart absolute top-0 right-0 bg-pink-100 py-10 px-8 transform transition-transform translate-x-full z-10"
      >
        <h2 className="font-bold text-xl text-center">Shopping cart</h2>
        <span
          onClick={toggleCat}
          className="absolute top-5 right-2 cursor-pointer text-2xl text-pink-400"
        >
          <AiFillCloseCircle />
        </span>
        <ol className="list-decimal font-semibold">
          <li>
            <div className="item flex my-5">
              <div className="w-2/3  font-semibold"> T-shirt wear the code</div>
              <div className="flex items-center justify-center w-1/3   font-semibold text-lg">
                <AiFillMinusCircle className="cursor-pointer text-pink-500  " />
                <span className="mx-2 text-sm">1</span>

                <AiFillPlusCircle className="cursor-pointer text-pink-500 " />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className="w-2/3  font-semibold"> T-shirt wear the code</div>
              <div className="flex items-center justify-center w-1/3   font-semibold text-lg">
                <AiFillMinusCircle className="cursor-pointer text-pink-500  " />
                <span className="mx-2 text-sm">1</span>

                <AiFillPlusCircle className="cursor-pointer text-pink-500 " />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className="w-2/3  font-semibold"> T-shirt wear the code</div>
              <div className="flex items-center justify-center w-1/3   font-semibold text-lg">
                <AiFillMinusCircle className="cursor-pointer text-pink-500  " />
                <span className="mx-2 text-sm">1</span>

                <AiFillPlusCircle className="cursor-pointer text-pink-500 " />
              </div>
            </div>
          </li>
        </ol>
        <button className="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-sm">
          {" "}
          <BsFillBagCheckFill className="m-1" />
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
