import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'

import './styles/normalize.css'
import './styles/global.css'
import styles from './layout.module.css'

const Layout = ({ children, articleClassNames, isPlainFooter }) => {
  const footerClassNames = [styles.footer, (isPlainFooter ? styles.plainFooter : '')]
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
          <div className={styles.navSpacer} />
          <Link className={styles.navItem} to='/'>Home</Link>
          <a className={styles.button} href='https://blog.playrole.com'>Blog</a>
        </nav>
        <article className={articleClassNames.join(' ')}>
          {children}
          <footer className={footerClassNames.join(' ')}>
            <div className={styles.footerContent}>&copy; 2020 Role, Inc. All rights reserved. <Link to='/privacy'>Privacy Policy</Link>.</div>
          </footer>
        </article>
      </div>
      <script
        type='text/javascript'
        dangerouslySetInnerHTML={{
          __html: `
          !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
          },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
          a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
          twq('init','o3jss');
          twq('track','PageView');
        `
        }}
      />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  articleClassNames: PropTypes.array,
  isPlainFooter: PropTypes.bool
}

Layout.defaultProps = {
  articleClassNames: [],
  isPlainFooter: false
}

export default Layout
