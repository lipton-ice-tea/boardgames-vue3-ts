import { defineComponent, ref, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

import { GetRequest } from '@/types/Api'
import Cards from '@/components/Cards/Cards.vue'
import Grid from '@/components/Grid/Grid.vue'

import {
  getGameList
} from '@/api';

import { GameCard, ListView } from '@/types/Game';

export default defineComponent({
  name: 'GameList',
  components: {
    Cards,
    Grid
  },
  setup() {
    const router = useRouter();
    const store = useStore();

    // Сортировка
    const sortList = [
      { key: 'bggRating', title: 'Рейтинг' },
      { key: 'title', title: 'Название' },
    ];
    const keysSortList = sortList.map(item => item.key);
    type sortTypes = typeof keysSortList[number];
    const currentSort = ref<sortTypes>('bggRating');
    const changeSort = (value: sortTypes):void => {
      currentSort.value = value;
      getList();
    };

    // Список
    const gameList = ref<GameCard[]>([]);
    const getList = async():Promise<void> => {
      const request: GetRequest = {
        limit: 20,
        sort: currentSort.value
      }
      const { data } = await getGameList(request)
      gameList.value = data.filter((item: GameCard) => item.alias);
    }


    // Вид
    const currentView = ref<ListView>('card');
    const changeView = (value: ListView):void => {
      currentView.value = value;
    };
    const viewTypes = [
      { key: 'card' as ListView, icon: 'el-icon-menu' },
      { key: 'grid' as ListView, icon: 'el-icon-s-unfold' },
    ];


    // Переход к детальной странице
    const openDetail = (path: string):void => {
      store.commit('setCurrentSort', currentSort);
      store.commit('setCurrentView', currentView);
      router.push(`/${path}`);
    }


    //////
    onBeforeMount(() => {
      if (store.state.currentView) changeView(store.state.currentView);
      changeSort(store?.state?.currentSort || currentSort.value);
    });

    return { gameList, currentView, changeView, viewTypes, currentSort, sortList, changeSort, openDetail }
  },
});