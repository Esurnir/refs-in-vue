import { defineComponent } from 'vue'
import ComponentWithExposed from './ComponentWithExposed.vue'
export default defineComponent({
  name: 'StatefulRefComponentOptionsRaw',
  methods: {
    changeValueFunc() {
      ;(
        this.$refs.myInputRef as InstanceType<typeof ComponentWithExposed> | null
      )?.changeValueToRandom()
    }
  },
  render() {
    return (
      <div>
        Component with a ref on a child component and a button to trigger an action on said ref.
        <button onClick={this.changeValueFunc}>Change the value of my ref</button>
        <ComponentWithExposed ref="myInputRef" />
      </div>
    )
  }
})
