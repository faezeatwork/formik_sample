import React from "react";

function TextareaField() {
  console.log("1تست");
  return (
    <textarea
      type="text"
      id="bioInput"
      name="biography"
      className="form-control"
    />
  );
}

export default TextareaField;

//این کامپوننت رو ساختیم برای اموزش کامپوننت شخصی(custom component)مربوط به جلسه71
// .فقط برای اینکه ببینیم میشه یه کامپوننت رو جدا ساخت و داخل کامپوننت های فرمیک ازشون استفاده کرد
