/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class AfConnectSectionView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/AfConnectSectionController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = AfConnectSectionView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    /* View has no WebFlow data attributes */

    scripts.concat(null).reduce((active, next) => Promise.resolve(active).then((active) => {
      const loading = active.loading.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return next
      })

      return active.isAsync ? next : loading
    }))
  }

  render() {
    const proxies = AfConnectSectionView.Controller !== AfConnectSectionView ? transformProxies(this.props.children) : {
      'af-metamask-connect-btn': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/joao-n-jose-testing.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-container w-container">
            {map(proxies['af-metamask-connect-btn'], props => <a href="#" {...{...props, className: `w-button ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Button Texasdasdsadt</React.Fragment>}</a>)}
          </div>
        </span>
      </span>
    )
  }
}

export default AfConnectSectionView

/* eslint-enable */