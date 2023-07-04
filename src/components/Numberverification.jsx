import React from 'react';

const Numberverificationform = () => {
  return (
    <div>
      <div className="form-control">
        <label className="label">
          <span className="label-text"><b>Let’s get your phone number verified.</b><br></br>
            Enter the six digit code we sent to:
            </span>
        </label>
        <input type="text" className="input input-bordered" />
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary ">Confirm</button>
      </div>
      <div className="form-control mt-6">
      <label className="label">
          <a href="#" className="label-text-alt link link-hover">Change number</a>
          <a href="#" className="label-text-alt link link-hover">Request new code</a>
        </label>
      </div>
    </div>
  );
};

export default Numberverificationform;
