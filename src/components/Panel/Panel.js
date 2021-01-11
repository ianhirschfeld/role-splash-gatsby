import React, { Component } from 'react'
import styles from './Panel.module.css'

class Panel extends Component {
  render() {
    const { children, className } = this.props
    return (
      <div className={`box-shadow ${styles.container} ${className || ''}`}>
        <div className={styles.gradient} />
        <div className={styles.content}>{children}</div>
      </div>
    )
  }
}

export default Panel
