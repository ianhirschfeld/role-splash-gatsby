import React from 'react'

import styles from './index.module.css'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Wallpapers" />
      <div className={styles.sections}>
        <header className={styles.section}>
          <h1 className={styles.logo}>Role</h1>
        </header>
      </div>

      <div className={`${styles.sections} ${styles.isWhite}`}>
        <section className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={`heading1 is-centered red ${styles.sectionHeading}`}>Wallpapers</h2>
            <div className={styles.wallpapers}>
              <div className={styles.wallpaperPreview} />
              <p>Every World Wallpaper</p>
              <ul className="unstyled">
                <li>
                  <a href="/wallpapers/Role_EveryWorld_Wallpaper_16x10.jpg" download>
                    Download 16x10
                  </a>
                </li>
                <li>
                  <a href="/wallpapers/Role_EveryWorld_Wallpaper_16x9.jpg" download>
                    Download 16x9
                  </a>
                </li>
                <li>
                  <a href="/wallpapers/Role_EveryWorld_Wallpaper_UltraWide.jpg" download>
                    Download Ultra Wide
                  </a>
                </li>
                <li>
                  <a href="/wallpapers/Role_EveryWorld_Wallpaper_Mobile.jpg" download>
                    Download Mobile
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
