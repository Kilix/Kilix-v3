import { createComponent } from 'react-fela'

const title = () => ({
  maxWidth: '500px',
  margin: 0,
  padding: 0,
  color: '#fff',
  fontWeight: 200,
  fontSize: 1.1,
  textAlign: 'center',
  tabletUp: {
    marginBottom: 'auto',
  },
})

export default createComponent(title, 'h2')
