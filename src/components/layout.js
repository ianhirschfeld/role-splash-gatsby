import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'

import './styles/normalize.css'
import './styles/global.css'
import styles from './layout.module.css'

const Layout = ({ children, articleClassName, isPlainFooter }) => {
  const year = new Date().getFullYear()
  const footerClassNames = [styles.footer]
  if (isPlainFooter) footerClassNames.push(styles.plainFooter)

  return (
    <>
      <Helmet>
        <link href="https://use.typekit.net/ynz5mmn.css" rel="stylesheet" />
        <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css" />
      </Helmet>

      <div className={styles.pageBackground} />

      <div className={styles.pageWrapper}>
        <nav className={styles.pageNav}>
          <a
            className={`${styles.socialIcon} ${styles.iconFacebook}`}
            href="https://www.facebook.com/PlayRoleApp"
            target="_blank"
          >
            Facebook
          </a>
          <a
            className={`${styles.socialIcon} ${styles.iconTwitter}`}
            href="https://twitter.com/RoleApp"
            target="_blank"
          >
            Twitter
          </a>
          <a
            className={`${styles.socialIcon} ${styles.iconYoutube}`}
            href="https://youtube.com/c/RoleApp"
            target="_blank"
          >
            YouTube
          </a>
          <a
            className={`${styles.socialIcon} ${styles.iconTwitch}`}
            href="https://twitch.tv/PlayRoleApp"
            target="_blank"
          >
            Twitch
          </a>

          <div className={styles.navSpacer} />

          <Link className={styles.navItem} to="/">
            Home
          </Link>
          <a className={styles.navItem} href="https://blog.playrole.com">
            Blog
          </a>
          <Link className={styles.navItem} to="/wallpapers">
            Wallpapers
          </Link>
          <a className="button" href="https://app.playrole.com">
            Login
          </a>
        </nav>

        <article className={articleClassName}>
          {children}
          <footer className={footerClassNames.join(' ')}>
            <div className={styles.footerContent}>
              &copy; {year} Role, Inc. All rights reserved. <Link to="/privacy">Privacy Policy</Link>.
            </div>
          </footer>
        </article>
      </div>

      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
          !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
          },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
          a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
          twq('init','o3jss');
          twq('track','PageView');
        `,
        }}
      />
    </>
  )
}

Layout.defaultProps = {
  isPlainFooter: false,
}

export default Layout
