import React from 'react';
import {useFormikContext} from "formik";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

function AppFormField({name ,width , ...otherprops}) {
    const {handleChange, setFieldTouched,touched, errors} = useFormikContext()
    
    return (
        <>
        <AppTextInput
            {...otherprops}
            onChangeText={handleChange(name)}
            onBlur={()=> setFieldTouched(name)}
            width={width}
        />
        <ErrorMessage visible={touched[name]} error={errors[name]}/>
        </>
    );
}

export default AppFormField;