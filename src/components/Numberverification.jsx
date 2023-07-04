import React from 'react';
import Logo from '../assets/check.png'
const Numberverificationform = () => {
  return (
    <>
      <img src={Logo} className='mx-auto w-20' alt="" />
      <p className="font-semibold text-center text-black">Let’s get your phone number verified.</p>
      <p className="font-normal text-center text-black">Enter the six digit code we sent to:701377****</p>
      <div className="form-control">
        <input type="text" className="input bg-white text-center border-[#978839]" placeholder='######'/>
      </div>
      <div className="form-control mt-6">
        <button className="btn normal-case bg-[#C6B34E] rounded-full border-none text-black hover:bg-[#978839]">Confirm</button>
        <p className="text-0.5xl font-semibold text-center text-[#978839]">Change number | Request new code</p>
        <label className="label text-center mx-auto mt-8">
          <a href="#" className="label-text-alt link link-hover">Already have an account? Login!</a>
        </label>
      </div>
    </>
  );
};

export default Numberverificationform;
