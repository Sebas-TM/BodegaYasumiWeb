import { loadAbort } from '../utils/loadAbortAxios'
import axios from 'axios'
import consts from '../utils/consts'

export const getPurchases = () => {
    const controller = loadAbort()

    return {
        call: axios.get(`${consts.API_URL}/ventas`, { signal: controller.signal }),
        controller
    }
}