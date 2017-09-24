import * as React from 'react'
import { Route } from 'react-router-dom'

import Root from './Root'
import Hello from './components/hello/Hello'

export const routes = (
  <Root>
    <Route exact={true} path="/" component={Hello} />
  </Root>
)
