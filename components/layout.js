import { Provider } from 'react-fela'
import { getRenderer, getMountNode } from '../helpers/fela'

export default ({ children }) => (
  <Provider renderer={getRenderer()} mountNode={getMountNode()}>
    {children}
  </Provider>
)
