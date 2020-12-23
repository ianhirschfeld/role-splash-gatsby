import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import styles from './index.module.css'

export default ({ data }) => {
  const email = 'privacy@playrole.com'
  return (
    <Layout>
      <SEO title="Privacy Policy" />
      <div className={styles.section}>
        <header className={`${styles.innerContent} ${styles.headerContent}`}>
          <h1 className={styles.logo}>Role</h1>
        </header>
      </div>

      <div className={`${styles.slantedSection} ${styles.slantedSectionFooter}`}>
        <div className={styles.slant}>
          <div className={`${styles.innerContent} ${styles.pillarsContent}`}>
            <h2 className={`heading1 is-centered ${styles.slantedHeading}`}>
              Role Inc.
              <br />
              Privacy Policy
            </h2>
            <h3 className="heading2 is-centered">Last Updated March, 2020</h3>
            <div className={styles.legalContent}>
              <p>
                Role, Inc. (“<strong>Role</strong>,” “<strong>we</strong>,” “<strong>us</strong>,” or “
                <strong>our</strong>”) has prepared this Privacy Policy to explain what Personal Data (defined below) we
                collect, how we use and share that data, and your choices concerning our data practices. Through our
                website, playrole.com (the “<strong>Site</strong>”), we provide a platform that connects passionate role
                playing games players (“<strong>Players</strong>” or “<strong>you</strong>”) with each other to discover
                and play new games built by diverse and innovative game creators (collectively or individually, "
                <strong>Creators</strong>"). The Players and Creators are both users of the Services provided by Role
                and are hereinafter referred to collectively as "<strong>Users</strong>", such services and the Role
                mobile app (the <strong>“App”</strong>), are referred to collectively in this Privacy Policy as the{' '}
                <strong>“Service”</strong>).
              </p>
              <p>
                This Privacy Policy explains what Personal Data we collect, how we use and share that data, and your
                choices concerning our data practices. This Privacy Policy is incorporated into and forms part of our
                Terms of Service.
              </p>
              <p>
                Before using the Service or submitting any Personal Data to Role, please review this Privacy Policy
                carefully and <a href={`mailto:${email}?subject=Role%20-%20Privacy%20Contact`}>contact us</a> if you
                have any questions. By using the Service, you agree to the practices described in this Privacy Policy.
                If you do not agree to this Privacy Policy, please do not access the Site or otherwise use the Service.
              </p>
              <p id="personal-data-we-collect">
                <strong>1. PERSONAL DATA WE COLLECT</strong>
              </p>
              <p>
                We collect information that alone or in combination with other information in our possession could be
                used to identify you (“<strong>Personal Data</strong>”) as follows:
              </p>
              <p>
                <strong>Personal Data You Provide</strong>: We collect Personal Data we collect varies based on who you
                are and what you choose to share with us. When you contact us or interact with our Service we collect
                categories of Personal Data as follows:
              </p>
              <p>
                <strong>Account Data</strong>: When you create an account we will generally collect your name, email,
                and location information (if you are a User and you consent).
              </p>
              <p>
                <strong>Location Data</strong>: The Service collects location information differently depending on your
                permissions as well as whether you are using the Services as a Player or Creator.
              </p>
              <p>
                <strong>Payment Data</strong>: To the extent features of the Service are available for a fee, we may
                collect the financial information necessary to process your payments, such as your payment card number
                and authentication details. We collect certain payment and billing information needed for us to (i) pay
                Creators and (ii) accept payments from Players. This information may include billing address, payment
                card details, and, if you are a Creator, your bank account information. We collect Payment Data via
                secure payment processing services.
              </p>
              <p>
                <strong>Communication Data</strong>: We may collect information when you contact us with questions or
                concerns and when you voluntarily respond to questionnaires, surveys or requests for market research
                seeking your opinion and feedback. Providing this information is optional to you.
              </p>
              <p>
                <strong>Personal Data We Collect Through Our Social Media Pages</strong>: We have pages on social media
                sites like Instagram, Facebook, Twitch, Twitter, and LinkedIn (“<strong>Social Media Pages</strong>”).
                When you interact with our Social Media Pages, we will collect Personal Data that you elect to provide
                to us, such as your contact details. In addition, the companies that host our Social Media Pages may
                provide us with aggregate information and analytics regarding the use of our Social Media Pages.
              </p>
              <p>
                <strong>Personal Data We Receive Automatically From Your Use of the Service</strong>: When you visit,
                use, and interact with the Service, we may receive certain information about your visit, use, or
                interactions. For example, we may monitor the number of people that visit the Service, peak hours of
                visits, which page(s) are visited, the domains our visitors come from (e.g., google.com, yahoo.com,
                etc.), and which browsers people use to access the Service (e.g., Chrome, Firefox, Microsoft Internet
                Explorer, etc.), broad geographical information, and navigation pattern. In particular, the following
                information is created and automatically logged in our systems:
              </p>
              <p>
                <ul>
                  <li>
                    <strong>Log data</strong>: Information that your browser automatically sends whenever you visit the
                    Site (“<strong>log data</strong>”). Log data includes your Internet Protocol address, browser type
                    and settings, the date and time of your request, and how you interacted with the Site.
                  </li>
                  <li>
                    <strong>Cookies</strong>: Please see the “Cookies” section below to learn more about how we use
                    cookies.
                  </li>
                  <li>
                    <strong>Device information</strong>: Includes name of the device, operating system, and browser you
                    are using. Information collected may depend on the type of device you use and its settings.
                  </li>
                  <li>
                    <strong>Usage Information</strong>: We collect information about how you use our Service, such as
                    the types of content that you view or engage with, the features you use, the actions you take, and
                    the time, frequency, and duration of your activities.
                  </li>
                </ul>
              </p>
              <p>The following information is automatically logged in our systems when you use the App:</p>
              <p>
                <ul>
                  <li>
                    <strong>Device Information</strong>: We may collect information about your device including the IP
                    address, the device type, non-permanent identifiers (i.e., advertising ID), the operating system
                    version, data connection type (WiFi/mobile data), and name of your mobile service provider.
                    Information collected may depend on the type of device you use and its settings.
                  </li>
                  <li>
                    <strong>Usage Information</strong>: We collect information related to the actions you take through
                    the App, including how you navigate the App, the length of time you spend in the App, and
                    diagnostics when errors are experienced (crash/error reporting).
                  </li>
                </ul>
              </p>
              <p>
                <strong>Cookies</strong>: We use cookies to operate and administer our Site, gather usage data on our
                Site, and improve your experience on it. A “cookie” is a piece of information sent to your browser by a
                website you visit. Cookies can be stored on your computer for different periods of time. Some cookies
                expire after a certain amount of time, or upon logging out (session cookies), others survive after your
                browser is closed until a defined expiration date set in the cookie (as determined by the third party
                placing it), and help recognize your computer when you open your browser and browse the Internet again
                (persistent cookies). For more details on cookies please visit All About Cookies.
              </p>
              <p>
                <strong>Email Pixels</strong>: We use pixels in our email campaigns that allow us to collect your email
                and IP address as well as the date and time you open an email or click on any links in the email.
              </p>
              <p>
                <strong>Analytics</strong>: We use Google Analytics, a web analytics service provided by Google, Inc.
                (“Google”). Google Analytics uses cookies to help us analyze how users use the Site and enhance your
                experience when you use the Site. For more information on how Google uses this data, go to{' '}
                <a
                  href="https://policies.google.com/technologies/partner-sites"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  policies.google.com/technologies/partner-sites
                </a>
                .
              </p>
              <p>
                <strong>Online Tracking and Do Not Track Signals</strong>: We and our third party service providers,
                including Facebook, may use cookies, pixels, or other tracking technologies to collect information about
                your browsing activities over time and across different websites following your use of the Site and use
                that information to send targeted advertisements. Our Site currently does not respond to “Do Not Track”
                (“DNT”) signals and operates as described in this Privacy Policy whether or not a DNT signal is
                received. If we do respond to DNT signals in the future, we will update this Privacy Policy to describe
                how we do so.
              </p>
              <p>
                <strong>Your Choices.</strong> On most web browsers, you will find a “help” section on the toolbar.
                Please refer to this section for information on how to receive a notification when you are receiving a
                new cookie and how to turn cookies off. Please see the links below for guidance on how to modify your
                web browser’s settings on the most popular browsers:
              </p>
              <p>
                <ul>
                  <li>
                    <a
                      href="https://support.microsoft.com/en-us/help/4027776/microsoft-edge-find-settings-tools-internet-options"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Microsoft Edge
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.mozilla.org/en-US/kb/firefox-options-preferences-and-settings"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Mozilla Firefox
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.google.com/chrome/answer/114836?hl=en&co=GENIE.Platform=Desktop"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Chrome
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.apple.com/guide/safari/customize-settings-per-website-ibrw7f78f7fe/mac"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Apple Safari
                    </a>
                  </li>
                </ul>
              </p>
              <p>
                Please note that if you limit the ability of websites to set cookies, you may be unable to access
                certain parts of the Site and you may not be able to benefit from the full functionality of the Site.
              </p>
              <p>
                Advertising networks may use cookies to collect Personal Data. Most advertising networks offer you a way
                to opt out of targeted advertising. If you would like to find out more information, please visit the
                Network Advertising Initiative’s online resources at http://www.networkadvertising.org and follow the
                opt-out instructions there.
              </p>
              <p>
                If you access the Site on your mobile device, you may not be able to control tracking technologies
                through the settings.
              </p>
              <p id="how-we-use-personal-data">
                <strong>2. HOW WE USE PERSONAL DATA</strong>
              </p>
              <p>
                We may use Personal Data to provide the Service, including to allow Players to display location
                information; to allow Players to connect with each other, which includes opt-in search tools; to allow
                Players to make purchases on the Site and App; and to ensure Creators are paid. This processing is
                necessary to perform our contract with you.
              </p>
              <p>We also use Personal Data for the following purposes:</p>
              <p>
                <ul>
                  <li>To respond to your inquiries, comments, feedback, or questions;</li>
                  <li>
                    To send administrative information to you, for example, information regarding the Service and
                    changes to our terms, conditions, and policies;
                  </li>
                  <li>To analyze how you interact with our Service;</li>
                  <li>To maintain and improve the content and functionality of the Service;</li>
                  <li>To develop new products and services;</li>
                  <li>
                    To prevent fraud, criminal activity, or misuses of our Service, and to ensure the security of our IT
                    systems, architecture, and networks; and
                  </li>
                  <li>
                    To comply with legal obligations and legal process and to protect our rights, privacy, safety, or
                    property, and/or that of our affiliates, you, or other third parties.
                  </li>
                </ul>
              </p>
              <p>
                <strong>Aggregated Information</strong>. We may aggregate Personal Data and use the aggregated
                information to analyze the effectiveness of our Service, to improve and add features to our Service, and
                for other similar purposes. In addition, from time to time, we may analyze the general behavior and
                characteristics of users of our Services and share aggregated information like general user statistics
                with prospective business partners. We may collect aggregated information through the Service, through
                cookies, and through other means described in this Privacy Policy.
              </p>
              <p>
                <strong>Marketing</strong>. We may use your Personal Data to contact you to tell you about products or
                services we believe may be of interest to you. For instance, if you elect to provide your email or
                telephone number, we may use that information to send you special offers. You may opt out of receiving
                emails by following the instructions contained in each promotional email we send you. You can also
                control the marketing emails and/or text messages you receive by updating your settings through your
                account. In addition, if at any time you do not wish to receive future marketing communications, you may{' '}
                <a href={`mailto:${email}?subject=Role%20-%20Privacy%20Contact`}>contact us</a>. If you unsubscribe from
                our marketing lists, you will no longer receive marketing communications but we will continue to contact
                you regarding management of your account, other administrative matters, and to respond to your requests.
              </p>
              <p id="sharing-and-disclosure-of-personal-data">
                <strong>3. SHARING AND DISCLOSURE OF PERSONAL DATA</strong>
              </p>
              <p>
                In certain circumstances we may share your Personal Data with third parties without further notice to
                you, unless required by the law, as set forth below:
              </p>
              <p>
                <ul>
                  <li>
                    <strong>Vendors and Service Providers</strong>: To assist us in meeting business operations needs
                    and to perform certain services and functions, we may share Personal Data with vendors and service
                    providers, including providers of hosting services, cloud services, and other information technology
                    services providers, event management services, email communication software and email newsletter
                    services, advertising and marketing services, payment processors, customer relationship management
                    and customer support services, and web analytics services. Pursuant to our instructions, these
                    parties will access, process, or store Personal Data in the course of performing their duties to us.
                    We take commercially reasonable steps to ensure our service providers adhere to the security
                    standards we apply to your Personal Data.
                  </li>
                  <li>
                    <strong>Business Transfers</strong>: If we are involved in a merger, acquisition, financing due
                    diligence, reorganization, bankruptcy, receivership, sale of all or a portion of our assets, or
                    transition of service to another provider (collectively a “Transaction”), your Personal Data and
                    other information may be shared in the diligence process with counterparties and others assisting
                    with the Transaction and transferred to a successor or affiliate as part of that Transaction along
                    with other assets.
                  </li>
                  <li>
                    <strong>Legal Requirements</strong>: If required to do so by law or in the good faith belief that
                    such action is necessary to (i) comply with a legal obligation, including to meet national security
                    or law enforcement requirements, (ii) protect and defend our rights or property, (iii) prevent
                    fraud, (iv) act in urgent circumstances to protect the personal safety of users of the Services, or
                    the public, or (v) protect against legal liability.
                  </li>
                  <li>
                    <strong>Other Users</strong>: Certain actions you take may be visible to other users of the Service.
                    For example, Player’s locations can be made available to Players if they choose to enable certain
                    sharing features.
                  </li>
                </ul>
              </p>
              <p>
                <strong>4. DATA RETENTION</strong>
              </p>
              <p>
                We keep Personal Data for as long as reasonably necessary for the purposes described in this Privacy
                Policy, while we have a business need to do so, or as required by law (e.g. for tax, legal, accounting,
                or other purposes), whichever is the longer.
              </p>
              <p>
                <strong>5. UPDATE YOUR INFORMATION</strong>
              </p>
              <p>
                Please log in to your account or{' '}
                <a href={`mailto:${email}?subject=Role%20-%20Privacy%20Contact`}>contact us</a> if you need to change or
                correct your Personal Data.
              </p>
              <p>
                <strong>6. ADDITIONAL INFORMATION FOR CALIFORNIA RESIDENTS</strong>
              </p>
              <p>
                <strong>Collection, Disclosure, and Use of Personal Data</strong>: The categories of Personal Data we
                have collected in the preceding twelve months are described above in the “
                <a href="#personal-data-we-collect">Personal Data We Collect</a>” section. In the preceding twelve
                months, we have disclosed for business purposes each of the categories identified in that section to the
                third parties identified in the “
                <a href="#sharing-and-disclosure-of-personal-data">Sharing and Disclosure of Personal Data</a>”
                sections. The business and commercial purposes for collecting Personal Data are described in the “
                <a href="#how-we-use-personal-data">How We Use Personal Data</a>” section. We collect Personal Data
                directly from you and from your use of the Service. We do not sell your Personal Information.
              </p>
              <p>
                <strong>Privacy Rights</strong>: To the extent provided for by law and subject to applicable exceptions,
                California residents have the following privacy rights in relation to the Personal Data we collect:
              </p>
              <p>
                <ul>
                  <li>
                    The right to know what Personal Data we have collected and how we have used and disclosed that
                    Personal Information;
                  </li>
                  <li>The right to request deletion of your Personal Data;</li>
                  <li>
                    The right to be free from discrimination relating to the exercise of any of your privacy rights.
                  </li>
                </ul>
              </p>
              <p>
                <strong>Exercising Your Rights</strong>: California residents or their authorized agents can exercise
                the above privacy rights and request alternative forms of this Privacy Policy by{' '}
                <a href={`mailto:${email}?subject=Role%20-%20Privacy%20Contact`}>contacting us</a>.
              </p>
              <p>
                <strong>Verification</strong>: In order to protect your Personal Data from unauthorized access or
                deletion, we may require you to verify your identity in connection with a request to know or delete
                Personal Data. If you do not have an account with us, or if we suspect fraudulent or malicious activity,
                we may ask you to provide additional Personal Data for verification. If you submit a request through an
                authorized agent, the agent must present signed written permission to act on your behalf and you may
                also be required to independently verify your identity with us. If we cannot verify your identity, we
                will not provide or delete your Personal Data.
              </p>
              <p>
                <strong>7. CHILDREN</strong>
              </p>
              <p>
                Our Service is not directed to children who are under the age of 16. Role does not knowingly collect
                Personal Data from children under the age of 16. If you have reason to believe that a child under the
                age of 16 has provided Personal Data to Role through the Service please{' '}
                <a href={`mailto:${email}?subject=Role%20-%20Privacy%20Contact`}>contact us</a> and we will endeavor to
                delete that information from our databases.
              </p>
              <p>
                <strong>8. LINKS TO OTHER WEBSITES</strong>
              </p>
              <p>
                The Service may contain links to other websites not operated or controlled by Role, including social
                media services (“<strong>Third Party Sites</strong>”). The information that you share with Third Party
                Sites will be governed by the specific privacy policies and terms of service of the Third Party Sites
                and not by this Privacy Policy. By providing these links we do not imply that we endorse or have
                reviewed these sites. Please contact the Third Party Sites directly for information on their privacy
                practices and policies.
              </p>
              <p>
                <strong>9. SECURITY</strong>
              </p>
              <p>
                You use the Service at your own risk. We implement commercially reasonable technical, administrative,
                and organizational measures to protect Personal Data both online and offline from loss, misuse, and
                unauthorized access, disclosure, alteration, or destruction. However, no Internet or e-mail transmission
                is ever fully secure or error free. In particular, e-mail sent to or from us may not be secure.
                Therefore, you should take special care in deciding what information you send to us via the Service or
                e-mail. Please keep this in mind when disclosing any Personal Data to Role via the Internet. In
                addition, we are not responsible for circumvention of any privacy settings or security measures
                contained on the Service, or third party websites.
              </p>
              <p>
                <strong>10. INTERNATIONAL USERS</strong>
              </p>
              <p>
                By using our Service, you understand and acknowledge that your Personal Data will be transferred from
                your location to our facilities and servers in the United States.
              </p>
              <p>
                <strong>11. YOUR CHOICES</strong>
              </p>
              <p>
                In certain circumstances providing Personal Data is optional. However, if you choose not to provide
                Personal Data that is needed to use some features of our Service, you may be unable to use those
                features. You can also <a href={`mailto:${email}?subject=Role%20-%20Privacy%20Contact`}>contact us</a>{' '}
                to ask us to update or correct your Personal Data. You may also delete your account. Please note that we
                will need to verify that you have the authority to delete the account and certain activity generated
                prior to deletion may remain stored by us and may be shared with third parties as detailed in this
                Privacy Policy.
              </p>
              <p>
                <strong>12. CHANGES TO THE PRIVACY POLICY</strong>
              </p>
              <p>
                The Service and our business may change from time to time. As a result we may change this Privacy Policy
                at any time. When we do we will post an updated version on this page, unless another type of notice is
                required by the applicable law. By continuing to use our Service or providing us with Personal Data
                after we have posted an updated Privacy Policy, or notified you by other means if applicable, you
                consent to the revised Privacy Policy and practices described in it.
              </p>
              <p>
                <strong>13. CONTACT US</strong>
              </p>
              <p>
                If you have any questions about our Privacy Policy or information practices, please feel free to contact
                us at our designated request address:{' '}
                <a href={`mailto:${email}?subject=Role%20-%20Privacy%20Contact`}>{email}</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
