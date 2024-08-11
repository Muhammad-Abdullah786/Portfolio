import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Sign up",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "Log out",
      slug: "/logout",
      active: authStatus,
    },
  ];

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            {authStatus && (
              <Link className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
                <LogOutBtn></LogOutBtn>
              </Link>
            )}

            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {navItems.map((item) => {
                item.active ? (
                  <li
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 ${
                        isActive ? "text-orange-700" : "text-grey-700"
                      } duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    <button onClick={() => navigate(item.slug)}>
                      {item.name}
                    </button>
                  </li>
                ) : null;
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
