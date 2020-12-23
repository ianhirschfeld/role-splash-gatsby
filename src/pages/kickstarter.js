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
          content="0;url=https://www.kickstarter.com/projects/role/role-a-new-kind-of-platform-for-the-rpg-community?ref=3pr7wq"
        />
      </Helmet>
      <Layout articleClassName={styles.content} isPlainFooter>
        <h1 className={styles.logo}>Role</h1>
        <h2 className="heading1">Redirecting you to our Kickstarter page...</h2>
        <p>
          If you aren't automatically redirected in 1 second,{' '}
          <a href="https://www.kickstarter.com/projects/role/role-a-new-kind-of-platform-for-the-rpg-community?ref=3pr7wq">
            click here
          </a>
          .
        </p>
      </Layout>
    </>
  )
}
