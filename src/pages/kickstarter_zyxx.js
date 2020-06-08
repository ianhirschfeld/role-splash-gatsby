import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'

import styles from './404.module.css'

export default ({ data }) => {
  return (
    <>
      <Helmet>
        <meta
          http-equiv="refresh"
          content="3;url=https://www.kickstarter.com/projects/role/role-a-new-kind-of-platform-for-the-rpg-community?ref=8cfxa3"
        />
      </Helmet>
      <Layout articleClassNames={[styles.content]} isPlainFooter>
        <h1 className={styles.logo}>Role</h1>
        <h2 className="heading1">Thank you for your support!</h2>
        <p>
          You should be redirected to our Kickstarter in 3 seconds. If you aren't,{' '}
          <a href="https://www.kickstarter.com/projects/role/role-a-new-kind-of-platform-for-the-rpg-community?ref=8cfxa3">
            click here
          </a>
          .
        </p>
      </Layout>
    </>
  )
}