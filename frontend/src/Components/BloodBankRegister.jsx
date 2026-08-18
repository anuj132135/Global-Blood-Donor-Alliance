import React from "react";
import Logo from "../assets/logo.png";
import { Button } from "@heroui/react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Droplet } from "lucide-react";
import api from "../api/api";

function BloodBankRegister() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  // submit data
  const onSubmit = async (data) => {
    try {
      const response = await api.post("/register", data);
      alert(response.data.message);
      reset();
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  // date of birth input
  const today = new Date();

  const minDate = new Date(
    today.getFullYear() - 65,
    today.getMonth(),
    today.getDate(),
  );

  const maxDate = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate(),
  );

  return (
    <>
      <div className="form relative z-10 p-8 w-full rounded-xl bg-[var(--bg-box-color)] ">
        <h1 className="customFont text-3xl lg:text-4xl ">
          <img src={Logo} alt="Logo" className="w-15 mr-4 my-4 lg:hidden" />
          Register Your Blood Bank
        </h1>
        <p className="my-4">
          Register your blood bank with Global Blood Donor Alliance and help
          patients find blood availability quickly.
        </p>
        <form
          className="flex flex-col gap-4"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="customFont flex items-center">
            <Droplet className="text-[var(--primary-color)] mr-4" />
            Organization Details
          </h1>

          {/* Blood Bank Name */}
          <div className="lg:grid lg:grid-cols-1">
            <label htmlFor="bloodBankName">
              Blood Bank Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter blood bank name"
              id="bloodBankName"
              {...register("bloodBankName", { required: true })}
            />
            {errors.bloodBankName && (
              <small className="text-red-400 my-1">
                This field is required
              </small>
            )}
          </div>
          <div className="lg:grid lg:grid-cols-2 gap-4">
            {/* Blood Bank Type */}
            <div>
              <label htmlFor="bloodBankType">
                Blood Bank Type <span className="text-red-500">*</span>
              </label>
              <select
                id="bloodBankType"
                {...register("bloodBankType", { required: true })}
              >
                <option value="">Blood Bank Type</option>
                <option value="government">Government</option>
                <option value="private">Private</option>
                <option value="trust">Trust</option>
                <option value="other">Other</option>
              </select>
              {errors.bloodBankType && (
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
            {/* Blood Bank Email */}
            <div>
              <label htmlFor="bloodBankEmail">
                Blood Bank Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter blood bank email"
                id="bloodBankEmail"
                {...register("bloodBankEmail", { required: true })}
              />
              {errors.bloodBankEmail && (
                <small className="text-red-400 my-1">
                  This field is required
                </small>
              )}
            </div>
            {/* Blood Bank Mobile Number */}
            <div>
              <label htmlFor="bloodBankMobileNo">
                Blood Bank Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter blood bank phone number"
                id="bloodBankMobileNo"
                {...register("bloodBankMobileNo", { required: true })}
              />
              {errors.bloodBankMobileNo && (
                <small className="text-red-400 my-1">
                  This field is required
                </small>
              )}
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-2 gap-4">
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
          </div>
          <div className="lg:grid lg:grid-cols-2 gap-4">
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

          <h1 className="customFont flex items-center">
            <Droplet className="text-[var(--primary-color)] mr-4" />
            Authorized Person
          </h1>
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

          <h1 className="customFont flex items-center">
            <Droplet className="text-[var(--primary-color)] mr-4" />
            Blood Bank Services
          </h1>

          {/* Services */}
          <div className="lg:grid lg:grid-cols-2 gap-2">
            <div className="bg-[var(--bg-color)] rounded-xl flex items-center">
              <input
                type="checkbox"
                id="bloodCollection"
                {...register("bloodCollection")}
              />
              <label htmlFor="bloodCollection">Blood Collection</label>
            </div>
            <div className="bg-[var(--bg-color)] rounded-xl flex items-center">
              <input
                type="checkbox"
                id="bloodStorage"
                {...register("bloodStorage")}
              />
              <label htmlFor="bloodStorage">Blood Storage</label>
            </div>
            <div className="bg-[var(--bg-color)] rounded-xl flex items-center">
              <input
                type="checkbox"
                id="bloodTesting"
                {...register("bloodTesting")}
              />
              <label htmlFor="bloodTesting">Blood Testing</label>
            </div>
            <div className="bg-[var(--bg-color)] rounded-xl flex items-center">
              <input type="checkbox" id="bloodComponentSeparation" {...register("bloodComponentSeparation")} />
              <label htmlFor="bloodComponentSeparation">Blood Component Separation</label>
            </div>
            <div className="bg-[var(--bg-color)] rounded-xl flex items-center">
              <input
                type="checkbox"
                id="bloodTransfusion"
                {...register("bloodTransfusion")}
              />
              <label htmlFor="bloodTransfusion">Blood Transfusion</label>
            </div>
            <div className="bg-[var(--bg-color)] rounded-xl flex items-center">
              <input
                type="checkbox"
                id="emergencyBloodSupply"
                {...register("emergencyBloodSupply")}
              />
              <label htmlFor="emergencyBloodSupply">Emergency Blood Supply</label>
            </div>
            <div className="bg-[var(--bg-color)] rounded-xl flex items-center">
              <input type="checkbox" id="PlasmaCollection" {...register("PlasmaCollection")} />
              <label htmlFor="PlasmaCollection">Plasma Collection</label>
            </div>
            <div className="bg-[var(--bg-color)] rounded-xl flex items-center">
              <input type="checkbox" id="plateletCollection" {...register("plateletCollection")} />
              <label htmlFor="plateletCollection">Platelet Collection</label>
            </div>
            <div className="bg-[var(--bg-color)] rounded-xl flex items-center">
              <input type="checkbox" id="mobileBloodDonationCamp" {...register("mobileBloodDonationCamp")} />
              <label htmlFor="mobileBloodDonationCamp">Mobile Blood Donation Camp</label>
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

export default BloodBankRegister;
