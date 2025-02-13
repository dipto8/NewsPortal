import React from "react";
import Navbar from "../shared/Navbar/Navbar";
import { Link } from "react-router-dom";

export default function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    console.log(form.get("email"));
  };

  return (
    <div>
      <Navbar></Navbar>

      <div className="hero bg-primary-200 min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card  bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
            <form onSubmit={handleLogin} className="card-body w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="text-center mb-4">
              Don't have an account?{" "}
              <Link className="text-purple-300 font-bold" to="/register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
