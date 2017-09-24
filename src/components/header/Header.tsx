import * as React from 'react'

// If you're using CSS Modules, TypeScript doesn't understand how to type them.
// You can use `require()` imports to easily fallback to an `any` type, or you
// can follow this workaround:
// https://stackoverflow.com/a/44228423
const styles = require('./Header.scss')
const logo = require('./logo.svg')

interface HeaderComponentProps {
  name: string
}

const Header: React.SFC<HeaderComponentProps> = ({ name }) => (
  <div className={styles.root}>
    <img src={logo} className={styles.reactLogo} alt="logo" />
    <h2>Welcome to {name}</h2>
  </div>
)

export default Header
