import { defineComponent, ref } from 'vue'
import { GetRequest } from '@/types/Api'
import Cards from '@/components/Cards/Cards.vue'
import Grid from '@/components/Grid/Grid.vue'

import {
  getGameList
} from '@/api';

import { GameItem } from '@/types/Game';

export default defineComponent({
  name: 'GameList',
  components: {
    Cards,
    Grid
  },
  setup() {
    // Список
    const gameList = ref<GameItem[]>([]);

    const getList = async() => {
      const request: GetRequest = {
        limit: 20
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { data } = await getGameList(request)
      gameList.value = data;
    }
    getList();

    return { gameList }
  },
});