import React from 'react';

const Phonenoform= () => {
  return (
    <div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Add your mobile number:</span>
        </label>
        <input type="text" placeholder="Enter field" className="input input-bordered" />
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary ">Confirm</button>
        <button className="btn">Go back</button>
      </div>
      <label className="label">
          <a href="#" className="label-text-alt link link-hover">Already have an account? Login!</a>
        </label>
    </div>
  );
};

export default Phonenoform;
