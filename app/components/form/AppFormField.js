import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

function AppFormField({ name, width, ...otherprops }) {
  const {
    handleChange,
    setFieldValue,
    values,
    setFieldTouched,
    touched,
    errors,
  } = useFormikContext();

  return (
    <>
      <AppTextInput
        {...otherprops}
        onChangeText={(text) => setFieldValue(name, text)}
        onBlur={() => setFieldTouched(name)}
        width={width}
        value={values[name]}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
}

export default AppFormField;
