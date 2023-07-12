import React from "react";
import { Inputs } from "./Inputs";
import { SelectBox } from "./SelectBox";
import { RadioButton } from "./RadioButton";
import { CheckBox } from "./CheckBox";

export const FormikControl = (props) => {
  switch (props.control) {
    case "input":
      return <Inputs {...props} />;
    case "select":
      return <SelectBox {...props} />;  //education
    case "radio":
      return <RadioButton {...props} />; //gender
    case "check":
      return <CheckBox {...props} />; //skills
    default:
      break;
  }
};
