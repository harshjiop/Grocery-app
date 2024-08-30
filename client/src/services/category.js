import axios from "axios";

const apiInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

class Category {

    async getAllCategory(token) {
        try {
            const response = await apiInstance.get('/api/v1/category/all-category',
                {
                    headers: {
                        Authorization: token
                    }
                }
            );

            if (response.data) {
                return response.data;
            }

        } catch (error) {
            throw error;
        }
    }
}


export default new Category;