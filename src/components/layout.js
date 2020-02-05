import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import './styles/normalize.css'
import './styles/global.css'
import styles from './layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link href='https://use.typekit.net/ynz5mmn.css' rel='stylesheet' />
        <link href='//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css' rel='stylesheet' type='text/css' />
      </Helmet>
      <div className={styles.pageWrapper}>
        {children}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
