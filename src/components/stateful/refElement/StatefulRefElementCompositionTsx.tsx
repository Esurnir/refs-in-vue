import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'StatefulRefElementCompositionTsx',
  setup() {
    const myInputRef = ref<HTMLInputElement | null>(null)
    function focusMyRef() {
      myInputRef.value?.focus()
    }

    return () => (
      <div>
        Component with a ref on an html element and a button to trigger an action on said ref.
        <button onClick={focusMyRef}>Focus My Ref</button>
        <input ref={myInputRef} type="text" />
      </div>
    )
  }
})
