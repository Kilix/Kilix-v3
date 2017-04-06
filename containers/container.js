import { createComponent } from 'react-fela'

export const containerRules = ({ fullHeight }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: 100,
  paddingTop: 70,
  extend: {
    condition: fullHeight === true,
    style: {
      height: '100vh',
      overflow: 'hidden',
    }
  },
})

export default createComponent(containerRules, 'div')
