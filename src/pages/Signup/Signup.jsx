import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import heroImg from "../../assets/home.jpg";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext"; 

const Signup = () => {
  const navigate = useNavigate()
  const { createUser, updateUser } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleSignUp = (data) => {
    createUser(data.email, data.password).then((result) => {

        navigate("/");
        const userInfo = {
          displayName: data?.name,
        };
        updateUser(userInfo)
          .then(() => {
            toast.success("Account created successfully");
            saveUserInfo(data.name, data.email, role);
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full shadow-2xl">
          <form onSubmit={handleSubmit(handleSignUp)} className="bg-[#f4e30b] bg-opacity-20 rounded-xl">
            <h1 className="text-5xl font-bold my-10 text-center">Sign Up</h1>
            <div className="card-body w-[380px] lg:w-[30rem]">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  aria-invalid={errors.name ? "true" : "false"}
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered"
                />
              </div>
              {errors.name?.type === "required" && (
                <p className="text-red-600" role="alert">
                  Name is required
                </p>
              )}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  aria-invalid={errors.email ? "true" : "false"}
                  type="email"
                  placeholder="Your email"
                  className="input input-bordered"
                />
              </div>
              {errors.email?.type === "required" && (
                <p className="text-red-600" role="alert">
                  Email is required
                </p>
              )}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: "Make your password strong",
                    minLength: {
                      value: 6,
                      message: "Password must be 6 characters long",
                    },
                    pattern: {
                      value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                      message:
                        "Password must have uppercase, number and special characters",
                    },
                  })}
                  aria-invalid={errors.password ? "true" : "false"}
                  type="password"
                  placeholder="Your password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <p className="text-red-600" role="alert">
                    {errors.password?.message}
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="flex justify-center items-center gap-3 border-4 p-3 rounded-lg lg:w-[26rem] w-[19.75rem] h-[3rem] lg:h-[3rem] mx-auto font-bold bg-[#f4e30b] bg-opacity-20 hover:bg-white hover:text-black">Sign up</button>
              </div>
              <p className="my-2 text-center">
                Already have an account?
                <Link className="text-white font-bold hover:underline" to="/login">
                  {" "}
                  Log in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
