import { createRenderer } from 'fela'

const renderer = createRenderer()

export function getRenderer () {
  return renderer
}

export function getMountNode () {
  if (typeof window !== 'undefined') {
    return document.getElementById('fela-stylesheet')
  }

  return undefined
}
