import React from 'react'
import { Helmet } from 'react-helmet'

import styles from './pages.module.css'

import Layout from '../components/layout'

export default ({ data }) => {
  return (
    <Layout isPlainFooter>
      <Helmet>
        <meta http-equiv="refresh" content="5;url=https://blog.playrole.com" />
      </Helmet>

      <header className={styles.sections}>
        <h1 className={styles.logo}>Role</h1>
      </header>

      <div className={styles.sections}>
        <section className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={`heading1 is-centered ${styles.sectionHeading1}`}>Redirecting you to our blog...</h2>
            <p>
              If you aren't automatically redirected in 5 seconds, <a href="https://blog.playrole.com">click here</a>.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  )
}
