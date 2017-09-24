import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

// If you're using CSS Modules, TypeScript doesn't understand how to type them.
// You can use `require()` imports to easily fallback to an `any` type, or you
// can follow this workaround:
// https://stackoverflow.com/a/44228423
const styles = require('./Hello.scss')

const Hello: React.SFC<RouteComponentProps<{}>> = () => (
  <div className={styles.root}>
    <p>To get started, edit <code>src/components/home/Home.tsx</code> and save to reload.</p>
    <p>
      <a href="https://facebook.github.io/react/" target="_blank">React Documentation</a>
    </p>
  </div>
)

export default Hello
