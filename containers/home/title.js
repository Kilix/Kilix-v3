import { createComponent } from 'react-fela'

const title = () => ({
  marginBottom: 15,
  fontSize: 2,
  fontWeight: 400,
  lineHeight: 1,
  textAlign: 'center',
  color: '#fff',
  tabletUp: {
    fontSize: 2.5,
  }
})

export default createComponent(title, 'h1')
