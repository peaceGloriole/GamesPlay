import { login } from "../api/users-api";

export const useLogin = () => {
    const loginHandler = async (email, password) => {
        const result = await login(email, password);
    };
    return loginHandler;
};