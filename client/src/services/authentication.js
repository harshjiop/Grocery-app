import axios from 'axios';

const apiInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

class Authentication {

    async signUp(data) {
        try {
            const response = await apiInstance.post('/api/v1/users/register', data);

            if (response.data) {
                return response.data;
            }
        } catch (error) {
            throw error;
        }
    }


    async login(data) {
        try {
            const response = await apiInstance.post('/api/v1/users/login', data);

            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default new Authentication;