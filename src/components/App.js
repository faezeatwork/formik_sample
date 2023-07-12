import React from "react";
import RegisterForm from "./RegisterForm";
import RegisterFormWithFormikComponents from "./RegisterFormWithFormikComponents";

function App() {
  return (
    <div>
      {/* <RegisterForm /> */}
      <RegisterFormWithFormikComponents />
    </div>
  );
}

export default App;

//balaei ba metod haye formik neveshte shode  <RegisterForm />
//va ziri ba component haye amadeye formik <RegisterFormWithFormikComponents />
