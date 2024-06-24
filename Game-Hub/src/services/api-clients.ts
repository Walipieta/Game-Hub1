import axios from "axios";


export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key :  '2c4745a9141d41878837596239990da3'
    }
})
