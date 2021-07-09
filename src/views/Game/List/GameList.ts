import { defineComponent, ref } from 'vue'
import { GetRequest } from '@/types/Api'
import Cards from '@/components/Cards/Cards.vue'
import Grid from '@/components/Grid/Grid.vue'

import {
  getGameList
} from '@/api';

import { GameCard, ListView } from '@/types/Game';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

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
      { key: 'title', title: 'Название' },
      { key: 'bggRating', title: 'Рейтинг' },
      { key: 'year', title: 'Год' }
    ];
    const keysSortList = sortList.map(item => item.key);
    type sortTypes = typeof keysSortList[number];
    const currentSort = ref<sortTypes>('title');
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
    getList();


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
    return { gameList, currentView, changeView, viewTypes, currentSort, sortList, changeSort, openDetail }
  },
});