import { createComponent } from 'react-fela'

export const containerRules = ({ fullHeight, center }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: 100,
  paddingTop: 70,
  paddingBottom: 100,
  justifyContent: center ? 'center' : 'flex-start',
  position: 'relative',
  overflow: 'hidden',
  tabletUp: {
    paddingBottom: 0,
  },
  extend: {
    condition: fullHeight === true,
    style: {
      height: '100vh',
      overflow: 'hidden',
    }
  },
})

export default createComponent(containerRules, 'div')
