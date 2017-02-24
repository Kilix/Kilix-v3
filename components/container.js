import { createComponent } from 'react-fela'

const container = () => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: 100,
  height: 100,
  paddingTop: 0,
  overflow: 'hidden',
  desktopUp: {
    paddingTop: 90,
  },
})

export default createComponent(container, 'div')
