import { defineComponent, ref, h } from 'vue'
import ComponentWithExposed from './ComponentWithExposed.vue'
export default defineComponent({
  name: 'StatefulRefComponentCompositionRaw',
  setup() {
    const myComponentRef = ref<InstanceType<typeof ComponentWithExposed> | null>(null)
    function changeValueFunc() {
      myComponentRef.value?.changeValueToRandom()
    }

    return () => {
      return h('div', null, [
        'Component with a ref on a child component and a button to trigger an action on said ref.',
        h('button', { onClick: changeValueFunc }, 'Change the value of my ref'),
        h(ComponentWithExposed, { ref: myComponentRef })
      ])
    }
  }
})
