import { useFormik } from "formik";
import React from "react";

export const ValidateAndTouchBoxes = () => {
  const formik = useFormik()
  return (
    <div className="border border-primary py-4 rounded ">
      <div className="d-flex  justify-content-center">
        <button
          className="btn btn-success m-1"
          type="button"
          onClick={() => formik.validateField("biography")}
        >
          اعتبار سنجی بیوگرافی
        </button>
        <button
          className="btn btn-danger m-1"
          type="button"
          onClick={() => formik.validateForm()}
        >
          اعتبارسنجی فرم
        </button>
      </div>

      <div className="d-flex  justify-content-center">
        <button
          className="btn btn-info m-1"
          type="button"
          onClick={() => formik.setFieldTouched("biography")}
        >
          مشاهده بیوگرافی
        </button>
        <button
          className="btn btn-secondary m-1"
          type="button"
          onClick={() =>
            formik.setTouched({
              name: true,
              email: true,
              password: true,
              biography: true,
              address: {
                city: true,
                postalCode: true,
              },
              phone: [true, true], //avali mobile dovomi sabet
              favorite: [true],
            })
          }
        >
          مشاهده فرم
        </button>
      </div>
    </div>
  );
};
