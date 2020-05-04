import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'

import styles from './404.module.css'

export default ({ data }) => {
  return (
    <>
      <Helmet>
        <meta http-equiv="refresh" content="5;url=https://blog.playrole.com" />
      </Helmet>
      <Layout articleClassNames={[styles.content]} isPlainFooter>
        <h1 className={styles.logo}>Role</h1>
        <h2 className="heading1">Redirecting you to our blog...</h2>
        <p>
          If you aren't automatically redirected in 5 seconds, <a href="https://blog.playrole.com">click here</a>.
        </p>
      </Layout>
    </>
  )
}
