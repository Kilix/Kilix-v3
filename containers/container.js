import { createComponent } from 'react-fela'

export const containerRules = () => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: 100,
  paddingTop: 60,
  paddingBottom: 20,
  paddingLeft: 20,
  paddingRight: 20,
  overflowX: 'hidden',
})

export default createComponent(containerRules, 'div')
