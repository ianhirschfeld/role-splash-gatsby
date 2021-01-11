import React from 'react'
import { Helmet } from 'react-helmet'

import names from '../data/ThankYou'

import pageStyles from './pages.module.css'
import styles from './about.module.css'

import Layout from '../components/Layout'
import SEO from '../components/seo'

export default ({ data }) => {
  const last = names.length - 1

  return (
    <Layout>
      <Helmet>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </Helmet>
      <SEO title="About" />

      <div className={pageStyles.sections}>
        <header className={pageStyles.section}>
          <div className={`${pageStyles.logo} ${pageStyles.isSmall}`}>Role</div>
        </header>
      </div>

      <div className={`${pageStyles.sections} ${pageStyles.isWhite}`}>
        <section className={pageStyles.section}>
          <div className={pageStyles.sectionContent}>
            <h1 className={`heading1 is-centered red ${pageStyles.sectionHeading1}`}>About Us</h1>
          </div>
        </section>

        <section className={pageStyles.section}>
          <div className={pageStyles.sectionContent}>
            <h2 className={`heading2 is-centered ${pageStyles.sectionHeading2}`}>Our Founders</h2>
            <p className={pageStyles.leftContent}>
              <a href="https://twitter.com/logandwight" target="_blank" rel="noopener noreferrer">
                Logan Dwight
              </a>{' '}
              (They/Them) and{' '}
              <a href="https://twitter.com/ianhirschfeld" target="_blank" rel="noopener noreferrer">
                Ian Hirschfeld
              </a>{' '}
              (He/Him) have been working together since they were kids - building websites, designing games, and telling
              stories every step of the way. As best friends and co-founders, Ian & Logan believe in the transformative
              power of cooperative imagination and group play. Having built the first Role app in 2015 (now known as
              Role Classic on iOS), we have been overwhelmed by the positive impact their work has had - reaching over
              100,000 players worldwide. Now, we have returned to our passion project together, and have re-launched
              Role as the world's premier online video play platform for RPGs and the communities around them. With
              nearly two decades of work behind us, including founding two companies together, we know this is only the
              beginning of great adventures to come!
            </p>
          </div>
        </section>

        <section className={pageStyles.section}>
          <div className={pageStyles.sectionContent}>
            <h2 className={`heading2 is-centered ${pageStyles.sectionHeading2}`}>The History of Role</h2>
          </div>

          <div className={`${pageStyles.leftContent} ${styles.history}`}>
            <h3 className={`heading3 ${pageStyles.sectionHeading3}`}>Feb 2015</h3>
            <div>
              <div className={styles.tweet}>
                <blockquote className="twitter-tweet" data-dnt="true" data-theme="light">
                  <p lang="en" dir="ltr">
                    <a href="https://twitter.com/hashtag/Role?src=hash&amp;ref_src=twsrc%5Etfw">#Role</a> is out TODAY
                    on the <a href="https://twitter.com/hashtag/AppStore?src=hash&amp;ref_src=twsrc%5Etfw">#AppStore</a>
                    ! Download it for free, and let&#39;s start imagining together:{' '}
                    <a href="http://t.co/NSE7fZ4nJB">http://t.co/NSE7fZ4nJB</a>
                  </p>
                  &mdash; Role (@roleapp){' '}
                  <a href="https://twitter.com/roleapp/status/565246091571249152?ref_src=twsrc%5Etfw">
                    February 10, 2015
                  </a>
                </blockquote>
              </div>
              <p>
                <strong>The first ever version of Role is released!</strong> When Role was first conceptualized, it was
                just a side-project. Our goal was to create a mobile app that simplified the act of roleplaying through
                streamlined rules, quick character creation, and minimal number crunching. Our design ethos was, "make
                D&D as easy to play as Apples to Apples".
              </p>
              <p>
                The Role mobile app, now called <em>Role Classic</em> can be{' '}
                <a href="https://apps.apple.com/us/app/role-classic/id933599454">downloaded here</a>. And if you don't
                have an iPhone, you can get a copy of our{' '}
                <a href="https://drive.google.com/file/d/1FDtDzLJuZX39A_jjFkbv8ygEdohoUuSv/view?usp=sharing">
                  PDF ruleset here
                </a>
                .
              </p>
            </div>

            <h3 className={`heading3 ${pageStyles.sectionHeading3}`}>Jan 2018</h3>
            <div>
              <div className={`${styles.image} ${styles.downloads}`}>
                <div>Role Classic Download Chart</div>
              </div>
              <p>
                <strong>
                  <em>Role Classic</em> hits 100,000 downloads!
                </strong>
              </p>
              <p>
                The first version of Role was a side project, one we didn't think to invest any time or money into
                marketing. To our surprise &amp; delight, through purely organic growth, we hit this amazing milestone.
                This was the first time we realized this project had a much bigger future ahead of it.
              </p>
            </div>

            <h3 className={`heading3 ${pageStyles.sectionHeading3}`}>May 2019</h3>
            <div>
              <p>
                Logan began doing more serious research into the TTRPG industry &amp; market factors that had led us to
                over 100k players. There was an inkling that something huge was brewing.
              </p>
              <p>
                We had been receiving lots of great feedback from our mobile app player base, and as time went on, an
                idea solidified. We saw some clear gaps in what was possible for TTRPGs online, and saw an opportunity
                where we could provide the most value. There was a path forward that would take Role from the initial
                seed of a simple mobile app, and evolve it into a full-blown online platform!
              </p>
            </div>

            <h3 className={`heading3 ${pageStyles.sectionHeading3}`}>Mar 2020</h3>
            <div>
              <p>
                <strong>Logan &amp; Ian register a new company called Role, Inc.</strong> We then jumped full-time into
                building this business. Mockups, prototyping, and outreach to players &amp; TTRPG designs begin.
              </p>
            </div>

            <h3 className={`heading3 ${pageStyles.sectionHeading3}`}>Jun 2020</h3>
            <div>
              <div className={`${styles.image} ${styles.kickstarter}`}>
                <div>Role Kickstarter Success</div>
              </div>
              <p>
                <strong>
                  We launch and close a successful{' '}
                  <a
                    href="https://www.kickstarter.com/projects/role/role-a-new-kind-of-platform-for-the-rpg-community"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Kickstarter campaign
                  </a>
                  !
                </strong>{' '}
                Over the course of our 2-week campaign, we rallied on social media, created product demos, and
                ultimately hit two stretch goals. The outpouring of support and excitement for what we were building was
                rocket fuel for us to get an Early Access build of the new Role platform out as soon as possible.
              </p>
            </div>

            <h3 className={`heading3 ${pageStyles.sectionHeading3}`}>Sep 2020</h3>
            <div>
              <p>
                <strong>Private Early Access goes live</strong> and all our Kickstarter backers get invites!
              </p>
            </div>

            <h3 className={`heading3 ${pageStyles.sectionHeading3}`}>Nov 2020</h3>
            <div>
              <p>
                <strong>Public Early Access goes live</strong>! Just two months after the launch of our Private EA, we
                decided to open the floodgates. With Public EA, we also launched the first version of our Template
                Creator suite, allowing players &amp; creators to add support for <em>any</em> TTRPG they want to play
                on Role!
              </p>
            </div>

            <h3 className={`heading3 ${pageStyles.sectionHeading3}`}>Jan 2021</h3>
            <div>
              <p>
                The start of Role Year 2! We have so many exciting things planned. This year will see the Role Platform
                level up in some huge ways as we work towards our Gold Release. Thank you for joining us on this
                adventure!
              </p>
            </div>
          </div>
        </section>

        <section className={pageStyles.section}>
          <div className={pageStyles.sectionContent}>
            <h2 className={`heading1 is-centered teal ${pageStyles.sectionHeading3}`}>A Special Thank You</h2>
            <p>
              A huge and wonderful thank you to all of our{' '}
              <a
                href="https://www.kickstarter.com/projects/role/role-a-new-kind-of-platform-for-the-rpg-community"
                target="_blank"
                rel="noopener noreferrer"
              >
                2,902 Kickstarter Backers
              </a>
              !
            </p>
            <p>
              We appreciate each and every one of you who not only believed and supported Role from the beginning, but
              put money down into helping bring this platform to life.
            </p>
          </div>

          <div className={styles.names}>
            <p>
              {names.map((name, i) => {
                return (
                  <span key={i}>
                    {i === last ? 'and ' : ''}
                    {name}
                    {i < last ? ', ' : ''}
                  </span>
                )
              })}
            </p>
          </div>
        </section>
      </div>
    </Layout>
  )
}
