import {Component} from 'react'
import { Provider, createComponent } from 'react-fela'
import { getRenderer, getMountNode } from '../helpers/fela'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Header from '../components/Header'
import HeaderBtn from '../components/Header/btn'
import Logo from '../components/Header/logo'

import Home from '../containers/home'
import Offres from '../containers/offres'
import Projets from '../containers/projets'
import Contact from '../containers/contact'

const Container = createComponent(() => ({
  flex: 1,
  display: 'flex',
  alignItems: 'stretch',
  width: 100,
  minHeight: '100vh',
}), 'div')

export default class Layout extends Component {
  static getInitialProps({ req }) {
    return typeof req === 'undefined'
      ? { path: null }
      : { path: req.url}
  }
  constructor(props){
    super(props)
    this.state = { open: false }
  }
  _close(){ this.setState({open: false}) }
  _open(){ this.setState({open: true}) }

  render() {
    const { children, path, url } = this.props
    return (
      <Provider renderer={getRenderer()} mountNode={getMountNode()}>
        <Container>
          <Header
            isOpen={this.state.open}
            closeAction={this._close.bind(this)}
            path={path === null ? `/${url.query.page}` : path}
          />
          <Logo isActive={(path==='/' || url.query.page === 'home')} />
          <HeaderBtn openAction={this._open.bind(this)}/>
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
              { 
                (path === '/' || url.query.page === 'home')
                && <Home url={url} key='home'/>
              }
              { 
                (path === '/offres' || url.query.page === 'offres')
                && <Offres url={url} key='offres'/>
              }
              { 
                (path === '/projets' || url.query.page === 'projets')
                && <Projets url={url} key='projets'/>
              }
              { 
                (path === '/contact' || url.query.page === 'contact')
                && <Contact url={url} key='contact'/>
              }
          </ReactCSSTransitionGroup>
        </Container>
      </Provider>
    )
  }
}
