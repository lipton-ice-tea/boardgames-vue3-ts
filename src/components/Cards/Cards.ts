import { defineComponent, PropType , computed, ComputedRef } from 'vue';
import { GameCard } from '@/types/Game';

export default defineComponent({
  name: 'Card',
  props: {
    list: {
        required: true,
        type: Object as PropType<GameCard[]>
    },
  },
  setup(props, { emit }) {
    const computedList: ComputedRef<GameCard[]> = computed(() => props.list.map(game => ({
      ...game,
      props: [
        { title: 'Рейтинг', value: game.bggRating || '-' },
        { title: 'Комментарии', value: game.commentsTotal ? `${game.commentsTotal} шт` : '-' },
        { title: 'Год', value: game.year || '-' },
        { title: 'Игроков', value: (game.playersMin === game.playersMax ? game.playersMax : `${game.playersMin} - ${game.playersMax}`) as number | string },
        { title: 'Возраст', value: `от ${game.playersAgeMin} лет` },
      ]
    })));

    const openDetail = (path: string):void => {
      emit('openDetail', path);
    }
    return { computedList, openDetail }
  }
});