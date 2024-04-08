import { defineComponent, ref } from 'vue'
import ComponentWithExposed from './ComponentWithExposed.vue'
export default defineComponent({
  name: 'StatefulRefComponentCompositionTsx',
  setup() {
    const myComponentRef = ref<InstanceType<typeof ComponentWithExposed> | null>(null)
    function changeValueFunc() {
      myComponentRef.value?.changeValueToRandom()
    }

    return () => (
      <div>
        Component with a ref on a child component and a button to trigger an action on said ref.
        <button onClick={changeValueFunc}>Change the value of my ref</button>
        <ComponentWithExposed ref={myComponentRef} />
      </div>
    )
  }
})
