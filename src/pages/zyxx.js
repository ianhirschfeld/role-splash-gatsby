import React from 'react'
import { Helmet } from 'react-helmet'

import styles from './pages.module.css'

import Layout from '../components/Layout'

export default ({ data }) => {
  return (
    <Layout isPlainFooter>
      <Helmet>
        <meta
          http-equiv="refresh"
          content="0;url=https://www.playrole.com/kickstarter_zyxx?utm_source=maximumfun.org&utm_medium=podcast&utm_campaign=zyxx"
        />
      </Helmet>

      <header className={styles.sections}>
        <h1 className={styles.logo}>Role</h1>
      </header>

      <div className={styles.sections}>
        <section className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={`heading1 is-centered ${styles.sectionHeading1}`}>Thank you for your support!</h2>
            <p>
              You should be redirected to our Kickstarter in 3 seconds. If you aren't,{' '}
              <a href="https://www.playrole.com/kickstarter_zyxx?utm_source=maximumfun.org&utm_medium=podcast&utm_campaign=zyxx">
                click here
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </Layout>
  )
}
