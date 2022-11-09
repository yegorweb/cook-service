import { defineStore } from 'pinia'
import { showToast, showToastFromServerResponse } from '../assets/show-toast'
import UserService from '../service/UserService'

function doCatch(err) {
    if (err.response) {
        showToastFromServerResponse(err.response.data)
    // } else if (err.request) {
    //     showToastFromServerResponse(err.request)
    } else {
        showToast('Нет соединения с сервером. Проверьте подключение к интернету.', 'error')
    }
}
export const useUserStore = defineStore('userStore', {
    state: () => ({
        isLoggedIn: false,
        user: null
    }),
    actions: {
        async login(userData) {
            UserService.login(userData).then((res) => {
                this.isLoggedIn = true
                this.user = res.data.user
                localStorage.setItem('token', res.data.accessToken)
                showToastFromServerResponse(res.data)
            }).catch(doCatch)
        },
        async registration(user) {
            UserService.registration(user).then((res) => {
                this.isLoggedIn = true
                this.user = res.data.user
                localStorage.setItem('token', res.data.accessToken)
                showToastFromServerResponse(res.data)
            }).catch(doCatch)
        },
        logout() {
            this.isLoggedIn = false
        }
    }
})
