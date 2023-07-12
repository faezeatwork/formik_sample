import { ErrorMessage, FastField } from "formik";
import React from "react";

export const Inputs = (props) => {
  const { type, id, name, label } = props;
  return (
    <div className="mx-1 col-6 ">
      <label htmlFor={id} className="form-label pt-3 ">
        {label}
      </label>
      <FastField
        type={type}
        id={id}
        name={name}
        className="form-control"
        autoComplete="on"
      />

      <ErrorMessage
        name={name}
        render={(msg) => <small className="text-danger">{msg}</small>}
      />
    </div>
  );
};
