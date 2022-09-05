import Image from "next/image";
import React from "react";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center  flex-col md:flex-row md:justify-start py-2 shadow-md ">
      <div className=" ">
        <Link href="/">
          <a className="flex items-center mx-5">
            <Image src="/logo.png" alt="" width={80} height={40} />
            <span
              className="ml-3 text-2xl font-bold text-indigo-500">
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
      <div className="cart absolute right-0 top-2 mx-5">
        <button>
          <AiOutlineShoppingCart className="text-xl md:text-2xl mt-3"/>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
