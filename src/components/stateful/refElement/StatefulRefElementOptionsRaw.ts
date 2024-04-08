import { defineComponent, h } from 'vue'
export default defineComponent({
  name: 'StatefulRefElementOptionsRaw',
  methods: {
    focusMyRef() {
      ;(this.$refs.myInputRef as HTMLInputElement | null)?.focus()
    }
  },
  render() {
    return h('div', null, [
      'Component with a ref on an html element and a button to trigger an action on said ref.',
      h('button', { onClick: this.focusMyRef }, 'Focus My Ref'),
      h('input', { ref: 'myInputRef', type: 'text' })
    ])
  }
})
