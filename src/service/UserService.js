import axios from "axios"

export default {
    async registration(user) {
        return await axios.post('http://localhost:3000/auth/registration', user)
    },
    async login(userData) {
        return await axios.post('http://localhost:3000/auth/login', userData)
    }
}