import { defineStore } from 'pinia';

export const useHomeStore = defineStore('home', {
  state: () => ({
    currentId: '',
  }),
  actions: {
    setCurrentId(currentId: string) {
      this.currentId = currentId;
    },
  },
});
