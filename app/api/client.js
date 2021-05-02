import { create} from "apisauce";

const client = create({
    baseURL: "http://192.168.1.11:19000/api"
})

export default client;