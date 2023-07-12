//in comp va comp RegisterForm yeki hastand

import { FieldArray, Form, Formik } from "formik";
import React, { useEffect } from "react";
import {
  onSubmit,
  initialValues,
  validationSchema,

} from "./formikHelperFunc";
import { BioField } from "./BioField";
import { AddressField } from "./AddressField";
import { PhoneField } from "./PhoneField";
import { FavoriteField } from "./FavoriteField";
import { useState } from "react";
import { FormikControl } from "./FormikControl";
import { education, gender, techSkills } from "./options";

function RegisterFormWithFormikComponents() {
  const [savedData, setSavedData] = useState(null);
  const [myData, setMyData] = useState(null);

  const handleSaveData = (data) => {
    localStorage.setItem("savedData", JSON.stringify(data));
    console.log("data saving is success");
  };

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("savedData"));
    setSavedData(localData);

    <div class="alert alert-dark" role="alert">
      A simple dark alert—check it out!
    </div>;
  }, []);

  const handleGetSavedData = () => {
    setMyData(savedData);
    console.log(savedData);
  };

  return (
    <Formik
      // validateOnMount //Use this option to tell Formik to run validations (validatione form dar ebteda be tor pishfarz true hast inro mizarim ke bere check kone)
      initialValues={myData || initialValues}
      enableReinitialize
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      // validateOnChange={false}
      // validateOnBlur={false}
    >
      {(formik) => {
        // console.log(formik);
        return (
          <div className=" d-flex justify-content-center align-items-center w-100 vh-100 container marginCustom">
            <div className="col-xl-7 col-lg-9 col-md-12 col-sm-12 col-xs-11 box p-3 rounded">
              <Form className="row w-100 p-1 rounded">
                <div className="text-center text-primary h2">
                  <i className="fa-sharp fa-solid fa-person-circle-plus"></i>
                </div>
                <div className="d-flex flex-row">
                  <FormikControl
                    control="input"
                    label="نام"
                    type="text"
                    id="nameInput"
                    name="name"
                  />
                  <FormikControl
                    control="input"
                    label="پسورد"
                    type="password"
                    id="numberInput"
                    name="password"
                  />
                </div>

                <FormikControl
                  control="input"
                  label="ایمیل"
                  type="email"
                  id="emailInput"
                  name="email"
                />
                <div className="d-flex flex-row">
                  <FormikControl
                    control="select"
                    label="تحصیلات"
                    type="selectbox"
                    id="selectInputEdu"
                    name="education"
                    option={education}
                  />

                  <FormikControl
                    control="radio"
                    label="جنسیت"
                    type="radiobutton"
                    id="radiobutton"
                    name="gender"
                    option={gender}
                  />
                </div>

                <FormikControl
                  control="check"
                  label="مهارت های فنی"
                  type="checkbox"
                  id="checkbox"
                  name="tech skills"
                  option={techSkills}
              
                />

                <BioField />
                <AddressField />
                <PhoneField />
                <FieldArray name="favorite">
                  {(props) => <FavoriteField {...props} />}
                </FieldArray>
                <div className=" p-3 text-center ">
                  <button
                    type="submit"
                    className="btn btn-success mx-1 pointer"
                    disabled={
                      !(formik.isValid && formik.dirty) || formik.isSubmitting
                    }
                  >
                    {formik.isSubmitting ? (
                      <div className="spinner-border text-light" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    ) : (
                      <>ثبت نام</>
                    )}
                  </button>
                  {formik.isValid && formik.dirty ? (
                    <button
                      className="btn btn-warning mx-1"
                      type="button"
                      onClick={() => handleSaveData(formik.values)}
                    >
                      ذخیره اطلاعات در سیستم
                    </button>
                  ) : null}

                  {savedData ? (
                    <button
                      className="btn btn-secondary mx-1 mt-1"
                      type="button"
                      onClick={handleGetSavedData}
                    >
                      بازیابی اطلاعات
                    </button>
                  ) : null}
                </div>
              </Form>

              {/* <ValidateAndTouchBoxes /> */}
              {/* <div className="border border-primary py-4 rounded ">
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
              </div> */}
            </div>
          </div>
        );
      }}
    </Formik>
  );
}

export default RegisterFormWithFormikComponents;
