import { useFormik } from "formik";
import React from "react";
import { onSubmit , validate , initialValues , validationSchema} from "./formikHelperFunc";

function RegisterForm() {
  const formik = useFormik({
    initialValues,  //obj
    onSubmit,       //func
    // validate,       //func
    validationSchema
  });



  return (
    <div className="d-flex justify-content-center align-items-center w-100 vh-100 container-fluid">
      <div className="col-xl-4 col-lg-6 col-md-8 col-sm-7 col-xs-9 box p-3 rounded">
        <form className=" w-100 p-3 rounded" onSubmit={formik.handleSubmit}>
          <div className="text-center text-primary h2">
            <i className="fa-sharp fa-solid fa-person-circle-plus"></i>
          </div>

          <div>
            <label htmlFor="nameInput" className="form-label pt-3">
              نام
            </label>
            <input
              type="text"
              id="nameInput"
              className="form-control"
              name="name"
              {...formik.getFieldProps("name")}
            />
            {formik.errors.name && formik.touched.name ? (
              <small className="text-danger text-center mb-1">
                {formik.errors.name}
              </small>
            ) : null}
          </div>
          <div>
            <label htmlFor="emailInput" className="form-label pt-3">
              ایمیل
            </label>
            <input
              type="email"
              id="emailInput"
              className="form-control"
              name="email"
              // value={formik.values.email}
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}     //be jaye in 3 ta property az helper func zir estefade mikonim=> clear code
              {...formik.getFieldProps("email")}
            />
            {formik.errors.email && formik.touched.email ? (
              <small className="text-danger text-center mb-1">
                {formik.errors.email}
              </small>
            ) : null}
          </div>
          <div>
            <label htmlFor="numberInput" className="form-label pt-3">
              رمز عبور
            </label>
            <input
              // type="password"
              id="numberInput"
              className="form-control"
              name="password"
              // value={formik.values.password}
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}        //be jaye in 3 ta property az helper func zir estefade mikonim=> clear code
              {...formik.getFieldProps("password")}
            />
            {formik.errors.password && formik.touched.password ? (
              <small className="text-danger text-center mb-1">
                {formik.errors.password}
              </small>
            ) : null}
          </div>
          <div className="text-center">
            <button className="btn btn-primary m-4 text-light" type="submit">
              ثبت نام
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
