import React from 'react';
import { Image, StyleSheet } from 'react-native';
import * as yup from "yup"

import Screen from '../components/Screen';
import {AppForm, AppFormField, SubmitButton} from "../components/form"

const validationSchema = yup.object().shape({
    email:yup.string().email().required().label("Email"),
    password:yup.string().required().min(1).label("Password")
})

function Loginscreen(props) {
    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
            <AppForm
                initialValues={{ email:"" , password:"" }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    name="email"
                    keyboardType="email-address"
                    placeholder="Email"
                    iconname="email"/>

                    <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    name="password"
                    secureTextEntry={true}
                    iconname="lock"
                    placeholder="Password"
                    />
                    <SubmitButton title="Login"/>
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:15
    },
    logo:{
        width:70,
        height:70,
        marginTop:50,
        marginBottom:20,
        alignSelf:"center"
    }
})
export default Loginscreen;