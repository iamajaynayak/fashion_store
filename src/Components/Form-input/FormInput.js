import React from "react";
import "./forminput.css";

const FormInput = ({ handleChange, label, ...otherprops }) => (
  <div
    className="group"
    style={{
      position: `relative`,
      margin: `45px 0`,
    }}
  >
    <input className="input-form" onChange={handleChange} {...otherprops} />
    {label ? (
      <label
        className={`${
          otherprops.value.length ? `shrink-box` : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);
export default FormInput;
