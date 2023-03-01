import axios from "axios";

export const loginUser = async (user, password) => {
    try {
        const response = await axios.post("http://localhost:3001/api/v1/user/login", { email: user, password: password });
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error.response);
    }
};

export const recoverDataUser = async (token) => {
    try {
        const response = await axios.post("http://localhost:3001/api/v1/user/profile", {}, { headers: { Authorization: "Bearer" + token } });
        return response.data;
    } catch (error) {
        console.log(error.response);
    }
};