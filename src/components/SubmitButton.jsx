import { useFormik } from "formik";
import React from "react";

export const SubmitButton = (props) => {
    const formik = props;
 
  return (
    <div className="text-center">
      <button
        className="btn btn-primary m-4 text-light"
        type="submit"
        disabled={formik.isSubmitting}
      >
        {formik.isSubmitting ? (
          <button className="btn btn-primary" type="button" disabled>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            بارگذاری...
          </button>
        ) : (
          "ثبت نام"
        )}
      </button>
    </div>
  );
};
