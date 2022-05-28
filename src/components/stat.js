import React from 'react'

import PropTypes from 'prop-types'

import styles from './stat.module.css'

const Stat = (props) => {
  return (
    <div className={styles['frame3720713945']}>
      <div className={styles['frame3420713947']}>
        <span className={styles['text']}>{props.stat}</span>
        <span className={styles['text1']}>{props.title}</span>
      </div>
    </div>
  )
}

Stat.defaultProps = {
  stat: '1.2b',
  title: 'total projects marketcap',
}

Stat.propTypes = {
  stat: PropTypes.string,
  title: PropTypes.string,
}

export default Stat
