import swal from "sweetalert";
import * as Yup from "yup";

export const initialValues = {
  name: "",
  email: "",
  password: "",
  biography: "",
  address: {
    city: "",
    postalCode: "",
  },
  phone: ["", ""], //avali mobile dovomi sabet
  favorite: [""],
  education: 1,
  gender: 1,
  techSkills: {},
};

export const onSubmit = (values, submitProps) => {
  console.log(submitProps);
  setTimeout(() => {
    submitProps.setSubmitting(false);
    submitProps.resetForm();
  }, 3000);

  swal({
    // title: "ثبت شد!",
    text: "ثبت با موفقیت انجام شد!",
    icon: "success",
    button: "متوجه شدم",
    address: {
      city: "",
      postalCode: "",
    },
  });
};

export const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "لطفا این قسمت را پر کنید";
  }

  if (!values.email) {
    errors.email = "لطفا این قسمت را پر کنید";
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
    errors.email = "قالب ایمیل را رعایت کنید ، مثال: aa@bb.cc";
  }
  if (!values.password) {
    errors.password = "لطفا این قسمت را پر کنید";
  }

  return errors;
};

//validate kardan be shekl balaei agar code toolani bashe sakht mishe
//pas az yek package makhsoos validation estefade mikonim be nam YUP
// dg lazem nist IF ELSE estefade konim intori

export const validationSchema = Yup.object({
  name: Yup.string().required("لطفا این قسمت را پر کنید"),
  email: Yup.string()
    .required("لطفا این قسمت را پر کنید")
    .email("قالب ایمیل را رعایت کنید ، مثال: aa@bb.cc"),
  password: Yup.string()
    .required("لطفا این قسمت را پر کنید")
    .min(8, "پسورد کوتاه است - باید حداقل شامل 8 کاراکتر باشد.")
    .matches(/[a-z]/, "  پسورد باید شامل حروف لاتین باشد.")
    .matches(/[A-Z]/, "  پسورد باید حداقل شامل یک حرف بزرگ لاتین باشد.")
    .matches(/[0-9]/, "  پسورد باید شامل اعداد لاتین باشد."),
  // biography: Yup.string()
  //   .required("لطفا این قسمت را پر کنید")
  //   .min(50, "بیوگرافی باید حداقل شامل 50 حرف باشد"),
  address: Yup.object({
    city: Yup.string().required("لطفا این قسمت را پر کنید"),
    postalCode: Yup.number().required("لطفا این قسمت را پر کنید"),
  }),
  phone: Yup.array().of(
    Yup.string()
      .required("لطفا این قسمت را پر کنید")
      .matches(
        /^0\d{2,3}-\d{8}$/ | /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/,
        "قالب شماره را رعایت کنید"
      )
  ),
  favorite: Yup.array().of(
    Yup.string().required("وارد کردن حداقل یک مورد الزامی است.")
  ),
  education: Yup.string().required("لطفا یکی از آیتم ها را انتخاب کنید."),
  gender: Yup.string().required("انتخاب جنسیت اجباری است."),
 
});


//---------------------------------------------------------------//
//be jaye estefade az Yup baraye validation bio
//yek validation customize barash misazim :)
export const validateBio = (values) => {
  let error;
  if (!values) {
    error = "پر کردن این فیلد اجباری است";
  } else if (values.length < 50) {
    error = "حداقل 50 کاراکتر";
  }
  if (!/^[a-zA-Z0-9_.-]*$/.test(values)) {
    error =
      "قالب متنی را رعایت کنید، تنها مجاز به استفاده از حروف و اعداد لاتین هستید.";
  }
  return error;
};

