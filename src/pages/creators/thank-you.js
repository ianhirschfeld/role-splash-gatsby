import React from 'react'

import styles from '../pages.module.css'

import Layout from '../../components/Layout'
import SEO from '../../components/seo'

export default () => (
  <Layout isPlainFooter>
    <SEO title="Thank You" />

    <header className={styles.sections}>
      <h1 className={`${styles.logo} ${styles.isSmall}`}>Role</h1>
    </header>

    <div className={styles.sections}>
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2 className={`heading1 is-centered ${styles.sectionHeading1}`}>Woohoo, You're All Set!</h2>
          <p>
            Thank you for your interest in our Creators Program! Once we review your submission we will get back to you
            via email.
          </p>
        </div>
      </section>
    </div>
  </Layout>
)
