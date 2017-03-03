import { createComponent } from 'react-fela'
const container = ({color, gradient}) => ({
  flex: 1,
  display: 'flex',
  alignItems: 'stretch',
  backgroundColor: color,
  background: gradient,
})
export default createComponent(container, 'div')
