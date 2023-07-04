import React from 'react';
import Logo from '../assets/logo.png'
const LoginForm = () => {
  return (
    <>
      <img src={Logo} className='mx-auto w-24' alt="" />
      <h2 className="text-3xl font-normal text-center text-[#978839]">Login</h2>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Enter username/email/mobile no.</span>
        </label>
        <input type="text" placeholder="Enter field" className="input bg-white rounded-full border-[#978839]" />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Enter password</span>
        </label>
        <input type="password" placeholder="Enter password" className="input rounded-full border-[#978839] bg-white" />
      </div>
      <div className="form-control mt-6">
        <button className="btn bg-[#C6B34E] rounded-full border-none text-black hover:bg-[#978839]">Login</button>
        <label className="label text-center mx-auto mt-8">
          <a href="#" className="label-text-alt link link-hover">Don’t have an account? Register!</a>
        </label>
      </div>
    </>
  );
};

export default LoginForm;
