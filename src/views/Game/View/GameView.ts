import { defineComponent, ref, computed } from 'vue';
import { useRoute } from 'vue-router';

import {
  getGameItem
} from '@/api';

import { GameList } from '@/types/Game';

export default defineComponent({
  name: 'GameView',
  components: {
    // JobList
  },
  setup() {
    const route = useRoute();

    // const game = ref<GameList>({});
    const gameData = ref({
      props: []
    });
    const getData = async():Promise<void> => {
      const { data: { game } } = await getGameItem(route.params.gamePath as string);
      gameData.value = {
        ...game,
        props: [
          { title: 'Рейтинг', value: game.bggRating, icon: 'el-icon-s-data' },
          { title: 'Комментарии', value: game.commentsTotal ? `${game.commentsTotal} шт` : '', icon: 'el-icon-s-comment' },
          { title: 'Игроков', value: `${game.playersMin} - ${game.playersMax}`, icon: 'el-icon-user-solid' },
          { title: 'Возраст', value: `от ${game.playersAgeMin} лет`, icon: 'el-icon-user' },
        ]
      };
    }
    getData();

    const gameProps = computed(() => gameData.value?.props?.filter(({value}) => value));

    return { gameData, gameProps };
  },
});