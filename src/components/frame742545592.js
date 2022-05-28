import React from 'react'

import PropTypes from 'prop-types'

import styles from './frame742545592.module.css'

const Frame742545592 = (props) => {
  return (
    <a href={props.link} target="_blank" rel="noreferrer noopener">
      <div
        className={` ${styles['frame742545592']} ${
          styles[props.rootClassName]
        } `}
      >
        <span className={styles['text']}>{props.text}</span>
      </div>
    </a>
  )
}

Frame742545592.defaultProps = {
  text: 'Apply As A Project',
  link: 'https://yashadao.io',
  rootClassName: '',
}

Frame742545592.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Frame742545592
