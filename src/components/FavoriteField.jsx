import { ErrorMessage, FastField } from "formik";
import React from "react";

export function FavoriteField(props) {
  const { push, remove, form } = props;
  const { favorite } = form.values;
  // console.log(props);
  return (
    <div>
      <i
        className="pointer fa-solid fa-plus text-success p-2"
        onClick={() => {
          push("");
          console.log("push");
        }}
      ></i>
      <label htmlFor="favoriteInput" className="form-label pt-3">
        علایق
      </label>

      {favorite.map((f, i) => (
        <div key={i * 2} className="position-relative">
          <FastField
            type="text"
            id="favoriteInput"
            className="form-control"
            name={`favorite[${i}]`}
          />
          {favorite.length > 1 ? (
            <i
              className="fa-solid fa-square-minus text-danger deleteIcon pointer"
              onClick={() => remove("")}
            ></i>
          ) : null}
          <ErrorMessage name="favorite[0]">
            {(props) => <small className="text-danger">{props}</small>}
          </ErrorMessage>
        </div>
      ))}
    </div>
  );
}
