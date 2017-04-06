import { createComponent, connect } from 'react-fela'
import Router from 'next/router'
import Li from './li'

const Link = createComponent(({ isRounded }) => ({
  fontSize: 2,
  fontWeight: '300',
  color: '#fff',
  textDecoration: 'none',
  desktopUp: {
    fontSize: 1,
  },
}), 'a', ['href', 'as', 'onClick'])

export default ({ href, as, isActive, closeAction, text, isRounded}) => (
  <Li {...{isActive, isRounded}}>
    <Link {...{href, as, isRounded}}
      onClick={(e) => { e.preventDefault(); closeAction(); Router.push(href, as) }}
    >
      <span>{text}</span>
    </Link>
  </Li>
)
