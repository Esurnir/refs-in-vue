import { h, type SetupContext } from 'vue'

type FunctionalComponentProps = {
  level: number
}

function FunctionalRaw(props: FunctionalComponentProps, context: SetupContext) {
  return h(`h${props.level}`, null, context.slots.default?.())
}

FunctionalRaw.props = {
  level: {
    type: Number,
    required: true,
    validation(value: unknown) {
      return typeof value == 'number' && value >= 1 && value <= 6
    }
  }
}

export default FunctionalRaw
