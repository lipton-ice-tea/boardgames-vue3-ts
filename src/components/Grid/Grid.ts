import { defineComponent, PropType } from 'vue';
import { GameCard } from '@/types/Game';

export default defineComponent({
  name: 'Grid',
  props: {
    list: {
        required: true,
        type: Object as PropType<GameCard[]>
    },
  },
  setup(props, { emit }) {
    const openDetail = (path: string):void => {
      emit('openDetail', path);
    }

    return { openDetail };
  },
});