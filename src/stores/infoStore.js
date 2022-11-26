import axios from 'axios'
import { defineStore } from 'pinia'
import { doCatch } from '../service/doCatch'

export const useInfoStore = defineStore('infoStore', {
	actions: {
        async getItems() {
            let items
            await axios.get(import.meta.env.VITE_API_URL+'/items')
                .then((res) => {
                    items = res.data
                }).catch(doCatch)
            return items
        },
        async getItem(id) {
            let item
            await axios.get(import.meta.env.VITE_API_URL+'/item/?id='+id)
                .then((res) => {
                    item = res.data
                }).catch(doCatch)
            return item
        },
        async getInfo() {
            let info
            await axios.get(import.meta.env.VITE_API_URL+'/info')
                .then((res) => {
                    info = res.data
                }).catch(doCatch)
            return info
        }
    }
})
