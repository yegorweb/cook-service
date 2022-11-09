import { showToast, showToastFromServerResponse } from "../assets/show-toast"

export function doCatch(err) {
    if (err.response) {
        showToastFromServerResponse(err.response.data)
    // } else if (err.request) {
    //     showToastFromServerResponse(err.request)
    } else {
        showToast('Нет соединения с сервером. Проверьте подключение к интернету.', 'error')
    }
}