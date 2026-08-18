import React from "react";
import Logo from "../assets/logo.png";
import {
  Button,
} from "@heroui/react";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import api from "../api/api";

function UserRegister() {

     const navigate = useNavigate();
    
      const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors, isSubmitting },
      } = useForm()
    
      // submit data
     const onSubmit = async (data) => {
      try {
        const response = await api.post("/register", data);
        alert(response.data.message)
        reset();
        navigate('/');
      } catch (error) {
        alert(error.response?.data?.message || "Something went wrong");
      }
    };
    
      // date of birth input
      const today = new Date();
    
      const minDate = new Date(
        today.getFullYear() - 65,
        today.getMonth(),
        today.getDate()
      );
    
      const maxDate = new Date(
        today.getFullYear() - 18,
        today.getMonth(),
        today.getDate()
      );

  return (
    <>
      <div className="form relative z-10 p-8 w-full rounded-xl bg-[var(--bg-box-color)]">
        <h1 className="customFont text-3xl lg:text-4xl ">
          <img src={Logo} alt="Logo" className="w-15 mr-4 my-4 lg:hidden" />
          Create Your Account
        </h1>
        <p className="my-4">
          Fill in your details below to become a part of our life-saving
          community.
        </p>
        <form
          className="flex flex-col gap-4"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="lg:grid lg:grid-cols-1">
            <label htmlFor="fullname">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your Full name"
              id="fullname"
              {...register("fullname", { required: true })}
            />
            {errors.fullname && (
              <small className="text-red-400 my-1">
                This field is required
              </small>
            )}
          </div>
          <div className="lg:grid lg:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                id="email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <small className="text-red-400 my-1">
                  This field is required
                </small>
              )}
            </div>
            <div className="mt-4 md:mt-0">
              <label htmlFor="mobile">
                Mobile No. <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your mobile no."
                id="mobile"
                {...register("mobile", {
                  required: "This field is required",
                  pattern: {
                    value: /^[6-9]\d{9}$/,
                    message: "Please enter a valid 10-digit mobile number",
                  },
                })}
              />
              {errors.mobile && (
                <small className="text-red-400 my-1">
                  {errors.mobile.message}
                </small>
              )}
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-2 gap-4">
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
          <div className="lg:grid lg:grid-cols-2 gap-4">
            <div>
              <label htmlFor="gender">
                Gender <span className="text-red-500">*</span>
              </label>
              <select id="gender" {...register("gender", { required: true })}>
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <small className="text-red-400 my-1">
                  This field is required
                </small>
              )}
            </div>
            <div className="mt-4 md:mt-0">
              <label htmlFor="dob">
                Date of Birth<span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="dob"
                {...register("dateOfBirth", {
                  required: "This field is required",
                  validate: (value) => {
                    const dob = new Date(value);
                    if (dob < minDate) {
                      return "Age must not be more than 65 years";
                    }
                    if (dob > maxDate) {
                      return "Age must be at least 18 years";
                    }
                    return true;
                  },
                })}
              />
              {errors.dateOfBirth && (
                <small className="text-red-400 my-1">
                  {errors.dateOfBirth.message}
                </small>
              )}
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-2 gap-4">
            <div>
              <label htmlFor="blood-grp">
                Blood Group <span className="text-red-500">*</span>
              </label>
              <select
                id="blood-grp"
                {...register("bloodGroup", { required: true })}
              >
                <option value="">Select</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
              {errors.bloodGroup && (
                <small className="text-red-400 my-1">
                  This field is required
                </small>
              )}
            </div>
            <div className="mt-4 md:mt-0">
              <label htmlFor="weight">
                Weight (Kg)<span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="weight"
                {...register("weight", {
                  required: "This field is required",
                  min: { value: 45, message: "Weight must be at least 45Kg" },
                })}
              />
              {errors.weight && (
                <small className="text-red-400 my-1">
                  {errors.weight.message}
                </small>
              )}
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-1">
            <label htmlFor="last-donation">
              Last Blood Donation Date{" "}
              <span className="text-gray-400">(optional)</span>
            </label>
            <input
              type="date"
              placeholder="Enter your Full name"
              id="last-donation"
              {...register("lastDonation")}
            />
          </div>
          <div className="lg:grid lg:grid-cols-3 gap-4">
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

export default UserRegister;
