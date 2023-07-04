import React from 'react';
import Logo from '../assets/phone.png'
const Phonenoform= () => {
  return (
    <>
      <img src={Logo} className='mx-auto w-20 mt-24' alt="" />
      <h2 className="text-xl mt-8 font-semibold text-center text-black">Add your mobile number:</h2>
      <div className="form-control">
        <input type="text" className="input bg-white border-[#978839]" />
      </div>
      <div className="form-control mt-6">
        <button className="btn bg-[#C6B34E] normal-case rounded-full border-none text-black hover:bg-[#978839]">Confirm</button>
        <p className="text-1xl font-semibold text-center text-[#978839]">Go back</p>
        <label className="label text-center mx-auto mt-8 ">
          <a href="#" className="label-text-alt link link-hover">Already have an account? Login!</a>
        </label>
      </div>
    </>
  );
};

export default Phonenoform;
