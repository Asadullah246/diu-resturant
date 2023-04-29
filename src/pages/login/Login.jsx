import React, { useState, useContext } from "react";
import heroImg from "../../assets/home.jpg";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/UserContext";

const Login = () => {
  const { signInWithGoogle, signIn,user } = useContext(AuthContext);
  const navigate = useNavigate()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleLogIn = (data) => {
    signIn(data.email, data.password)
    console.log(user);
    navigate("/");
    toast.success("Log In successfully");
  };
  const handleGoogleLogin = () => {
    signInWithGoogle().then((result) => {
      const user = result.user;
      console.log(user);
      toast.success("Log In successfully");
    });
  };
  return (
    //
    <div
      style={{ backgroundImage: `url(${heroImg})` }}
      className="min-h-screen hero bg-opacity-10"
    >
      <div className={`hero min-h-screen flex justify-between px-32`}>
        <div className="">
          <div className="">
            <h1 className="text-6xl text-white font-bold">Welcome & have a</h1>
            <h1 className="text-[65px] text-[#ffd700] font-bold">Coffee</h1>
            <h1 className="text-6xl text-white font-bold">
              with your's friend
            </h1>
          </div>
        </div>

        <div className="bg-[#f4e30b] bg-opacity-20 py-5 rounded-xl">
          <form onSubmit={handleSubmit(handleLogIn)}>
            <h1 className="text-5xl font-bold text-center">Log In</h1>
            <div className="card-body w-[380px] lg:w-[30rem]">
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
                      message: "Password must be 6 characters or longer",
                    },
                  })}
                  type="password"
                  placeholder="Your password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <p className="text-red-600" role="alert">
                    {errors.password?.message}
                  </p>
                )}
                <label className="label">
                  <Link href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control">
                <button className="flex justify-center items-center gap-3 border-4 p-3 rounded-lg lg:w-[26rem] w-[19.75rem] h-[3rem] lg:h-[3rem] mx-auto font-bold bg-[#f4e30b] bg-opacity-20 hover:bg-white hover:text-black">
                  Login
                </button>
              </div>
            </div>
          </form>
          <div className="-mt-5">
            <p className="text-center">
              New user?
              <Link
                to="/sign-up"
                className="text-white font-bold  hover:underline"
              >
                {" "}
                Sign up
              </Link>
            </p>
          </div>
          <div className="divider">OR</div>
          <button
            onClick={handleGoogleLogin}
            className="flex justify-center items-center gap-3 border-4 p-3 rounded-lg lg:w-[26rem] w-[19.75rem] h-[3rem] lg:h-[3rem] mx-auto font-bold bg-[#f4e30b] bg-opacity-20 hover:bg-white hover:text-black"
          >
            <div>
              <FcGoogle className="w-6 h-6"></FcGoogle>
            </div>
            <div>
              <p>GOOGLE</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
