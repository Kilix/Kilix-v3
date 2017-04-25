import { createRenderer } from 'fela'
import namedMediaQuery from 'fela-plugin-named-media-query'
import unitPlugin from 'fela-plugin-unit'
import LVHA from 'fela-plugin-lvha'
import prefixer from 'fela-plugin-prefixer'
import extend from 'fela-plugin-extend'

const mediaQueries = {
  mobile: '@media (max-width: 768px)',
  tabletUp: '@media (min-width: 769px)',
  tabletOnly: '@media (min-width: 769px) and (max-width: 1024px)',
  desktopUp: '@media (min-width: 1025px)',
  desktopOnly: '@media (min-width: 1025px) and (max-width: 1440px)',
  largeUp: '@media (min-width: 1441px)',
}

const unit = unitPlugin('px', {
  width: '%',
  height: '%',
  fontSize: 'rem',
})

const renderer = createRenderer({
  plugins: [
    unit,
    LVHA(),
    namedMediaQuery(mediaQueries),
    extend(),
    prefixer(),
  ]
})

renderer.renderStatic({boxSizing: 'border-box'}, '*')
renderer.renderStatic({
  position: 'relative',
  top: 0,
  left: 0,
  width: 100,
  height: 100,
}, 'html')
renderer.renderStatic({
  position: 'relative',
  top: 0,
  left: 0,
  width: 100,
  minHeight: '100%',
  padding: 0,
  margin: 0,
  '-webkit-font-smoothing': 'subpixel-antialiased',
  fontFamily: "'Exo 2', sans-serif",
  fontSize: '14px',
  fontWeight: 200,
  lineHeight: 1.5,
}, 'body')
renderer.renderStatic({
  display: "flex",
  flexDirection: 'column',
  alignItems: 'stretch',
  width: 100,
  minHeight: '100vh',
}, ['#__next', '#__next>div', '#__next>div>div', '#__next>div>div>span'])

renderer.renderStatic(`
.animation-enter {
  z-index: 2;
  flex: 1;
  display: flex;
  alignItems: stretch;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  clip-path: circle(0% at 50% 100vh);
  transition: all .5s ease-in;
}

.animation-enter.animation-enter-active {
  clip-path: circle(120vh at 50% 100vh);
}

.animation-leave {
  z-index: 1;
  display: flex;
  alignItems: stretch;
  width: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
}

.animation-leave.animation-leave-active {
}

@media (min-width: 1025px) {
  .animation-enter {
    clip-path: circle(0% at 50% 100vh);
  }
  
  .animation-enter.animation-enter-active {
    clip-path: circle(100vw at 50% 100vh);
  }
}

`)

export function getRenderer () {
  return renderer
}

export function getMountNode () {
  if (typeof window !== 'undefined') {
    return document.getElementById('fela-stylesheet')
  }

  return undefined
}
