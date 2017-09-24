import * as React from 'react'

import Header from './components/header/Header'

class Root extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <Header name="React" />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Root
