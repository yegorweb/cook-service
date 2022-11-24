import axios from 'axios'
import { defineStore } from 'pinia'
import { doCatch } from '../service/doCatch'

export const useItemsStore = defineStore('itemsStore', {
	actions: {
        async getItems() {
            let items
            await axios.get(import.meta.env.VITE_API_URL+'/items')
                .then((res) => {
                    items = res.data
                }).catch(doCatch)
            return items
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
