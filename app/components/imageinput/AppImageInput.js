import React from 'react';
import {useFormikContext} from "formik"
import { ErrorMessage } from '../form';
import ImageInputList from './ImageInputList';

function AppImageInput({name}) {

    const {values , errors , setFieldValue , touched} = useFormikContext()

    const imageUris = values[name]

    const handleAdd = (uri)=> {
        setFieldValue(name , [...values[name] , uri])
      };
      const handleRemove = (uri) => {
       
        setFieldValue(name ,  values[name].filter((imageUri) => imageUri !== uri))
      };

    return (
        <>
        <ImageInputList imageUris={values[name]} onAddImage={handleAdd} onRemoveImage={handleRemove} />
        <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppImageInput;