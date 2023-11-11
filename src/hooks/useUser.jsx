import {getMeApi} from '../api/user';

export const useUser = () => {
    const getMe = async (token) => {
        const response = await getMeApi(token);
        return response;
    }

    return {
        getMe,
    };
}