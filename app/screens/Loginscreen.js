import React , {useState , useContext} from 'react';
import { Image, StyleSheet } from 'react-native';
import * as yup from "yup";
import jwtDecode from "jwt-decode";

import authApi from "../api/auth";
import Screen from '../components/Screen';
import {AppForm, AppFormField, ErrorMessage ,SubmitButton} from "../components/form"
import AuthContext from "../auth/context";
import storage from "../auth/storage";

const validationSchema = yup.object().shape({
    email:yup.string().email().required().label("Email"),
    password:yup.string().required().min(1).label("Password")
})

function Loginscreen() {
    const [loginFailed , setLoginFailed] = useState(false)
    const authContext = useContext(AuthContext)
    const handleSubmit = async ({email , password}) => {
      const result = await authApi.login(email, password)
        if (!result.ok) return  setLoginFailed(true)

        setLoginFailed(false)
        const user = jwtDecode(result.data)
        authContext.setUser(user)
        await storage.storeToken(result.data)
    }

    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
            <AppForm
                initialValues={{ email:"" , password:"" }}
                onSubmit={handleSubmit}
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
                    <ErrorMessage error="incorrect email or password" visible={loginFailed} />
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