import { createComponent } from 'react-fela'

const title = () => ({
  display: 'none',
  tabletUp: {
    display: 'block',
    margin: 0,
    padding: 0,
    marginBottom: 15,
    fontSize: 2,
    fontWeight: 400,
    lineHeight: 1,
    textAlign: 'center',
    color: '#fff',
  },
})

export default createComponent(title, 'h3')
