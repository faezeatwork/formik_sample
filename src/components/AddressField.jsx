import { ErrorMessage, FastField } from "formik";
import React from "react";

export function AddressField() {
  return (
    <>
      <div className="col-6">
        <label htmlFor="cityInput" className="form-label pt-3">
          شهر
        </label>
        <FastField
          type="text"
          id="cityInput"
          className="form-control"
          name="address.city"
        />
        <ErrorMessage name="address.city">
          {(props) => {
            return <small className="text-danger">{props}</small>;
          }}
        </ErrorMessage>
      </div>
      <div className="col-6">
        <label htmlFor="postalCodeInput" className="form-label pt-3">
          کد پستی
        </label>
        <FastField
          type="number"
          id="postalCodeInput"
          className="form-control"
          name="address.postalCode"
        />
        <ErrorMessage name="address.postalCode">
          {(props) => {
            return <small className="text-danger">{props}</small>;
          }}
        </ErrorMessage>
      </div>
    </>
  );
}
