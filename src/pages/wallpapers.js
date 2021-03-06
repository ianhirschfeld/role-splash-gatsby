import React from 'react'

import pageStyles from './pages.module.css'
import styles from './index.module.css'

import Layout from '../components/Layout'
import SEO from '../components/seo'

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Wallpapers" />

      <div className={pageStyles.sections}>
        <header className={pageStyles.section}>
          <div className={`${pageStyles.logo} ${pageStyles.isSmall}`}>Role</div>
        </header>
      </div>

      <div className={`${pageStyles.sections} ${pageStyles.isWhite}`}>
        <section className={pageStyles.section}>
          <div className={pageStyles.sectionContent}>
            <h1 className={`heading1 is-centered red ${pageStyles.sectionHeading1}`}>Wallpapers</h1>
            <div className={`${pageStyles.leftContent} ${styles.wallpapers}`}>
              <div className={styles.wallpaperPreview} />
              <p>Every World Wallpaper</p>
              <ul>
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
