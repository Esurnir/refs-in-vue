import { type SetupContext } from 'vue'

type FunctionalComponentProps = {
  level: number
}

function FunctionalTsx(props: FunctionalComponentProps, context: SetupContext) {
  const Tag = `h${props.level}`
  return <Tag>{context.slots.default?.()}</Tag>
}

FunctionalTsx.props = {
  level: {
    type: Number,
    required: true,
    validation(value: unknown) {
      return typeof value == 'number' && value >= 1 && value <= 6
    }
  }
}

export default FunctionalTsx
