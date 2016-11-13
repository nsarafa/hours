/**
 * @export Hamburger
 * @description hand made hamburger menu icon
 * @todo re-write using flexbox space-between
 *
 * @interface
 */

import React, { PropTypes } from 'react'

const style = {
  container: {
    alignItems: 'space-between',
    display: 'flex',
    flexDirection: 'column',
    width: 55,
  },
  layer: {
    backgroundColor: '#C0C0C0',
    height: 5,
    width: 'inherit',
  },
  break: {
    height: 20,
  },
}

const Hamburger = () => (
  <div style={style.container}>
    <div style={style.layer} />
    <div style={style.break} />
    <div style={style.layer} />
    <div style={style.break} />
    <div style={style.layer} />
  </div>
)

Hamburger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
}

Hamburger.defaultProps = {
  isOpen: false,
}

export default Hamburger