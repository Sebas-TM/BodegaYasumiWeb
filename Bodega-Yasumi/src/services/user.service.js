import { loadAbort } from "../utils/loadAbortAxios";
import axios from 'axios'
import consts from '../utils/consts'

export const login = ({email, password}) => {

    const controller = loadAbort()

    return {
        call: axios.post(`${consts.API_URL}/usuarios/sign-in`, { email, password }),
        controller
    }
}

export const registerUser = (user) => {

    const controller = loadAbort()

    return {
        call: axios.post(`${consts.API_URL}/usuarios/`, {...user, isAdmin: 0, estado: 1}),
        controller
    }
}