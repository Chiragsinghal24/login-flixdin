import React from 'react';

const Domainselectionform = () => {
  return (
    <div>
      <div className="form-control">
        <label className="label">
          <span className="label-text"><b>Select Domain</b><br></br>
          The domain describes your main profession.
            </span>
        </label>
        <input type="radio" id="domain" name="domain" value="Actor"/>Actor
        <input type="radio" id="domain" name="domain" value="Animation"/>Animation
        <input type="radio" id="domain" name="domain" value="Art Director"/>Art Director
        <input type="radio" id="domain" name="domain" value="Cinematographer"/>Cinematographer
        <input type="radio" id="domain" name="domain" value="Director"/>Director
        <input type="radio" id="domain" name="domain" value="Editor"/>Editor
        <input type="radio" id="domain" name="domain" value="Music Director"/>Music Director
        <input type="radio" id="domain" name="domain" value="Screenwriter"/>Screenwriter
        <input type="radio" id="domain" name="domain" value="Sound Designer"/>Sound Designer
        <input type="radio" id="domain" name="domain" value="VFX Artist"/>VFX Artist
        <input type="radio" id="domain" name="domain" value="Writer"/>Writer
        <input type="radio" id="domain" name="domain" value="Producer"/>Producer
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary ">Next</button>
        <button className="btn">Go back</button>
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

export default Domainselectionform;
