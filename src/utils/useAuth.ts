import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {useAppDispatch} from "../store/store";
import {setAuth} from "../store/auth/authSlice";


export const useAuth = () => {
    const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setAuth({ isAuthenticated, user }));
    }, [isAuthenticated, user, dispatch]);

    return { isAuthenticated, user, loginWithRedirect, logout };
};
