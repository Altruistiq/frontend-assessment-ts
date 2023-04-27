import { defineStore } from 'pinia'
import axios from 'axios'

import { API_CREDENTIALS } from '@/lib/constants/API_CREDENTIALS'

import type { Country, CountryEmissionsForYear } from '@/typings/Country'

export const useDataStore = defineStore('data', {
  state: () => ({}),
  
  actions: {
    async getCountries() {
      const { data } = await axios.get<Country[]>('https://api.footprintnetwork.org/v1/countries', {
        headers: {
          Authorization: API_CREDENTIALS,
        },
      })

      return data
    },

    // get a single country by countryCode
    async getCountry(countryCode: number) {
      const { data } = await axios.get<CountryEmissionsForYear[]>(
        `https://api.footprintnetwork.org/v1/data/${countryCode}/all/EFCpc`,
        {
          headers: {
            Authorization: API_CREDENTIALS,
          },
        }
      )

      return data
    },
  },
})
