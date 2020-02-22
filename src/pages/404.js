import React from 'react'

import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

import styles from './404.module.css'

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Not found' />
    <article className={styles.content}>
      <h1 className={styles.logo}>Role</h1>
      <h2 className='heading1'>Whoops!</h2>
      <h3 className='heading2'>Looks like you're trying to travel off the table</h3>
      <p>This is a non-existent page. In fact, there is only one page to this site. And it is <Link to='/'>right here</Link>.</p>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>&copy; 2020 Role, Inc. All rights reserved.</div>
      </footer>
    </article>
  </Layout>
)

export default NotFoundPage
