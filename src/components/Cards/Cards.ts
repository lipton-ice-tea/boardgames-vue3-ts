import { defineComponent, PropType } from 'vue';
import { GameItem } from '@/types/Game';

export default defineComponent({
  name: 'Card',
  props: {
    list: {
        required: true,
        type: Object as PropType<GameItem[]>
    },
},
});