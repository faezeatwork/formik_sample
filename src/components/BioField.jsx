import { ErrorMessage, FastField } from "formik";
import React from "react";
import { validateBio } from "./formikHelperFunc";


export function BioField() {
  return (
    <div>
      <label htmlFor="bioInput" className="form-label pt-3">
        بیوگرافی
      </label>
      <FastField
        type="text"
        id="bioInput"
        className="form-control"
        name="biography"
        component="textarea"
        validate={validateBio}
      />
      {/* {() => <TextareaField />}
    </FastField> */}
      <ErrorMessage
        name="biography"
    
        // render={(msg) => <small className="text-danger">{msg}</small>}
        //یه جور دیگه ی نوشتنش مثل پایینیه
      >
        {(props) => {
          console.log("ErrorMessage biography");
          return <small className="text-danger">{props}</small>;
        }}
      </ErrorMessage>
    </div>
  );
}
