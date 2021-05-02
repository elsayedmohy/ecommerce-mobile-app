import React from 'react';
import {useFormikContext} from "formik"
import AppPicker from '../AppPicker';
import ErrorMessage from "./ErrorMessage"

function AppFormPicker({items,numberOfColomns, PickerIconComponent , name, width , placeholder}) {

    const {values , errors , setFieldValue , touched} = useFormikContext()

    return (
        <>
            <AppPicker
            numberOfColomns={numberOfColomns}
            PickerIconComponent={PickerIconComponent}
            items={items}
            selectedItem={values[name]}
            onSelectItem={(item) => setFieldValue(name,item)}
            placeholder={placeholder}
            width={width}
            ></AppPicker>
            <ErrorMessage error={errors[name]} visible={touched[name]} />

        </>
    );
}

export default AppFormPicker;