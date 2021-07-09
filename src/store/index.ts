import { createStore } from 'vuex'

export default createStore({
  state: {
    currentSort: '' as string,
    currentView: '' as string,
  },
  mutations: {
    setCurrentSort(state, currentSort) {
      state.currentSort = currentSort;
    },
    setCurrentView(state, currentView) {
      state.currentView = currentView;
    },
  },
  actions: {
  },
  modules: {
  }
})
