import React from "react";
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3  bg-gradient-to-r from-slate-800 to-slate-700 ">
      <div className=" container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="font-serif w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
          {/* Title */}
          <a className="text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white hover:opacity-80">
            <Link to={"/"}>
              Silvester
            </Link>
          </a>
        </div>

        <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
          <ul className="flex flex-col lg:flex-row list-none ml-auto">

            <li className="nav-item">
              <a className="px-3 py-2 flex items-center text-s uppercase font-bold leading-snug text-white hover:opacity-75">
                <Link to={"/feed"}>
                  Feed
                </Link>
              </a>

            </li>
            <li className="nav-item">
              <a className="px-3 py-2 flex items-center text-s uppercase font-bold leading-snug text-white hover:opacity-75">
                <Link to={"/profile"}>
                  Profile
                </Link>
              </a>

            </li>
            <li className="nav-item">
              <a className="px-3 py-2 flex items-center text-s uppercase font-bold leading-snug text-white hover:opacity-75">
                <Link to={"/login"}>
                  Login
                </Link>
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;