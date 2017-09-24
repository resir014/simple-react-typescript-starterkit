import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import './index.scss'

import * as RoutesModule from './routes'

let routes = RoutesModule.routes

function renderApp() {
  ReactDOM.render(
    <BrowserRouter children={RoutesModule.routes} />,
    document.getElementById('app')
  )
}

renderApp()

// Allow Hot Module Replacement
if (module.hot) {
  module.hot.accept('./routes', () => {
    // tslint:disable-next-line
    routes = require<typeof RoutesModule>('./routes').routes
    renderApp()
  })
}
