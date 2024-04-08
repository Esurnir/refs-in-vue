import { defineComponent, h, ref, createVnode, createTextNode } from 'vue'
import ComponentWithExposed from '@/stateful/refComponent/ComponentWithExposed.vue'

defineComponent({
  name: 'StatefulRefComponentCompositionRaw',
  setup() {
    const e = ref(null)
    function t() {
      var n
      ;(n = e.value) == null || n.changeValueToRandom()
    }
    return () =>
      h('div', null, [
        'Component with a ref on a child component and a button to trigger an action on said ref.',
        h(
          'button',
          {
            onClick: t
          },
          'Change the value of my ref'
        ),
        h(ComponentWithExposed, {
          ref: e
        })
      ])
  }
})

defineComponent({
  name: 'StatefulRefComponentCompositionTsx',
  setup() {
    const e = ref(null)
    function t() {
      var n
      ;(n = e.value) == null || n.changeValueToRandom()
    }
    return () =>
      createVnode('div', null, [
        createTextNode(
          'Component with a ref on a child component and a button to trigger an action on said ref.'
        ),
        createVnode(
          'button',
          {
            onClick: t
          },
          [createTextNode('Change the value of my ref')]
        ),
        createVnode(
          ComponentWithExposed,
          {
            ref: e
          },
          null
        )
      ])
  }
})
defineComponent({
  name: 'StatefulRefComponentOptionsRaw',
  methods: {
    changeValueFunc() {
      var e
      ;(e = this.$refs.myInputRef) == null || e.changeValueToRandom()
    }
  },
  render() {
    return h('div', null, [
      'Component with a ref on a child component and a button to trigger an action on said ref.',
      h(
        'button',
        {
          onClick: this.changeValueFunc
        },
        'Change the value of my ref'
      ),
      h(ComponentWithExposed, {
        ref: 'myInputRef'
      })
    ])
  }
})
defineComponent({
  name: 'StatefulRefComponentOptionsRaw',
  methods: {
    changeValueFunc() {
      var e
      ;(e = this.$refs.myInputRef) == null || e.changeValueToRandom()
    }
  },
  render() {
    return createVnode('div', null, [
      createTextNode(
        'Component with a ref on a child component and a button to trigger an action on said ref.'
      ),
      createVnode(
        'button',
        {
          onClick: this.changeValueFunc
        },
        [createTextNode('Change the value of my ref')]
      ),
      createVnode(
        ComponentWithExposed,
        {
          ref: 'myInputRef'
        },
        null
      )
    ])
  }
})
defineComponent({
  name: 'StatefulRefElementCompositionRaw',
  setup() {
    const e = ref(null)
    function t() {
      var n
      ;(n = e.value) == null || n.focus()
    }
    return () =>
      h('div', null, [
        'Component with a ref on an html element and a button to trigger an action on said ref.',
        h(
          'button',
          {
            onClick: t
          },
          'Focus My Ref'
        ),
        h('input', {
          ref: e,
          type: 'text'
        })
      ])
  }
})
defineComponent({
  name: 'StatefulRefElementOptionsRaw',
  methods: {
    focusMyRef() {
      var e
      ;(e = this.$refs.myInputRef) == null || e.focus()
    }
  },
  render() {
    return h('div', null, [
      'Component with a ref on an html element and a button to trigger an action on said ref.',
      h(
        'button',
        {
          onClick: this.focusMyRef
        },
        'Focus My Ref'
      ),
      h('input', {
        ref: 'myInputRef',
        type: 'text'
      })
    ])
  }
})
defineComponent({
  name: 'StatefulRefElementOptionsTsx',
  methods: {
    focusMyRef() {
      var e
      ;(e = this.$refs.myInputRef) == null || e.focus()
    }
  },
  render() {
    return createVnode('div', null, [
      createTextNode(
        'Component with a ref on an html element and a button to trigger an action on said ref.'
      ),
      createVnode(
        'button',
        {
          onClick: this.focusMyRef
        },
        [createTextNode('Focus My Ref')]
      ),
      createVnode(
        'input',
        {
          ref: 'myInputRef',
          type: 'text'
        },
        null
      )
    ])
  }
})
defineComponent({
  name: 'StatefulRefElementCompositionTsx',
  setup() {
    const e = ref(null)
    function t() {
      var n
      ;(n = e.value) == null || n.focus()
    }
    return () =>
      createVnode('div', null, [
        createTextNode(
          'Component with a ref on an html element and a button to trigger an action on said ref.'
        ),
        createVnode(
          'button',
          {
            onClick: t
          },
          [createTextNode('Focus My Ref')]
        ),
        createVnode(
          'input',
          {
            ref: e,
            type: 'text'
          },
          null
        )
      ])
  }
})

function FunctionalRaw(e, t) {
  var n, s
  return h(`h${e.level}`, null, (s = (n = t.slots).default) == null ? void 0 : s.call(n))
}

function FunctionalTsx(e, t) {
  const n = `h${e.level}`
  return createVnode(n, null, {
    default: () => {
      var s, o
      return [(o = (s = t.slots).default) == null ? void 0 : o.call(s)]
    }
  })
}
