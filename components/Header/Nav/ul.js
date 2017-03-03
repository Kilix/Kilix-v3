import { createComponent } from 'react-fela'

const ul = () => ({
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    margin: 0,
    padding: 0,
    desktopUp: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    }
})

export default createComponent(ul, 'ul')
