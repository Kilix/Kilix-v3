import { createComponent } from 'react-fela'

const textContact = ({hideOnMobile, fontSize, fontWeight}) => ({
  maxWidth: '400px',
  margin: 0,
  padding: 0,
  marginTop: 10,
  marginBottom: 10,
  fontSize: typeof fontSize === 'undefined' ? '2rem' : fontSize,
  fontWeight: typeof fontWeight === 'undefined' ? 400 : fontWeight,
  lineHeight: 1.5,
  textAlign: 'center',
  color: '#fff',
  extend: {
    condition: hideOnMobile === true,
    style: {
      marginBottom: '60px',
      mobile: {
        display: 'none',
      }
    }
  },
})

export default createComponent(textContact, 'h3')
