import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'

import '../styles/global.css'
import styles from './Layout.module.css'

import FacebookIcon from '../images/icons/FacebookIcon.svg'
import InstagramIcon from '../images/icons/InstagramIcon.svg'
import TwitchIcon from '../images/icons/TwitchIcon.svg'
import TwitterIcon from '../images/icons/TwitterIcon.svg'
import YoutubeIcon from '../images/icons/YoutubeIcon.svg'

class Layout extends Component {
  renderSocialLinks = () => {
    return (
      <>
        <a className={`box-shadow ${styles.socialIcon}`} href="https://twitter.com/RoleApp">
          <TwitterIcon />
          <span>Twitter</span>
        </a>
        <a className={`box-shadow ${styles.socialIcon}`} href="https://youtube.com/c/RoleApp">
          <YoutubeIcon />
          <span>YouTube</span>
        </a>
        <a className={`box-shadow ${styles.socialIcon}`} href="https://www.facebook.com/PlayRoleApp">
          <FacebookIcon />
          <span>Facebook</span>
        </a>
        <a className={`box-shadow ${styles.socialIcon}`} href="https://www.instagram.com/PlayRoleApp">
          <InstagramIcon />
          <span>Instagram</span>
        </a>
        <a className={`box-shadow ${styles.socialIcon}`} href="https://twitch.tv/PlayRoleApp">
          <TwitchIcon />
          <span>Twitch</span>
        </a>
      </>
    )
  }

  renderLinks = () => {
    return (
      <>
        <Link className={styles.navItem} to="/">
          Home
        </Link>
        <a className={styles.navItem} href="https://blog.playrole.com">
          Blog
        </a>
        <Link className={styles.navItem} to="/wallpapers">
          Wallpapers
        </Link>
        <div className={`${styles.navSpacer} ${styles.whenSmall}`} />
        <a className={`button is-white ${styles.loginButton}`} href="https://app.playrole.com">
          Login
        </a>
      </>
    )
  }

  render() {
    const { children, isPlainFooter } = this.props
    const year = new Date().getFullYear()
    const footerClassNames = [styles.footer]
    if (isPlainFooter) footerClassNames.push(styles.plainFooter)

    return (
      <>
        <Helmet>
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
          <link href="//use.typekit.net/ynz5mmn.css" rel="stylesheet" />
          <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css" />
        </Helmet>

        <div className={styles.background} />

        <div className={styles.container}>
          <nav className={styles.nav}>
            {this.renderSocialLinks()}
            <div className={styles.navSpacer} />
            {this.renderLinks()}
          </nav>

          <article>{children}</article>

          <footer className={footerClassNames.join(' ')}>
            <div className={styles.footerContent}>
              &copy; {year} Role, Inc. All rights reserved. <Link to="/privacy">Privacy Policy</Link>.
            </div>
          </footer>
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
}

Layout.defaultProps = {
  isPlainFooter: false,
}

export default Layout
