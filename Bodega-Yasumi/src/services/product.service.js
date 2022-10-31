import { loadAbort } from '../utils/loadAbortAxios'
import axios from 'axios'
import consts from '../utils/consts'

export const getProducts = () => {
    const controller = loadAbort()

    return {
        call: axios.get(`${consts.API_URL}/productos`, { signal: controller.signal }),
        controller
    }
}