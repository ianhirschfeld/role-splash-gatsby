import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import styles from './index.module.css'

export default ({ data }) => {
  const mailchimpHiddenStyle = {
    position: 'absolute',
    left: '-5000px'
  }
  return (
    <Layout>
      <SEO title='Role - You Can Play With Us' titleTemplate={`%s`} />
      <article>
        <div className={styles.section}>
          <header className={[styles.innerContent, styles.headerContent].join(' ')}>
            <h1 className={styles.logo}>Role</h1>
            <p className='heading2'>We’re Creating the world’s premier online Role Playing Community. Discover new games from the most passionate creators, meet new friends and adventure together. Anyone can play, Everyone is welcome.</p>
            <p className='heading2'>Every story, every world, every version of you.<br />This is your Game Table. This is Role.</p>
            <h2 className='heading1'>Welcome Home</h2>
            <div className={styles.form}>
              <div className={['heading3', styles.formHeading].join(' ')}>Join us and learn more</div>
              {/* Begin Mailchimp Signup Form */}
              <div id='mc_embed_signup'>
                <form action='https://thesoapcollective.us9.list-manage.com/subscribe/post?u=3b7974721fb3e8f4f031367db&amp;id=7bd197d227' method='post' id='mc-embedded-subscribe-form' name='mc-embedded-subscribe-form' className='validate' target='_blank' noValidate>
                  <div id='mc_embed_signup_scroll'>
                    <input type='email' defaultValue='' name='EMAIL' className={['email', styles.email].join(' ')} id='mce-EMAIL' placeholder='Email address' required />
                    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                    <div style={mailchimpHiddenStyle} aria-hidden='true'><input type='text' name='b_3b7974721fb3e8f4f031367db_7bd197d227' tabIndex='-1' defaultValue='' /></div>
                    <input type='submit' value='Sign up!' name='subscribe' id='mc-embedded-subscribe' className={['button', styles.submit].join(' ')} />
                  </div>
                </form>
              </div>
              {/* <!--End mc_embed_signup--> */}
            </div>
          </header>
          <div className={styles.arrow} />
        </div>

        <div className={styles.slantedSection}>
          <div className={styles.slant}>
            <div className={[styles.innerContent, styles.pillarsContent].join(' ')}>
              <h2 className={['heading1', styles.slantedHeading].join(' ')}>You can play with us</h2>
              <div className={styles.pillars}>
                <div className={styles.pillar}>
                  <h3 className={['heading2', styles.pillarHeading].join(' ')}>Play Something New</h3>
                  <p className={styles.pillarBody}>It doesn’t matter if you’re a brand new player or a seasoned veteran. The Role marketplace will help you discover, explore, and learn new games that meet your style.</p>
                  <div className={styles.pillarImageContainer}><div className={[styles.pillarImage, styles.imagePlay].join(' ')} /></div>
                </div>
                <div className={styles.pillar}>
                  <h3 className={['heading2', styles.pillarHeading].join(' ')}>Fill Your Table</h3>
                  <p className={styles.pillarBody}>Looking for people to play with? Need a Game Master to help run your game? Our community matching tools will help you find people and get playing quickly.</p>
                  <div className={styles.pillarImageContainer}><div className={[styles.pillarImage, styles.imageTable].join(' ')} /></div>
                </div>
                <div className={styles.pillar}>
                  <h3 className={['heading2', styles.pillarHeading].join(' ')}>Role Effortlessly</h3>
                  <p className={styles.pillarBody}>Online play that is easy, seamless, and limitless. Role takes the complexity out of the tools, so you can focus on what really matters: playing with people you love.</p>
                  <div className={styles.pillarImageContainer}><div className={[styles.pillarImage, styles.imageRole].join(' ')} /></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <div className={[styles.innerContent, styles.creatorsContent].join(' ')}>
            <h2 className={['heading1', styles.sectionHeading].join(' ')}>Are You a Game Creator?</h2>
            <h3 className='heading2'>Join the Role Creators Program</h3>
            <p>Role is looking for the best new game creators who want to share their work with the world. More than just a marketplace - we’re invested in helping people discover new content from diverse voices, and giving everyone the tools to easily understand and learn new games.</p>
            <p><strong>Whether you’re an indie designer or an established publisher, we want to help people connect with the worlds you’re dreaming of.</strong></p>
          </div>
        </div>

        <div className={[styles.slantedSection, styles.slantedSectionFooter].join(' ')}>
          <div className={styles.slant}>
            <div className={[styles.innerContent, styles.pillarsContent].join(' ')}>
              <h2 className={['heading1', styles.slantedHeading].join(' ')}>Coming in 2020</h2>
              <h3 className='heading2'>Your Next Great Adventure Awaits</h3>
              <p>Role is launching in 2020, with Early Access opening soon.<br />Be among the first to know, and follow along for future updates!</p>
              <div className={['heading3', styles.formHeading].join(' ')}>Join the Role Community</div>
              {/* Begin Mailchimp Signup Form */}
              <div id='mc_embed_signup' className={styles.slantedEmailForm}>
                <form action='https://thesoapcollective.us9.list-manage.com/subscribe/post?u=3b7974721fb3e8f4f031367db&amp;id=7bd197d227' method='post' id='mc-embedded-subscribe-form' name='mc-embedded-subscribe-form' className='validate' target='_blank' noValidate>
                  <div id='mc_embed_signup_scroll'>
                    <input type='email' defaultValue='' name='EMAIL' className={['email', styles.email].join(' ')} id='mce-EMAIL' placeholder='Email address' required />
                    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                    <div style={mailchimpHiddenStyle} aria-hidden='true'><input type='text' name='b_3b7974721fb3e8f4f031367db_7bd197d227' tabIndex='-1' defaultValue='' /></div>
                    <input type='submit' value='Sign up!' name='subscribe' id='mc-embedded-subscribe' className={['button', styles.submit].join(' ')} />
                  </div>
                </form>
              </div>
              {/* <!--End mc_embed_signup--> */}
            </div>
          </div>
        </div>
      </article>
    </Layout>
  )
}
