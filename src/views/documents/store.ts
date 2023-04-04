import axios from 'axios';
import { defineStore } from 'pinia';
import type { CardViewModel } from './interface.d';

export const useDocumentsStore = defineStore('documents', {
  state: () => ({
    list: <CardViewModel[]>[],
  }),
  actions: {
    query() {
      axios.get('/api/documents/list').then((res) => {
        const data = res.data;
        this.setList(data);
      });
    },
    setList(data: CardViewModel[]) {
      this.list = data;
    },
  },
});
