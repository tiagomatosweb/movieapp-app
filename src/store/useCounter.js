import { defineStore } from 'pinia';

export const useCounter = defineStore('counter', {
  state: () => ({
    counter: 2,
  }),
  actions: {
    increment() {
      this.counter++
    }
  },
  getters: {},
})
