import axiosClient from "./axiosClient";

const productsApi = {
    getV1Dogs() {
        // const url = '/v1';   
        return axiosClient.get('/v1/dogs');
    },
    getV1Cats() {
        // const url = '/v1';
        return axiosClient.get('/v1/cats');
    },
    getV2Dogs() {
        // const url = '/v2';
        return axiosClient.get('/v2/dogs');
    },
    getV2Cats() {
        // const url = '/v2';
        return axiosClient.get('/v2/cats');
    }
};
export default productsApi;