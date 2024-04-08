import { defineComponent } from 'vue'
export default defineComponent({
  name: 'StatefulRefElementOptionsTsx',
  methods: {
    focusMyRef() {
      ;(this.$refs.myInputRef as HTMLInputElement | null)?.focus()
    }
  },
  render() {
    return (
      <div>
        Component with a ref on an html element and a button to trigger an action on said ref.
        <button onClick={this.focusMyRef}>Focus My Ref</button>
        <input ref="myInputRef" type="text" />
      </div>
    )
  }
})
