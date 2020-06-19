import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import styles from './index.module.css'

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Wallpapers" />
      <div className={styles.section}>
        <header className={[styles.innerContent, styles.headerContent].join(' ')}>
          <h1 className={styles.logo}>Role</h1>
        </header>
      </div>

      <div className={[styles.slantedSection, styles.slantedSectionFooter].join(' ')}>
        <div className={styles.slant}>
          <div className={[styles.innerContent, styles.pillarsContent].join(' ')}>
            <h2 className={['heading1', styles.slantedHeading].join(' ')}>Wallpapers</h2>
            <div className={styles.wallpapers}>
              <div className={styles.wallpaper}>
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
          </div>
        </div>
      </div>
    </Layout>
  )
}
