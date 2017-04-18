import { createComponent } from 'react-fela'
import Link from 'next/link'


const GoTo = createComponent(() => ({
  fontSize: 1.2,
  lineHeight: 3.1,
  fontWeight: 400,
  textAlign: 'center',
  width: '120px',
  height: '120px',
  borderRadius: '50%',
  backgroundColor: '#f7654d',
  color: '#fff',
  position: 'absolute',
  bottom: 0,
  right: '50%',
  transform: 'translateY(60%) translateX(50%)',
  boxShadow: '0 0 20px 0px rgba(0, 0, 0, 0.3)',
  tabletUp: {
    // textAlign: 'center',
    // transform: 'translateY(20%) translateX(50%)',
    // lineHeight: 7,
    // fontSize: 1,
  },
  '>a': {
    color: 'white',
    textDecoration: 'none',
  }
}), 'div')


export default ({to, title}) => (
  <Link href={`/?page=${to}`} as={`/${to}`}>
    <a>
      <GoTo>
        {title}
      </GoTo>
    </a>
  </Link>
)