"use client";

import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className='sticky top-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-lg h-16 z-50'>
      <div className='max-w-7xl mx-auto px-6 h-full flex items-center justify-between'>
        <div className='text-2xl font-bold text-white tracking-wide'>
          My<span className='text-yellow-300'>Site</span>
        </div>

        <ul className='flex gap-8 text-white font-medium text-lg'>
          <li>
            <Link
              href='/'
              className='transition duration-300 hover:text-yellow-300 hover:underline underline-offset-4'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href='/services'
              className='transition duration-300 hover:text-yellow-300 hover:underline underline-offset-4'
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href='/about'
              className='transition duration-300 hover:text-yellow-300 hover:underline underline-offset-4'
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href='/contact'
              className='transition duration-300 hover:text-yellow-300 hover:underline underline-offset-4'
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
