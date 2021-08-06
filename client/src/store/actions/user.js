import { USER_DATA } from '../types';

export const SET_USER_DATA = (payload) => {
    return { 
        type: USER_DATA,
        payload: payload
    }
}