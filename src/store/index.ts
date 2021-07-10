import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { ListView, SortType } from '@/types/Game';

interface State {
  currentSort: SortType,
  currentView: ListView
}
export const storeKey: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    currentSort: 'bggRating',
    currentView: 'card',
  },
  mutations: {
    setCurrentSort(state, currentSort: SortType) {
      state.currentSort = currentSort;
    },
    setCurrentView(state, currentView: ListView) {
      state.currentView = currentView;
    },
  },
  actions: {
  },
  modules: {
  }
})

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useStore() {
  return baseUseStore(storeKey)
}