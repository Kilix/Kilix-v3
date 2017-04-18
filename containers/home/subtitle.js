import { createComponent } from 'react-fela'

const subtitle = () => ({
  margin: 0,
  color: '#fff',
  fontWeight: 200,
  fontSize: 1.1,
  textAlign: 'center',
  tabletUp: {
    fontSize: 1.5,
  },
})

export default createComponent(subtitle, 'h2')
