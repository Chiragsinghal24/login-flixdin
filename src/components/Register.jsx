import React from 'react';

const RegisterForm = () => {
  return (
    <div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input type="text" placeholder="Enter name" className="input input-bordered" />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Username</span>
        </label>
        <input type="password" placeholder="Enter username" className="input input-bordered" />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="text" placeholder="Enter email" className="input input-bordered" />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Mobile no.</span>
        </label>
        <input type="text" placeholder="Enter mobile no." className="input input-bordered" />
        <label className="label">
          <a href="#" className="label-text-alt link link-hover">Already have an account? Login!</a>
        </label>
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Register</button>
      </div>
    </div>
  );
};

export default RegisterForm;
