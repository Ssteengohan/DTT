import { defineStore } from 'pinia'

const myHeaders = new Headers();
myHeaders.append("X-Api-Key", "P8v4swpqKDBnkj3HZbSYoFRielzmW6au");

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

export const useHousesStore = defineStore({
  id: 'houses',
  state: () => ({
    houses: []
  }),
  actions: {
    async fetchHouses() {
      try {
        const response = await fetch("https://api.intern.d-tt.nl/api/houses", requestOptions)
        this.houses = await response.json()
      } catch (error) {
        console.log('error', error)
      }
    }
  }
})