import { createComponent } from 'react-fela'

export default createComponent(() => ({
  position: 'absolute',
  right: 10,
  bottom: 10,
  color: 'white',
  fontSize: .8,
  tabletUp: {
    fontSize: 1,
  }
}))
