import { createComponent } from 'react-fela'

const title = () => ({
  margin: 0,
  padding: 0,
  marginBottom: 15,
  fontSize: 2,
  fontWeight: 400,
  lineHeight: 1,
  textAlign: 'center',
  color: '#fff',
  tabletUp: {
    fontSize: 2.5,
    marginTop: 'auto',
  }
})

export default createComponent(title, 'h1')
