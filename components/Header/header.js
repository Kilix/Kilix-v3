import { createComponent } from 'react-fela'

const header = ({isOpen}) => ({
  zIndex: 10,
  position: 'fixed',
  width: 100,
  height: 100,
  overflow: 'hidden',
  backgroundColor: 'rgba(38, 187, 215, 1.0)',
  transition: 'transform .3s ease-out',
  transform: 'translateY(100%)',
  extend: {
    condition: isOpen,
    style: { transform: 'translateY(0%)' },
  },
  desktopUp: {
    height: '90px',
    backgroundColor: 'transparent',
    transform: 'translateY(0%)',
  },
})

export default createComponent(header, 'header')
