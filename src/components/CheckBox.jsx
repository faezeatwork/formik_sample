import { ErrorMessage, FastField } from "formik";
import React, { Fragment } from "react";

export const CheckBox = (props) => {
  const { name, label, option, validate } = props;
  return (
    <div className="">
      <label htmlFor={name} className="form-label pt-4 pb-1">
        {label}
        <small className="text-success">(اختیاری)</small>:
      </label>
      <div className=" d-flex flex-row justify-content-between px-2">
        <FastField className="bg-danger p-3" validate>
          {({ field }) => {
            return option.map((i) => (
              <Fragment key={i.id}>
                <div>
                  <input
                    type="checkbox"
                    id={`check${i.id}`}
                    {...field}
                    className="form-check-input ms-3"
                  />
                  <label htmlFor={`check${i.id}`}>{i.value}</label>
                </div>
              </Fragment>
            ));
          }}
        </FastField>
        <ErrorMessage
          name="techSkills"
          render={(msg) => <small className="text-danger">{msg}</small>}
        />
      </div>
    </div>
  );
};
