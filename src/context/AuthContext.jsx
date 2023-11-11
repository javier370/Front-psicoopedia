import { createContext, useEffect, useState } from "react";
import {getToken, setToken} from '../api/token';
import {useUser} from '../hooks';

export const AuthContext = createContext({
    auth: undefined,
    login: () => null,
    logout: () => null,
});

export const AuthProvider = (props) => {
    const {children} = props;
    const [auth, setAuth] = useState(undefined);
    const {getMe} = useUser();

    useEffect(() => {
        (async () => {
            const token = getToken();
            if (token){
                const me = await getMe(token);
                setAuth({token, me})
            }
        })()
    }, []);

    const login = async (token) => {
        //console.log('Context login --->', token)
        setToken(token);
        const me = await getMe(token);
        setAuth({token, me});
    }

    const valueContext = {
        auth,
        login,
        logout: () => console.log('Cerrando sesión')
    }

    return (
        <AuthContext.Provider value={valueContext}>
            {children}
        </AuthContext.Provider>
    )
}
