import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', () => {
    var isLoggedIn = ref(false)
    var userID = ''
    function getUserInfo() {
        if (isLoggedIn.value) {
            var userInfo = axios.get('http://localhost:3000/user?id='+userID)
            return {
                name: userInfo.name,
                phone: userInfo.phone
            }
        }
    }
})
