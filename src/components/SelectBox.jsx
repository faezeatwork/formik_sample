import { ErrorMessage, FastField } from "formik";
import React from "react";

export const SelectBox = (props) => {
  const { label, id, name, option } = props;

  return (
    <div className="d-flex flex-column">
      <label htmlFor={name} className="mt-3 ">
        {label}
        <small className="text-success">(اختیاری)</small>
      </label>

      <FastField
        as="select"
        name={name}
        id={id}
        className="select-form  mt-2 p-1 rounded "
      >
        <option value="" disabled>
          یکی از موارد را انتخاب کنید
        </option>
        {option.map((d) => (
          <option value={d.id} key={d.id}>
            {d.value}
          </option>
        ))}
      </FastField>
      <ErrorMessage
        name={name}
        render={(msg) => <small className="text-danger">{msg}</small>}
      />
    </div>
  );
};
