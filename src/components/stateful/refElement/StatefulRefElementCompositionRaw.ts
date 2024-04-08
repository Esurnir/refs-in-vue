import { defineComponent, ref, h } from 'vue'
export default defineComponent({
  name: 'StatefulRefElementCompositionRaw',
  setup() {
    const myInputRef = ref<HTMLInputElement | null>(null)
    function focusMyRef() {
      myInputRef.value?.focus()
    }

    return () => {
      return h('div', null, [
        'Component with a ref on an html element and a button to trigger an action on said ref.',
        h('button', { onClick: focusMyRef }, 'Focus My Ref'),
        h('input', { ref: myInputRef, type: 'text' })
      ])
    }
  }
})
