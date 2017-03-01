import {Component} from 'react'
import { Provider, createComponent } from 'react-fela'
import { getRenderer, getMountNode } from '../helpers/fela'

import Header from '../components/Header'
import HeaderBtn from '../components/Header/btn'
import Logo from '../components/Header/logo'

const container = ({color, gradient}) => ({
  backgroundColor: color,
  background: gradient,
})

const Container = createComponent(container, 'div')

export default class Layout extends Component {
  constructor(props){
    super(props)
    this.state = { open: false }
  }
  _close(){ this.setState({open: false}) }
  _open(){ this.setState({open: true}) }

  render() {
    const { children, color, gradient, path } = this.props
    return (
      <Provider renderer={getRenderer()} mountNode={getMountNode()}>
        <Container {...{color, gradient}}>
          <Header
            isOpen={this.state.open}
            closeAction={this._close.bind(this)}
            path={path}
          />
          <Logo isActive={path==='/'} />
          <HeaderBtn openAction={this._open.bind(this)}/>
          {children}
        </Container>
      </Provider>
    )
  }
}
