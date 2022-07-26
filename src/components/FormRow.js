import React from "react";

const FormRow = ({ name, handleChage, value, labelText, type }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        className="form-input"
        onChange={handleChage}
      />
    </div>
  );
};

export default FormRow;
