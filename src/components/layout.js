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
      <div className={styles.pageBackground} />
      <div className={styles.pageWrapper}>
        <nav className={styles.pageNav}>
          <a className={[styles.socialIcon, styles.iconFacebook].join(' ')} href='https://www.facebook.com/PlayRoleApp'>Facebook</a>
          <a className={[styles.socialIcon, styles.iconTwitter].join(' ')} href='https://twitter.com/RoleApp'>Twitter</a>
          <a className={[styles.socialIcon, styles.iconTwitch].join(' ')} href='https://twitch.tv/PlayRoleApp'>Twitch</a>
        </nav>
        {children}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
