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
  height: 100,
  padding: 0,
  margin: 0,
  fontFamily: "'Exo 2', sans-serif",
  fontSize: '14px',
  fontWeight: 300,
  lineHeight: 1.5,
}, 'body')
renderer.renderStatic({
  width: 100,
  height: 100,
}, ['#__next', '#__next>div', '#__next>div>div'])

export function getRenderer () {
  return renderer
}

export function getMountNode () {
  if (typeof window !== 'undefined') {
    return document.getElementById('fela-stylesheet')
  }

  return undefined
}
