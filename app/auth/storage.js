import * as secureStore from "expo-secure-store"
import jwtDecode from "jwt-decode";


const key="authToken"

const storeToken = async (authToken) => {

    try {
        const token = await secureStore.setItemAsync(key,authToken)
    }
    catch (error) {
        console.log("store token error " , error)
    }
}

const getToken = async () => {

    try {
        return await secureStore.getItemAsync(key)
    } catch (error) {
        console.log("get token error", error)
    }
}

const getUser= async () => {
    const token = await getToken();
    return token? jwtDecode(token) : null
}

const removeToken = async () => {
    try{
         await secureStore.deleteItemAsync(key)
    }
    catch (error) {
        console.log("delete token error" , error)
    }
};


export default { getUser , storeToken  , removeToken }