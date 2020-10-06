import User from "models/User";
import {loginSuccess, logoutSuccess} from "store/reducers/user";

export const login = ({ username, password }) => async (dispatch) => {
    try {
        // await api.post('/api/auth/login/', { username, password })
        dispatch(
            loginSuccess(
                new User({ username }).toJson()
            )
        );
    } catch (e) {
        return console.error(e.message);
    }
};

export const logout = () => async (dispatch) => {
    try {
        // await api.post('/api/auth/logout/')
        return dispatch(logoutSuccess());
    } catch (e) {
        return console.error(e.message);
    }
};
