import React, { useState } from "react";
import Logo from "../assets/logo.png";
import bgImage from "../assets/regimage.png";
import { Button } from "@heroui/react";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./UserReg.css";
import api from "../api/api";

function UserLogin() {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await api.post("/login", data);
      alert(response.data.message)
      reset();
      navigate('/');
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <div
        className="relative lg:flex bg-cover bg-left bg-no-repeat bg-transparent-500 "
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className=" p-20 w-[40%] relative z-10 hidden lg:block">
          <div className=" flex items-center">
            <img src={Logo} alt="Logo" className="w-15 mr-4" />
            <h1 className="customFont text-xl">Global Blood Donor Alliance</h1>
          </div>
          <h1 className="customFont text-4xl mt-15">
            Welcome &nbsp;
            <span className="text-[var(--primary-color)]">Back!</span>
          </h1>
          <p className="my-4">
            Sign in to your Global Blood Donor Alliance account to manage
            donations, request blood, and connect with verified donors,
            hospitals, and blood banks.
          </p>
          <div className="m-4">
            <div className="flex my-2 p-4 rounded-xl bg-[var(--bg-box-color)]/20 backdrop-blur-3xl">
              <svg
                viewBox="0 0 24 24"
                className="mr-4"
                width="1.5rem"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                    stroke="#F53A3F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              <span>
                <h1 className="customFont">Manage Your Donor Profile</h1>
                <p className="text-gray-400">
                  Update your personal information, blood group, and availability.
                </p>
              </span>
            </div>
            <div className="flex my-2 p-4 rounded-xl bg-[var(--bg-box-color)]/20 backdrop-blur-3xl">
              <svg viewBox="-1.5 0 15 15"  className="mr-4 w-[1.5rem]" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>drop [#74]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-224.000000, -7882.000000)" fill="#F53A3F"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M180,7731 C180,7734.314 177.314,7737 174,7737 C170.686,7737 168,7734.314 168,7731 C168,7727.686 172.5,7722 174,7722 C175.5,7722 180,7727.686 180,7731" id="drop-[#74]"> </path> </g> </g> </g> </g></svg>
              <span>
                <h1 className="customFont">Track Your Donations</h1>
                <p className="text-gray-400">
                  View your donation history and upcoming donation eligibility.
                </p>
              </span>
            </div>
            <div className="flex my-2 p-4 rounded-xl bg-[var(--bg-box-color)]/20 backdrop-blur-3xl">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="mr-4"
                width="1.5rem"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M12.75 2C12.75 1.58579 12.4142 1.25 12 1.25C11.5858 1.25 11.25 1.58579 11.25 2V5C11.25 5.41421 11.5858 5.75 12 5.75C12.4142 5.75 12.75 5.41421 12.75 5V2Z"
                    fill="#F53A3F"
                  ></path>{" "}
                  <path
                    d="M14.5719 10.8048C14.188 10.6494 13.7507 10.8346 13.5953 11.2186C13.4399 11.6025 13.6252 12.0398 14.0091 12.1952C14.8235 12.5249 15.4749 13.1762 15.8046 13.9907C15.96 14.3746 16.3972 14.5599 16.7812 14.4044C17.1651 14.249 17.3504 13.8118 17.195 13.4278C16.7129 12.2369 15.7629 11.2869 14.5719 10.8048Z"
                    fill="#F53A3F"
                  ></path>{" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 7.25C7.16751 7.25 3.25 11.1675 3.25 16V21.25H2C1.58579 21.25 1.25 21.5858 1.25 22C1.25 22.4142 1.58579 22.75 2 22.75H22C22.4142 22.75 22.75 22.4142 22.75 22C22.75 21.5858 22.4142 21.25 22 21.25H20.75V16C20.75 11.1675 16.8325 7.25 12 7.25ZM12.75 21.25H19.25V16C19.25 11.9959 16.0041 8.75 12 8.75C7.99594 8.75 4.75 11.9959 4.75 16V21.25H11.25V19.622C10.3761 19.3131 9.75 18.4797 9.75 17.5C9.75 16.2574 10.7574 15.25 12 15.25C13.2426 15.25 14.25 16.2574 14.25 17.5C14.25 18.4797 13.6239 19.3131 12.75 19.622V21.25ZM12 18.25C12.4142 18.25 12.75 17.9142 12.75 17.5C12.75 17.0858 12.4142 16.75 12 16.75C11.5858 16.75 11.25 17.0858 11.25 17.5C11.25 17.9142 11.5858 18.25 12 18.25Z"
                    fill="#F53A3F"
                  ></path>{" "}
                  <path
                    d="M21.5303 5.46967C21.8232 5.76256 21.8232 6.23744 21.5303 6.53033L20.0303 8.03033C19.7374 8.32322 19.2626 8.32322 18.9697 8.03033C18.6768 7.73744 18.6768 7.26256 18.9697 6.96967L20.4697 5.46967C20.7626 5.17678 21.2374 5.17678 21.5303 5.46967Z"
                    fill="#F53A3F"
                  ></path>{" "}
                  <path
                    d="M3.53033 5.46967C3.23744 5.17678 2.76256 5.17678 2.46967 5.46967C2.17678 5.76256 2.17678 6.23744 2.46967 6.53033L3.96967 8.03033C4.26256 8.32322 4.73744 8.32322 5.03033 8.03033C5.32322 7.73744 5.32322 7.26256 5.03033 6.96967L3.53033 5.46967Z"
                    fill="#F53A3F"
                  ></path>{" "}
                </g>
              </svg>
              <span>
                <h1 className="customFont">Receive Emergency Alerts</h1>
                <p className="text-gray-400">
                  Get notified when someone nearby needs your blood type.
                </p>
              </span>
            </div>
            <div className="flex my-2 p-4 rounded-xl bg-[var(--bg-box-color)]/20 backdrop-blur-3xl">
             <svg
                viewBox="0 0 24 24"
                className="mr-4"
                width="1.5rem"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                    stroke="#F53A3F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              <span>
                <h1 className="customFont">Find Donors & Blood Banks</h1>
                <p className="text-gray-400">
                  Search verified donors, hospitals, and blood banks anytime.
                </p>
              </span>
            </div>
            <div className="flex my-2 p-4 rounded-xl bg-[var(--bg-box-color)]/20 backdrop-blur-3xl">
              <svg viewBox="0 0 16 16" className="mr-4 w-[1.5rem]" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M4 6V4C4 1.79086 5.79086 0 8 0C10.2091 0 12 1.79086 12 4V6H14V16H2V6H4ZM6 4C6 2.89543 6.89543 2 8 2C9.10457 2 10 2.89543 10 4V6H6V4ZM7 13V9H9V13H7Z" fill="#F53A3F"></path> </g></svg>
              <span>
                <h1 className="customFont">Secure Access</h1>
                <p className="text-gray-400">
                  Your account is protected with secure authentication and encrypted data.
                </p>
              </span>
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-2 ">
            <div className="px-4 m-4 bg-[var(--bg-box-color)] p-2 rounded-xl backdrop-blur-xs">
              <svg
                viewBox="0 0 24 24"
                className="mr-4 my-2"
                width="1.5rem"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                    stroke="#F53A3F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              <span>
                <h1 className="customFont text-2xl text-[var(--primary-color)]">
                  150k+
                </h1>
                <p className="text-gray-400">Registered Donors</p>
              </span>
            </div>
            <div className="px-4 m-4 bg-[var(--bg-box-color)] p-2 rounded-xl backdrop-blur-xs">
              <svg
                viewBox="-2 0 20 20"
                className="mr-4 my-2"
                width="1.5rem"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                fill="#F53A3F"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>drop [#75]</title> <desc>Created with Sketch.</desc>{" "}
                  <defs> </defs>{" "}
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    {" "}
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-182.000000, -7879.000000)"
                      fill="#F53A3F"
                    >
                      {" "}
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        {" "}
                        <path
                          d="M134,7737 C130.692,7737 128,7734.308 128,7731 C128,7727.781 132.302,7722.179 134,7721.104 C135.698,7722.179 140,7727.781 140,7731 C140,7734.308 137.308,7737 134,7737 M134,7719 C132,7719 126,7726.582 126,7731 C126,7735.418 129.582,7739 134,7739 C138.418,7739 142,7735.418 142,7731 C142,7726.582 136,7719 134,7719"
                          id="drop-[#75]"
                        >
                          {" "}
                        </path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
              <span>
                <h1 className="customFont text-2xl text-[var(--primary-color)]">
                  80k+
                </h1>
                <p className="text-gray-400">Lives Saved</p>
              </span>
            </div>
            <div className="px-4 m-4 bg-[var(--bg-box-color)] p-2 rounded-xl backdrop-blur-xs">
              <svg
                fill="#F53A3F"
                className="mr-4 my-2"
                width="1.5rem"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 113.938 113.938"
                xml:space="preserve"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path d="M111.138,2.337H2.802C1.256,2.337,0,3.598,0,5.139V108.8c0,1.544,1.256,2.802,2.802,2.802h39.223h29.888h39.226 c1.541,0,2.801-1.258,2.801-2.802V5.139C113.938,3.598,112.679,2.337,111.138,2.337z M108.336,105.998H74.714v-52.3 c0-1.542-1.257-2.803-2.802-2.803H42.024c-1.545,0-2.802,1.261-2.802,2.803v52.3H5.604V7.94h102.732V105.998z M43.43,30.813 c0-1.541,1.256-2.802,2.802-2.802h7.935v-7.935c0-1.541,1.256-2.802,2.803-2.802c1.544,0,2.802,1.261,2.802,2.802v7.935h7.933 c1.537,0,2.802,1.261,2.802,2.802s-1.265,2.801-2.802,2.801h-7.933v7.935c0,1.54-1.258,2.801-2.802,2.801 c-1.547,0-2.803-1.262-2.803-2.801v-7.935h-7.935C44.687,33.615,43.43,32.354,43.43,30.813z M89.183,100.745h-9.109v-9.114h9.109 V100.745z M103.54,100.745h-9.114v-9.114h9.114V100.745z M89.183,86.737h-9.109V77.62h9.109V86.737z M103.54,86.737h-9.114V77.62 h9.114V86.737z M89.183,70.279h-9.109v-9.118h9.109V70.279z M103.54,70.279h-9.114v-9.118h9.114V70.279z M89.183,56.269h-9.109 v-9.116h9.109V56.269z M103.54,56.269h-9.114v-9.116h9.114V56.269z M89.183,38.758h-9.109v-9.116h9.109V38.758z M103.54,38.758 h-9.114v-9.116h9.114V38.758z M89.183,24.75h-9.109v-9.111h9.109V24.75z M103.54,24.75h-9.114v-9.111h9.114V24.75z M20.542,100.745 H11.43v-9.114h9.112V100.745z M34.902,100.745h-9.11v-9.114h9.11V100.745z M20.542,86.737H11.43V77.62h9.112V86.737z M34.902,86.737h-9.11V77.62h9.11V86.737z M20.542,70.279H11.43v-9.118h9.112V70.279z M34.902,70.279h-9.11v-9.118h9.11V70.279z M20.542,56.269H11.43v-9.116h9.112V56.269z M34.902,56.269h-9.11v-9.116h9.11V56.269z M20.542,38.758H11.43v-9.116h9.112V38.758z M34.902,38.758h-9.11v-9.116h9.11V38.758z M20.542,24.75H11.43v-9.111h9.112V24.75z M34.902,24.75h-9.11v-9.111h9.11V24.75z"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              <span>
                <h1 className="customFont text-2xl text-[var(--primary-color)]">
                  500+
                </h1>
                <p className="text-gray-400">Hospitals</p>
              </span>
            </div>
            <div className="px-4 m-4 bg-[var(--bg-box-color)] p-2 rounded-xl backdrop-blur-xs">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="mr-4 my-2"
                width="1.5rem"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M22 12C22 13.3132 21.7413 14.6136 21.2388 15.8268C20.7362 17.0401 19.9997 18.1425 19.0711 19.0711C18.1425 19.9997 17.0401 20.7362 15.8268 21.2388C14.6136 21.7413 13.3132 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C4.00035 18.1425 3.26375 17.0401 2.7612 15.8268C2.25866 14.6136 2 13.3132 2 12C2 10.6868 2.25866 9.38642 2.76121 8.17316C3.26375 6.95991 4.00035 5.85752 4.92893 4.92893C5.85752 4.00035 6.95991 3.26375 8.17317 2.7612C9.38642 2.25866 10.6868 2 12 2C13.3132 2 14.6136 2.25866 15.8268 2.76121C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12L22 12Z"
                    stroke="#F53A3F"
                    stroke-width="1.5"
                  ></path>{" "}
                  <path
                    d="M16 12C16 13.3132 15.8965 14.6136 15.6955 15.8268C15.4945 17.0401 15.1999 18.1425 14.8284 19.0711C14.457 19.9997 14.016 20.7362 13.5307 21.2388C13.0454 21.7413 12.5253 22 12 22C11.4747 22 10.9546 21.7413 10.4693 21.2388C9.98396 20.7362 9.54301 19.9997 9.17157 19.0711C8.80014 18.1425 8.5055 17.0401 8.30448 15.8268C8.10346 14.6136 8 13.3132 8 12C8 10.6868 8.10346 9.38642 8.30448 8.17316C8.5055 6.95991 8.80014 5.85752 9.17157 4.92893C9.54301 4.00035 9.98396 3.26375 10.4693 2.7612C10.9546 2.25866 11.4747 2 12 2C12.5253 2 13.0454 2.25866 13.5307 2.76121C14.016 3.26375 14.457 4.00035 14.8284 4.92893C15.1999 5.85752 15.4945 6.95991 15.6955 8.17317C15.8965 9.38642 16 10.6868 16 12L16 12Z"
                    stroke="#F53A3F"
                    stroke-width="1.5"
                  ></path>{" "}
                  <path
                    d="M2 12H22"
                    stroke="#F53A3F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                </g>
              </svg>
              <span>
                <h1 className="customFont text-2xl text-[var(--primary-color)]">
                  Nationwide
                </h1>
                <p className="text-gray-400">Network</p>
              </span>
            </div>
          </div>
        </div>
        <div className="form lg:w-[60%] h-[40rem] lg:sticky top-10 relative z-10 p-8 lg:p-20 my-20 m-2 rounded-xl lg:m-20 bg-[var(--bg-box-color)]">
          <h1 className="customFont text-3xl lg:text-4xl ">
            <img src={Logo} alt="Logo" className="w-15 mr-4 my-4 lg:hidden" />
            Sign In to Your Account
          </h1>
          <p className="my-4">
            Enter your credentials to access your dashboard.
          </p>
          <form
            className="flex flex-col gap-4"
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="lg:grid lg:grid-cols-1">
              <div>
                <label htmlFor="email-or-mobile">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  id="email-or-mobile"
                  {...register("email", { required: "This field is required"})}
                />
                {errors.emailOrMobile && (
                  <small className="text-red-400 my-1">
                    {errors.emailOrMobile.message}
                  </small>
                )}
              </div>
            </div>
            
            <div className="lg:grid lg:grid-cols-1">
              <div>
                <label htmlFor="password">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your password"
                  id="password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <small className="text-red-400 my-1">
                    This field is required
                  </small>
                )}
              </div>
            </div>
            
            {/* <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  {...register("rememberMe")}
                />
               Remember Me
              </label>
            </div> */}
            
            <input type={isSubmitting ? "disable" : "submit"} className=" w-full bg-[var(--primary-color)] my-4 py-6 font-bold text-md" value={isSubmitting ? "Submitting..." : "Sign In"}/> 
            <a href="" className="text-center text-red-500">Forgot Password?</a>
            <p className="text-center">
              Don't have an account? &nbsp;
              <Link to="/user-registration" className="text-[var(--primary-color)]">
                Create Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default UserLogin;
