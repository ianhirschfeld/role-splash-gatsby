import React from 'react'
import { Link } from 'gatsby'

import styles from './pages.module.css'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default () => (
  <Layout isPlainFooter>
    <SEO title="404: Not Found" />

    <header className={styles.sections}>
      <h1 className={styles.logo}>Role</h1>
    </header>

    <div className={styles.sections}>
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2 className={`heading1 is-centered ${styles.sectionHeading1}`}>Whoops!</h2>
          <h3 className={`heading2 is-centered ${styles.sectionHeading2}`}>
            Looks like you're trying to travel down a path that doesn't exist
          </h3>
          <Link to="/" className={`button ${styles.button}`}>
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  </Layout>
)
