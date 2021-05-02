import React from 'react';
import { StyleSheet } from 'react-native';
import * as yup from "yup"

import Screen from '../components/Screen';
import {AppForm , AppFormField, SubmitButton}  from '../components/form';


const validationSchema=yup.object().shape({
    username:yup.string().required().label("Username"),
    email:yup.string().email().required().label("Email"),
    password:yup.string().required().min(1).label("Password")
})

function RegisterScreen(props) {
    return (
        <Screen style={styles.screen}>
            <AppForm
            initialValues={{username:"", email:"", password:""}}
            onSubmit={values => console.log(values)}
            validationSchema={validationSchema}
            >
                <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                name="username"
                placeholder="Username"
                iconname="account"/>
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
                placeholder="Password"
                secureTextEntry={true}
                    iconname="lock"/>
                <SubmitButton title="Register"/>
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen:{
        padding:15
    }
})
export default RegisterScreen;