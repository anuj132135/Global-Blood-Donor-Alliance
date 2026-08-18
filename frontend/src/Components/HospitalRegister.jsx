import React from "react";
import Logo from "../assets/logo.png";
import {
  Button,
} from "@heroui/react";
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import { Toolbox } from 'lucide-react';
import api from "../api/api";

function HospitalRegister() {

     const navigate = useNavigate();
    
      const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors, isSubmitting },
      } = useForm()
    
      // submit data
     const hospitalSubmit = async (data) => {
      try {
        const response = await api.post("/register-hospital", data);
        alert(response.data.message)
        reset();
        navigate('/');
      } catch (error) {
        alert(error.response?.data?.message || "Something went wrong");
      }
    };
    
  return (
    <>
      <div className="form relative z-10 p-8 w-full rounded-xl bg-[var(--bg-box-color)] ">
        <h1 className="customFont text-3xl lg:text-4xl ">
          <img src={Logo} alt="Logo" className="w-15 mr-4 my-4 lg:hidden" />
          Register Your Hospital
        </h1>
        <p className="my-4">
          Register your hospital with Global Blood Donor Alliance to connect with blood donors, manage blood requests, and provide important hospital and emergency information.
        </p>
        <form
          className="flex flex-col gap-4"
          method="POST"
          onSubmit={handleSubmit(hospitalSubmit)}
        >
          <h1 className="customFont flex items-center"><Toolbox className="text-[var(--primary-color)] mr-4" />Hospital Services</h1> 

          {/* Hospital Name */}
          <div className="lg:grid lg:grid-cols-1">
            <label htmlFor="hospitalName">
              Hospital Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your hospital name"
              id="hospitalName"
              {...register("hospitalName", { required: true })}
            />
            {errors.hospitalName && (
              <small className="text-red-400 my-1">
                This field is required
              </small>
            )}
          </div> 
          <div className="lg:grid lg:grid-cols-2 gap-4">
            {/* Hospital Type */}
            <div>
              <label htmlFor="hospitalType">
                Hospital Type <span className="text-red-500">*</span>
              </label>
              <select id="hospitalType" {...register("hospitalType", { required: true })}>
                <option value="">Hospital Type</option>
                <option value="government">Government</option>
                <option value="private">Private</option>
                <option value="trust">Trust</option>
                <option value="other">Other</option>
              </select>
              {errors.hospitalType && (
                <small className="text-red-400 my-1">
                  This field is required
                </small>
              )}
            </div>
            {/* Registration Number */}
            <div>
              <label htmlFor="regNumber">
                Registration Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your registration number"
                id="regNumber"
                {...register("regNumber", { required: true })}
              />
              {errors.regNumber && (
                <small className="text-red-400 my-1">
                  This field is required
                </small>
              )}
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-2 gap-4">
            {/* Hospital Email */}
            <div>
              <label htmlFor="hostpitalEmail">
                Hospital Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter your hospital email"
                id="hostpitalEmail"
                {...register("hostpitalEmail", { required: true })}
              />
              {errors.hostpitalEmail && (
                <small className="text-red-400 my-1">
                  This field is required
                </small>
              )}
            </div>
            {/* Hospital Mobile Number */}
            <div>
              <label htmlFor="hospitalPhoneNo">
                Hospital Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your hospital phone number"
                id="hospitalPhoneNo"
                {...register("hospitalPhoneNo", { required: true })}
              />
              {errors.hospitalPhoneNo && (
                <small className="text-red-400 my-1">
                  This field is required
                </small>
              )}
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-2 gap-4">
            {/* Hospital Emergency Mobile Number */}
            <div>
              <label htmlFor="hospitalEmergencyPhoneNo">
                Hospital Emergency Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your hospital emergency phone number"
                id="hospitalEmergencyPhoneNo"
                {...register("hospitalEmergencyPhoneNo", { required: true })}
              />
              {errors.hospitalEmergencyPhoneNo && (
                <small className="text-red-400 my-1">
                  This field is required
                </small>
              )}
            </div>
            {/* Country */}
            <div>
              <label htmlFor="country">
                Country <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your country"
                id="country"
                {...register("country", { required: true })}
              />
              {errors.country && (
                <small className="text-red-400 my-1">
                  This field is required
                </small>
              )}
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-3 gap-4">
            {/* State */}
            <div className="mt-4 md:mt-0">
              <label htmlFor="state">
                State<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your state"
                id="state"
                {...register("state", { required: true })}
              />
              {errors.state && (
                <small className="text-red-400 my-1">
                  This field is required
                </small>
              )}
            </div>
            {/* City */}
            <div>
              <label htmlFor="city">
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your city"
                id="city"
                {...register("city", { required: true })}
              />
              {errors.city && (
                <small className="text-red-400 my-1">
                  This field is required
                </small>
              )}
            </div>
            {/* Pincode */}
            <div className="mt-4 md:mt-0">
              <label htmlFor="pincode">
                Pincode <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your Pincode"
                id="pincode"
                {...register("pincode", {
                  required: "This field is required",
                  pattern: {
                    value: /^[1-9][0-9]{5}$/,
                    message: "Please enter a valid 6-digit pincode",
                  },
                })}
              />
              {errors.pincode && (
                <small className="text-red-400 my-1">
                  {errors.pincode.message}
                </small>
              )}
            </div>
          </div>
          {/* Adress */}
          <div className="lg:grid lg:grid-cols-1">
            <label htmlFor="address">
              Complete Address <span className="text-red-500">*</span>
            </label>
            <textarea
              id="address"
              {...register("address", { required: true })}
            ></textarea>
            {errors.address && (
              <small className="text-red-400 my-1">
                This field is required
              </small>
            )}
          </div>

          <h1 className="customFont flex items-center"><Toolbox className="text-[var(--primary-color)] mr-4" />Hospital Administrator</h1> 
          <div className="lg:grid lg:grid-cols-1 gap-4">
            {/* Admin Name */}
            <div>
              <label htmlFor="adminName">
                Admin Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Administrator Name"
                id="adminName"
                {...register("adminName", { required: true })}
              />
              {errors.adminName && (
                <small className="text-red-400 my-1">
                  This field is required
                </small>
              )}
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-2 gap-4">
            {/* Admin Email */}         
            <div>
              <label htmlFor="adminEmail">
                Admin Email <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Email"
                id="adminEmail"
                {...register("adminEmail", { required: true })}
              />
              {errors.adminEmail && (
                <small className="text-red-400 my-1">
                  This field is required
                </small>
              )}
            </div>
            {/* Admin Phone */}
            <div>
              <label htmlFor="adminPhone">
                Admin Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Phone Number"
                id="adminPhone"
                {...register("adminPhone", { required: true })}
              />
              {errors.adminPhone && (
                <small className="text-red-400 my-1">
                  This field is required
                </small>
              )}
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-2 gap-4">
            {/* Password */}
            <div>
              <label htmlFor="password">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="Password"
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
            
            {/* Confirm Password */}
            <div className="mt-4 md:mt-0">
              <label htmlFor="Cpassword">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <input
                type="Password"
                placeholder="Enter your confirm password"
                id="Cpassword"
                {...register("Cpassword", { required: true })}
              />
              {errors.Cpassword && (
                <small className="text-red-400 my-1">
                  This field is required
                </small>
              )}
            </div>
          </div>

          <h1 className="customFont flex items-center"><Toolbox className="text-[var(--primary-color)] mr-4" />Hospital Services</h1> 
          {/* Services */}
          <div className="lg:grid lg:grid-cols-2 gap-2">
              <div className="bg-[var(--bg-color)] rounded-xl flex items-center">
                <input
                  type="checkbox"
                  id="emergency"
                  value="24/7 Emergency"
                  {...register("services")}
                />
                <label htmlFor="emergency">24/7 Emergency</label>
              </div>

              <div className="bg-[var(--bg-color)] rounded-xl flex items-center">
                <input
                  type="checkbox"
                  id="bloodTransfusion"
                  value="Blood Transfusion"
                  {...register("services")}
                />
                <label htmlFor="bloodTransfusion">Blood Transfusion</label>
              </div>

              <div className="bg-[var(--bg-color)] rounded-xl flex items-center">
                <input
                  type="checkbox"
                  id="bloodBank"
                  value="Blood Bank"
                  {...register("services")}
                />
                <label htmlFor="bloodBank">Blood Bank</label>
              </div>

              <div className="bg-[var(--bg-color)] rounded-xl flex items-center">
                <input
                  type="checkbox"
                  id="ICU"
                  value="ICU"
                  {...register("services")}
                />
                <label htmlFor="ICU">ICU</label>
              </div>

              <div className="bg-[var(--bg-color)] rounded-xl flex items-center">
                <input
                  type="checkbox"
                  id="ambulance"
                  value="Ambulance"
                  {...register("services")}
                />
                <label htmlFor="ambulance">Ambulance</label>
              </div>

              <div className="bg-[var(--bg-color)] rounded-xl flex items-center">
                <input
                  type="checkbox"
                  id="laboratory"
                  value="Laboratory"
                  {...register("services")}
                />
                <label htmlFor="laboratory">Laboratory</label>
              </div>

              <div className="bg-[var(--bg-color)] rounded-xl flex items-center">
                <input
                  type="checkbox"
                  id="surgery"
                  value="Surgery"
                  {...register("services")}
                />
                <label htmlFor="surgery">Surgery</label>
              </div>
          </div>
          
          
          <div>
            <label className="flex items-center flex-wrap">
              <input
                type="checkbox"
                {...register("terms", {
                  required: "You must accept the terms and conditions",
                })}
              />
              I accept the &nbsp;
              <Link
                to="/terms-and-conditions"
                className="text-red-500 underline"
              >
                {" "}
                Terms & Conditions{" "}
              </Link>{" "}
              &nbsp; and &nbsp;{" "}
              <Link to="/privacy-policy" className="text-red-500 underline">
                {" "}
                Privacy Policy
              </Link>
              .
            </label>
            {errors.terms && (
              <small className="text-red-400">{errors.terms.message}</small>
            )}
          </div>
          <input
            type={isSubmitting ? "disable" : "submit"}
            className=" w-full bg-[var(--primary-color)] py-6 font-bold text-md"
            value={isSubmitting ? "Submitting..." : "Create Account"}
          />
          <p className="text-center">
            Already have an account?{" "}
            <Link to="/user-login" className="text-[var(--primary-color)]">
              sign in
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default HospitalRegister;
