import React from 'react';
import Logo from '../assets/Terms.png';

const TermsForm = () => {
  return (
    <>
      <img src={Logo} className="mx-auto w-24" alt="" />
      <h2 className="text-1xl font-semibold text-center text-black">
        Agree to flixdin terms and policies
      </h2>
      <div className="form-control">
        <p className="font-normal text-sm text-black">
          People who use our service may have already entered your number.<br />
          By clicking on I agree, you agree to create an account and to Instagram. Learn More<br />
          The Privacy Policy describes the ways we can use the information we collect when you
          create an account. For example, we use this information to provide, personalize, and
          improve our products, including ads.
        </p>
      </div>
      <div className="form-control mt-6">
        <button className="btn normal-case bg-[#C6B34E] rounded-full border-none text-black hover:bg-[#978839]">
          I agree
        </button>
        <label className="label text-center mx-auto mt-2">
          <a href="#" className="label-text-alt link link-hover">
            Already have an account? Login!
          </a>
        </label>
      </div>
    </>
  );
};

export default TermsForm;
