import axios from 'axios';

export const axiosData = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch(error) {
        console.log("API 요청 실패:", error);
        throw error;
    }
};