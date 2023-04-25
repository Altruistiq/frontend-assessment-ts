import { defineStore } from 'pinia'

const API_CREDENTIALS = import.meta.env.VITE_API_CREDENTIALS || ''

export const useDataStore = defineStore('data', {
  actions: {
    async getCountries() {
      const resp = await fetch('https://api.footprintnetwork.org/v1/countries', {
        method: 'GET',
        headers: {
          Authorization: API_CREDENTIALS,
        },
      })

      return await resp.json()
    },

    // get a single country by countryCode
    async getCountry({ countryCode }: { countryCode: number }) {
      const resp = await fetch(`https://api.footprintnetwork.org/v1/data/${countryCode}/all/EFCpc`, {
        method: 'GET',
        headers: {
          Authorization: API_CREDENTIALS,
        },
      })

      return await resp.json()
    },
  },
})
