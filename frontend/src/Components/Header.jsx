import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { Button } from "@heroui/react";
import ThemeSwitcher from "./ThemeSwitcher";
import api from "../api/api";
import { useSelector } from "react-redux";

function Header() {
  const user = useSelector((state) => state.user.value);

  const navigate = useNavigate();

  const handleLogout = async () => {
    const confirmed = confirm("Are you sure you want to logout?");
    if(confirmed){
      await api.post("/logout");
      navigate("/user-login");
    }
  };

  return (
    <>
      <nav className="relative z-10 backdrop-blur-md bg-[var(--bg-box-color)]/50 sticky top-0 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
        <div className="mx-auto max-w-7xl px-2 lg:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
              <button
                type="button"
                command="--toggle"
                commandfor="mobile-menu"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  data-slot="icon"
                  aria-hidden="true"
                  className="size-6 in-aria-expanded:hidden"
                >
                  <path
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  data-slot="icon"
                  aria-hidden="true"
                  className="size-6 not-in-aria-expanded:hidden"
                >
                  <path
                    d="M6 18 18 6M6 6l12 12"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start ">
              {/* Logo */}
              <div className="flex shrink-0 items-center">
                <Link to="/">
                  <img
                    src={logo}
                    alt="Global Blood Donor Alliance"
                    className="h-10 w-auto"
                  />
                </Link>
              </div>
              {/* desktop navbar */}
              <div className="hidden lg:ml-6 lg:block">
                <div className="flex space-x-4">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "rounded-md border-b-1 border-[var(--primary-color)] px-3 py-2 text-sm font-medium text-white"
                        : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive
                        ? "rounded-md border-b-1 border-[var(--primary-color)] px-3 py-2 text-sm font-medium text-white"
                        : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                    }
                  >
                    About
                  </NavLink>
                  <NavLink
                    to="/search-donor"
                    className={({ isActive }) =>
                      isActive
                        ? "rounded-md border-b-1 border-[var(--primary-color)] px-3 py-2 text-sm font-medium text-white"
                        : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                    }
                  >
                    Find Donors
                  </NavLink>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive
                        ? "rounded-md border-b-1 border-[var(--primary-color)] px-3 py-2 text-sm font-medium text-white"
                        : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                    }
                  >
                    Hospitals
                  </NavLink>
                  <NavLink
                    to="/search-blood-bank"
                    className={({ isActive }) =>
                      isActive
                        ? "rounded-md border-b-1 border-[var(--primary-color)] px-3 py-2 text-sm font-medium text-white"
                        : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                    }
                  >
                    Blood Banks
                  </NavLink>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive
                        ? "rounded-md border-b-1 border-[var(--primary-color)] px-3 py-2 text-sm font-medium text-white"
                        : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                    }
                  >
                    Contact Us
                  </NavLink>
                </div>
              </div>
            </div>
            {/* Buttons */}
            <div className="hidden lg:ml-6 lg:block absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">
              {user == null ? (
                <>
                  <Button
                    variant="ghost"
                    className="text-[var(--text-color)] mx-2"
                  >
                    <Link to="/user-login">Login</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="text-[var(--text-color)] mx-2"
                  >
                    <Link to="/user-registration">Register</Link>
                  </Button>
                </>
              ) : null}
              <Button
                variant="danger"
                className="bg-[var(--primary-color)] mx-2"
              >
                Become a Donor
              </Button>
            </div>
            {/* User Profile */}
            {user !== null ? (
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">
                <button
                  type="button"
                  className="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">View notifications</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    data-slot="icon"
                    aria-hidden="true"
                    className="size-6"
                  >
                    <path
                      d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>

                <el-dropdown className="relative ml-3">
                  <button className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                      className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
                    />
                  </button>

                  <el-menu
                    anchor="bottom end"
                    popover
                    className="w-48 origin-top-right rounded-md bg-[var(--bg-box-color)] py-1 outline -outline-offset-1 outline-white/10 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                  >
                    <Link
                      to="/manage-profile"
                      className="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:outline-hidden"
                    >
                      Your profile
                    </Link>
                    <Link
                      to="#"
                      className="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:outline-hidden"
                    >
                      Settings
                    </Link>
                    <Link
                      onClick={handleLogout}
                      className="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:outline-hidden"
                    >
                      Sign out
                    </Link>
                  </el-menu>
                </el-dropdown>
              </div>
            ) : null}
          </div>
        </div>

        <el-disclosure id="mobile-menu" hidden className="block lg:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "block rounded-md border-b-2 border-[var(--primary-color)] px-3 py-2 text-base font-medium text-white"
                  : "block rounded-md  px-3 py-2 text-base  text-white"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "block rounded-md border-b-2 border-[var(--primary-color)] px-3 py-2 text-base font-medium text-white"
                  : "block rounded-md  px-3 py-2 text-base  text-white"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/search-donor"
              className={({ isActive }) =>
                isActive
                  ? "block rounded-md border-b-2 border-[var(--primary-color)] px-3 py-2 text-base font-medium text-white"
                  : "block rounded-md  px-3 py-2 text-base  text-white"
              }
            >
              Find Donors
            </NavLink>
            <NavLink
              to=""
              className={({ isActive }) =>
                isActive
                  ? "block rounded-md border-b-2 border-[var(--primary-color)] px-3 py-2 text-base font-medium text-white"
                  : "block rounded-md  px-3 py-2 text-base  text-white"
              }
            >
              Hospitals
            </NavLink>
            <NavLink
              to="/search-blood-bank"
              className={({ isActive }) =>
                isActive
                  ? "block rounded-md border-b-2 border-[var(--primary-color)] px-3 py-2 text-base font-medium text-white"
                  : "block rounded-md  px-3 py-2 text-base  text-white"
              }
            >
              Blood Banks
            </NavLink>
            <NavLink
              to=""
              className={({ isActive }) =>
                isActive
                  ? "block rounded-md border-b-2 border-[var(--primary-color)] px-3 py-2 text-base font-medium text-white"
                  : "block rounded-md  px-3 py-2 text-base  text-white"
              }
            >
              Contact Us
            </NavLink>

            <Button
              variant="ghost"
              className="text-[var(--text-color)] mx-2 my-2 hover:text-black w-full"
            >
              <Link to="/user-login">Login</Link>
            </Button>
            <Button
              variant="outline"
              className="text-[var(--text-color)] mx-2 my-2 w-full"
            >
              <Link to="/user-registration">Register</Link>
            </Button>
            <Button
              variant="danger"
              className="bg-[var(--primary-color)] mx-2 my-2 w-full"
            >
              <Link to="/user-login">Become a Donor</Link>
            </Button>
          </div>
        </el-disclosure>
      </nav>
    </>
  );
}

export default Header;
