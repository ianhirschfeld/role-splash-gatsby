import React from 'react'

import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

import styles from './404.module.css'

const NotFoundPage = () => (
  <Layout articleClassName={styles.content} isPlainFooter>
    <SEO title="404: Not found" />
    <h1 className={styles.logo}>Role</h1>
    <h2 className="heading1 is-centered">Whoops!</h2>
    <h3 className="heading2 is-centered">Looks like you're trying to travel off the table</h3>
    <p>
      This is a non-existent page. In fact, there is only one page to this site. And it is{' '}
      <Link to="/">right here</Link>.
    </p>
  </Layout>
)

export default NotFoundPage
