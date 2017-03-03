import { createComponent } from 'react-fela'

const title = () => ({
  margin: 0,
  padding: 0,
  color: '#fff',
  fontWeight: 200,
  fontSize: 1.1,
  textAlign: 'center',
  tabletUp: {
    fontSize: 1.5,
  },
})

export default createComponent(title, 'h2')
