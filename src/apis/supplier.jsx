import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:8070' });

export const checkEmail = async(email)=> {
    try {
        console.log(email);
        const {data} = await API.post(`/supplier/check/email/${email}`);
        return data.success
    } catch (error) {
        console.log(error.response.data)
    }

}

export const checkBrandName = async(brandName)=> {
    try {
        const {data} = await API.get(`/supplier/check/brandName${brandName}`);
        console.log(data);
    } catch (error) {
        console.log(error.message)
    }

}


export const saveSupplier = async(supplierData)=> {
    try {
        const res = await API.post(`/supplier/add`, supplierData);
        console.log(res);
         return res.data;
    } catch (error) {
        console.log(error.message)
    }

}