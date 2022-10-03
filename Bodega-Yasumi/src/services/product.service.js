import { loadAbort } from '../utils/loadAbortAxios'

export const getProducts = () => {
    const controller = loadAbort()

    return {
        call: axios.get('/url/', { signal: controller.signal }),
        controller
    }
}