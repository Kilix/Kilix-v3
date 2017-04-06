import { createComponent } from 'react-fela'

export default createComponent(({ isActive, isRounded }) => ({
  position: 'relative',
  marginTop: 25,
  marginBottom: 25,
  textAlign: 'center',
  ':after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 60,
    marginLeft: '20%',
    height: '0px',
    backgroundColor: '#FFFFFF',
    transition: 'height .3s ease-out'
  },
  extend: [
    {
        condition: isRounded,
        style: {
          border: '2px solid white',
          borderRadius: '50px',
          background: 'rgba(255, 255, 255, 0.2)',
          padding: '10px 23px',
          boxShadow: '0 3px 12px 1px rgba(0, 0, 0, 0.2);'
        }
    },
    {
      condition: isActive && !isRounded,
      style: {
        ':after': {
          height: '2px',
        }
      }
    },
  ],
  desktopUp: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 25,
    marginRight: 25,
  },
}), 'li')