"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

function Navbar() {

    const pathName = usePathname();
    const [showSearch, setShowSearch] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setShowSearch(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const navs = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Shop",
            link: "/shop"
        },
        {
            name: "Blog",
            link: "/blog"
        },
        {
            name: "Contact",
            link: "/contact"
        }
    ];

  return (
    <div className="flex items-center justify-between h-24 w-full px-10">
      <div>
        <img className="w-40" src="https://poulstar.org/images/logo.png" alt="logo" />
      </div>

      <ul className="flex gap-15">
        {
            navs.map((nav)=>(
                <li className={`${pathName === nav.link ? "text-xl font-bold text-white text-shadow-md text-shadow-blue-500" : "text-xl  text-gray-800 transition duration-300 hover:text-blue-500"}`} key={nav.name}>
                    <Link href={nav.link}>{nav.name}</Link>
                </li>
            ))
        }
      </ul>

      <ul className="flex items-center gap-7 relative">
        <li onClick={() => setShowSearch(!showSearch)} className=" cursor-pointer" >
            <svg className="text-gray-800 hover:text-blue-500 transition duration-300" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_15_152)"> <rect width="24" height="24" fill="white"></rect> <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" stroke-linejoin="round"></circle> <path d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z" fill="currentColor"></path> </g> <defs> <clipPath id="clip0_15_152"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>
        </li>
        <li>
            <Link href="">
                <svg className="text-gray-800 hover:text-blue-500 transition duration-300" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3.864 16.4552C4.40967 18.6379 4.68251 19.7292 5.49629 20.3646C6.31008 21 7.435 21 9.68486 21H14.3155C16.5654 21 17.6903 21 18.5041 20.3646C19.3179 19.7292 19.5907 18.6379 20.1364 16.4552C20.9943 13.0234 21.4233 11.3075 20.5225 10.1538C19.6217 9 17.853 9 14.3155 9H9.68486C6.14745 9 4.37875 9 3.47791 10.1538C2.94912 10.831 2.87855 11.702 3.08398 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path> <path d="M19.5 9.5L18.7896 6.89465C18.5157 5.89005 18.3787 5.38775 18.0978 5.00946C17.818 4.63273 17.4378 4.34234 17.0008 4.17152C16.5619 4 16.0413 4 15 4M4.5 9.5L5.2104 6.89465C5.48432 5.89005 5.62128 5.38775 5.90221 5.00946C6.18199 4.63273 6.56216 4.34234 6.99922 4.17152C7.43808 4 7.95872 4 9 4" stroke="currentColor" stroke-width="1.5"></path> <path d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4C15 4.55228 14.5523 5 14 5H10C9.44772 5 9 4.55228 9 4Z" stroke="currentColor" stroke-width="1.5"></path> </g></svg>
            </Link>
        </li>
        <li>
            <Link href="">
                <svg className="text-gray-800 hover:text-blue-500 transition duration-300" width="30px" height="30px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="currentColor" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><circle cx="32" cy="18.14" r="11.14"></circle><path d="M54.55,56.85A22.55,22.55,0,0,0,32,34.3h0A22.55,22.55,0,0,0,9.45,56.85Z"></path></g></svg>
            </Link>
        </li>
      </ul>

      {showSearch && (
        <div ref={searchRef} className="absolute top-14 right-40">
          <input type="search" placeholder="Search..." className="bg-gray-50 rounded-md px-3 py-1 outline-none" />
        </div>
      )}

    </div>
  )
}

export default Navbar;
