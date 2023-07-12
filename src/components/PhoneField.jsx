import { ErrorMessage, FastField } from "formik";
import React from "react";

export function PhoneField() {
  return (
    <>
      <div className="col-6">
        <label htmlFor="mobileInput" className="form-label pt-3">
          شماره همراه
        </label>
        <FastField
          name="phone[0]"
          id="mobileInput"
          className="form-control"
          placeholder="09127173324"
        />
        <ErrorMessage name="phone[0]">
          {(props) => {
            return <small className="text-danger">{props}</small>;
          }}
        </ErrorMessage>
      </div>
      <div className="col-6">
        <label htmlFor="phonInput" className="form-label pt-3">
          شماره ثابت
        </label>
        <FastField
          name="phone[1]"
          id="phoneInput"
          className="form-control"
          placeholder="021-22543288"
        />

        <ErrorMessage name="phone[1]">
          {(props) => {
            return <small className="text-danger">{props}</small>;
          }}
        </ErrorMessage>
      </div>
    </>
  );
}
