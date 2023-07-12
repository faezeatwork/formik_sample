import { ErrorMessage, FastField } from "formik";
import React, { Fragment } from "react";

export const RadioButton = (props) => {
  const { name, label, id, option } = props;
  return (
    <div>
      <label htmlFor={name} className="me-3 mt-3">
        {label}
        <small className="text-success">(اختیاری)</small>
      </label>
      <FastField>
        {({ field }) => {
          console.log(field.value);
          return option.map((i) => (
            <Fragment key={i.id}>
              <div className=" px-4">
                <input
                  type="radio"
                  id={i.id}
                  name="radioButton"
                  // {...field}
                  value={i.id}
                  // checked={field.value == i.id}
                />
                <label htmlFor={i.id} className="ms-3">
                  {i.value}
                </label>
              </div>
            </Fragment>
          ));
        }}
      </FastField>
      <ErrorMessage
        name="gender"
        render={(msg) => <small className="text-danger">{msg}</small>}
      />
    </div>
  );
};
