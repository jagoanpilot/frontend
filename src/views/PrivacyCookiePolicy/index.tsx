import React from 'react'
import styled from 'styled-components'
import Page from 'components/Layout/Page'

const PageWrapper = styled.div<{ bgUrl: string }>`
  background-image: ${({ bgUrl }) => `url(${bgUrl})`};
  background-size: cover;
`

const Content = styled.div`
  background-color: white;
  border-radius: 16px;
  padding: 16px;
`

const Title = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  color: #000;
  margin: 16px 0;
`

const Title1 = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  color: #000;
  text-decoration: underline;
  margin: 16px 0;
`

const Title2 = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 22px;
  color: #000;
  text-decoration: underline;
  font-style: italic;
  margin: 16px 0;
`

const Title3 = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: #000;
  margin: 14px 0;
`

const Paragraph = styled.p`
  color: #000;
  font-size: 16px;
  margin: 4px 0;
  line-height: 1.25;
  a {
    color: #a1bbff;
  }

  div {
    div {
      padding-left: 12px;
    }
  }

  table {
    margin: 16px 0;
    width: 100%;
    border-collapse: collapse;
    td,
    th {
      border: 1px solid black;
      padding: 2px 4px;
      text-align: left;
    }
    th {
      font-weight: bold;
    }
  }
`

const PrivacyCookiePolicy: React.FC = () => {
  return (
    <PageWrapper bgUrl="/images/swap/bg.svg">
      <Page>
        <Content>
          <Title>ASTROSWAP</Title>
          <Title1>PRIVACY POLICY</Title1>
          <Title2>International and EU GDPR</Title2>
          <Paragraph>
            ASTROSWAP LLC, a company registered in St. Vincent and the Grenadines (the “Company”), declares the
            following Privacy Policy, which includes a cookie policy (the “Policy”), in relation to its website&nbsp;
            <a href="https://www.astroswap.app/" target="_blank" rel="noreferrer">
              https://www.astroswap.app
            </a>{' '}
            (the “Website” or the “Company’s Website”) and any website visitor (the “User”):
            <div>
              I. any information the Company collects about the User when he/she visits the Company’s Website, and/or
              otherwise interacts with any member of the Company’s Team;
            </div>
            <div>II. how the Company uses, shares, stores, and secures the information; and</div>
            <div>III. how the User may access and control that information.</div>
          </Paragraph>
          <Title3>1. User Information.</Title3>
          <Paragraph>
            <div>
              1.1. The Company may collect any &apos;&apos;Personal Information&apos;&apos;, which is any data,
              information, or combination of data and information that is provided by the User to the Company, or
              through the use of the Company’s Website and that relates to an identifiable individual.
            </div>
            <div>
              1.2. The Company collects the Personal Information when it is provided by the User or when the User visits
              the Website.
            </div>
            <div>
              1.3. The Company does not collect sensitive data or special category data about the User. This includes
              details about race, ethnic origin, politics, religion, trade union membership, genetics, biometrics,
              health, or sexual orientation.
            </div>
          </Paragraph>
          <Title3>2. Information Usage.</Title3>
          <Paragraph>
            <div>
              2.1. The Company will only use any Personal Information that the applicable law allows to and in
              particular:
              <div>
                2.1.1. to provide customer support and personalized features, and to protect the safety and security of
                the Website;
              </div>
              <div>
                2.1.2. to satisfy a legitimate interest which is not overridden by the User’s fundamental rights or data
                protection interests, for example for research and development, and in order to protect the Company’s
                legal rights and interests;
              </div>
              <div>2.1.3. when the User consents to do so for a specific purpose;</div>
              <div>
                2.1.4. when the Company needs to comply with a legal or regulatory obligation arising from any Country.
              </div>
            </div>
            <div>
              2.2. When the User has given consent to use any Personal Information for a specific purpose, he/she has
              the right to withdraw said consent at any time by contacting the Company, but this will not affect any use
              of the Personal Information that has already taken place.
            </div>
            <div>
              2.3. The Company does not share any Personal Information with any company outside its own group, if
              applicable, for marketing purposes, unless there is an express specific consent to do so.
            </div>
            <div>
              2.4. For visitors to or users of the Website who are located in the European Union, the legal bases for
              processing their information are published in the Legal Bases Table at the end of this Policy under Clause
              9.
            </div>
          </Paragraph>
          <Title3>3. Information Sharing.</Title3>
          <Paragraph>
            <div>
              3.1. The Company may share Personal Information with third parties that help it operate, provide, support,
              improve, and market its Website, others products and services, for example, third-party service providers
              who provide website and application development, data storage and backup, infrastructure, payment
              processing, customer support, business analytics, Anti-Money Laundering (&apos;&apos;AML&apos;&apos;) and
              Know Your Customer checks (&apos;&apos;KYC&apos;&apos;) and other relevant services.
            </div>
            <div>
              3.2. Third-party service providers have access to Personal Information only for the purpose of performing
              their services and in compliance with applicable laws and regulations. These third-party service providers
              are required to maintain confidentiality and security of all Personal Information that they process on the
              Company’s behalf and to implement and maintain reasonable security measures to protect the
              confidentiality, integrity, and availability of any Personal Information.
            </div>
            <div>
              3.3. The Company takes reasonable steps to confirm that all third-party service providers process Personal
              Information in a manner that provides at least the same level of protection as is provided under this
              Privacy Policy. Where any third-party service provider is unable to satisfy these requirements, any
              reasonable steps to prevent or stop non-compliant processing will be taken.
            </div>
            <div>
              3.4. The Company may share Personal Information on an aggregated or de-identified basis with third parties
              for research and analysis, profiling, and similar purposes to help the improvement of products and
              services.
            </div>
            <div>
              3.5. If the Users use any third-party software in connection with our products or services, third-party
              software providers can gain access to the Personal Information. Policies and procedures of third-party
              software providers are not controlled by the Company, and this Privacy Policy shall not cover how any
              Personal Information is collected or used by third-party software providers. The User is encouraged to
              review the privacy policies of third-party software providers before using third-party software.
            </div>
            <div>
              3.6. Some parts of the Website may contain links, ads, or connection to third-party websites over which
              the Company has no control. If the Users follow a link to any of these websites or submit information to
              them, any Personal Information will be governed by their policies. We encourage the User to review the
              privacy policies of third-party websites before submitting any information to them.
            </div>
            <div>
              3.7. The Company may share any Personal Information with government and law enforcement officials to
              comply with applicable laws or regulations arising from any applicable jurisdiction, even if different
              from that of the User or the Company.
            </div>
          </Paragraph>
          <Title3>4. Information Storage</Title3>
          <Paragraph>
            <div>
              4.1. All Personal Information provided by the User is stored on the Company’s servers or on a
              third-parties server to which only the Company has access to within the boundaries of relevant laws and
              regulations.
            </div>
            <div>
              4.2. The Company only retains Personal Information for so long as it is reasonably necessary to fulfill
              the purposes they were collected for, including for the purposes of satisfying any legal, accounting, or
              reporting requirements.
            </div>
          </Paragraph>
          <Title3>5. Cookies</Title3>
          <Paragraph>
            <div>
              5.1 The Company shall use cookies and other technologies or methods of web analysis to gather, store, and
              track certain information related with your access to and activities through the Services, including when
              you visit the Company&apos;s website.
            </div>
            <div>
              5.2 The term &quot;cookie&quot;, as used herein, shall be deemed to be a small piece of information that a
              website assigns to your device while you are viewing a website. Cookies are beneficial and may be used for
              various purposes. including allowing you to navigate between pages efficiently, enabling automatic
              activation of certain features, remembering your preferences and making the interaction between you and
              the Services quicker, easier and smoother.
            </div>
            <div>
              5.3 The Company&apos;s website shall use the following types of cookies:
              <div>
                (a) Strictly Necessary Cookies: These cookies are essential to enable you to log in, navigate a website,
                and use its features or to provide a service requested by you. The Company shall not need to obtain your
                consent in order to use these cookies.
              </div>
              <div>
                (b) Functionality Cookies: These cookies allow the Website to remember choices you make (such as your
                username, language, or the region you reside in) and provide enhanced, more personal features. The
                information these cookies collect remains anonymous, and they cannot track your browsing activity on
                other websites.
              </div>
              <div>
                (c) Performance cookies: These cookies collect information about how you use a website, for example,
                which pages you go to most often, record difficulties you may experience while using the Website such as
                error messages. All information collected by these cookies is aggregated and therefore anonymous. It is
                only used to improve the efficiency of the Website.
              </div>
              <div>
                (d) Targeting Cookies or Advertising Cookies: These cookies are used to deliver advertisements tailored
                to you and your interests specifically. They are also used to limit the number of times you see an
                advertisement as well as help measure the effectiveness of the advertising campaign. These cookies
                remember that you have visited a website, and this information is shared with other organizations such
                as advertisers. It may be the case that targeting or advertising cookies shall be linked to the sites
                functionality provided by the other organizations.
              </div>
            </div>
            <div>
              5.4 You may remove these cookies by following the instructions of your device preferences. However, if you
              choose to disable cookies, some features of the Company&apos;s Services may not operate properly, and your
              online experience may be limited.
            </div>
          </Paragraph>
          <Title3>6. International Transfer of Information</Title3>
          <Paragraph>
            <div>
              6.1. The Company collects any Personal Information globally and transfers, processes, and stores any
              Personal Information outside the User&apos;s country of residence where the Company&apos;s or any
              third-party service providers operate for the purpose of providing the products and services.
            </div>
            <div>
              6.2. Some of the Countries in which the Company or third-party service providers are operating from or are
              located in may not have the privacy and data protection laws that are equivalent to those in the User’s
              country of residence. When Personal Information is shared with these companies or third-party service
              providers, use is made of contractual clauses, corporate rules, and other appropriate mechanisms to
              safeguard the transfer of any Personal Information, within reason.
            </div>
          </Paragraph>
          <Title3>7. User&apos;s rights</Title3>
          <Paragraph>
            <div>
              7.1. The User has the following right to:
              <div>7.1.1. be informed of what the Company does with the relevant Personal Information;</div>
              <div>7.1.2. request a copy of relevant Personal Information the Company holds;</div>
              <div>7.1.3. require the Company to correct any inaccuracy or error in any Personal Information held;</div>
              <div>
                7.1.4. request erasure of any relevant Personal Information, except the one held for record-keeping
                purposes, to complete transactions, or to comply with legal obligations);
              </div>
              <div>
                7.1.5. object to or restrict the processing of any relevant Personal Information (including for
                marketing purposes);
              </div>
              <div>
                7.1.6. request to receive some of the relevant Personal Information in a structured, commonly used, and
                machine-readable format, and request that it is transferred to another party; and
              </div>
              <div>
                7.1.7. withdraw consent at any time where the Company is relying on consent to process the relevant
                Personal Information (although this will not affect the lawfulness of any processing carried out before
                such consent withdrawal).
              </div>
            </div>
            <div>7.2. The Platform and the App enable Users to update certain information about themselves.</div>
            <div>
              7.3. The User may opt-out of receiving marketing materials from the Company by expressly contacting it.
              However, the User will continue to receive notifications or information that are necessary for the use of
              the Company’s products or services.
            </div>
            <div>
              7.4. As a security measure, the Company may need specific information from the User to help confirm
              his/her identity when processing any privacy requests or when you exercise the rights stated in this
              Clause.
            </div>
            <div>
              7.5. Any request under paragraph 6.1 will normally be addressed free of charge. However, the Company may
              charge a reasonable administration fee if the request is clearly unfounded, repetitive, or excessive.
            </div>
            <div>
              7.6. The Company will respond to all legitimate requests approximately within one (1) month. Occasionally,
              it may take longer than one (1) month if the request is particularly complex or if the users have made a
              number of requests.
            </div>
          </Paragraph>
          <Title3>8. Policy Changes</Title3>
          <Paragraph>
            <div>
              8.1. The Company reserves the right to amend this Privacy Policy from time to time by posting the updated
              Privacy Policy on the Company&apos;s Website. By continuing to use the Company’s Website after the changes
              come into effect, the User agrees to be bound by the revised policy.
            </div>
          </Paragraph>
          <Title3>9. Children Privacy Policy</Title3>
          <Paragraph>
            <div>
              9.1. The Company&apos;s products and services are not directed or intended for individuals not major of
              age in their Country of residence. The Company does not knowingly collect any personal information from
              individuals not major of age and if this will be detected, steps will be taken to delete such information.
            </div>
          </Paragraph>
          <Title3>10. European Union Users - GDPR</Title3>
          <Paragraph>
            <div>
              10.1. If the User is perusing and/or visiting the Company&apos;s Website from the European Union
              (&apos;&apos;EU&apos;&apos;), that may differ from privacy laws under other jurisdictions. The User
              acknowledges that he may be transferring relevant Personal Information to the Company for storage and
              processing in other Countries around the World for the purposes described under this Privacy Policy. The
              Company takes the utmost care in protecting any relevant Personal Information and has put in place
              adequate mechanisms to protect it when it is transferred internationally.
            </div>
            <div>
              10.2. The Legal Bases for collecting and using any relevant Personal Information if the User is a citizen
              or resident of the EU, will depend on the Personal Information concerned and the specific context in which
              it is collected:
              <div>
                ● Performance of a contract. The use of any relevant Personal Information may be necessary to perform
                the terms and conditions or other policies under which we operate the Website.
              </div>
              <div>
                ● Consent. The User consent is needed if technical information such as cookie data and geolocation data
                is necessary, and any relevant Personal Information is used for marketing purposes. The User may
                withdraw his/her consent at any time by contacting the Company directly. Legitimate interests. The
                Company may use any Personal Information for its legitimate interests to improve its Website, for
                security purposes, and fraud prevention, and to share information with any affiliates for internal
                administration. In such circumstances, the Company ensures that these interests are not overridden by
                the User’s data protection interests or fundamental rights and freedoms.
              </div>
            </div>
            <div>
              10.3. Legal Bases Table
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>Processing purpose</th>
                      <th>Type of data processed</th>
                      <th>Legal bases</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>To enable the User to access any products and services</td>
                      <td>
                        Account Data, Transaction Data, Support Data, Technical Data [and Contract performance User
                        Content]
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <td>To administer and maintain he safety and security of the Website</td>
                      <td>Technical Data </td>
                      <td>Contract performance</td>
                    </tr>
                    <tr>
                      <td>To study the usage of any products or services</td>
                      <td>Transaction Data, Support Data, Technical Data, Usage Data </td>
                      <td>Legitimate interest to improve the Website</td>
                    </tr>
                    <tr>
                      <td>To gather feedback on any products, services, or features</td>
                      <td>Account Data</td>
                      <td>Legitimate interest to improve the Website</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              10.4. Rights under EU law:
              <br />
              If the User’s relevant Personal Information is subject to the protections offered by EU law, he/she may:
              <div>
                ● Access, correct, update or request deletion of any relevant Personal Information, at any time by
                contacting the Company using the contact details provided on the Website (in accordance with applicable
                data protection laws), provided that the Company may charge a reasonable fee for any manifestly
                unfounded, excessive or repetitive requests;
              </div>
              <div>
                ● Object to the processing of any relevant Personal Information, ask the Company to restrict processing
                of any relevant Personal Information or request portability of any relevant Personal Information for the
                legitimate interests set out above. In certain circumstances, the Company may not be able to stop using
                the Personal Information, with motivated cause.
              </div>
              <div>
                ● Withdraw consent at any time if the Company collected and processed any relevant Personal Information
                with consent;
              </div>
              <div>
                ● Opt-out of any marketing communications that the Company (or any third party to whom the Company
                disclosed the Personal Information with consent) may send;
              </div>
              <div>
                ● Complain to a data protection authority about the Company’s collection and use of any relevant
                Personal Information.
              </div>
              These rights apply only to Users who are subject to EU law.
            </div>
            <div>
              10.5. The Company is the Data Controller in relation to its Website and is responsible for any relevant
              Personal Information, save for what pertains to other third-party service providers connected. The User
              may contact the Company through its Website if he/she has any concerns about this Policy and any relevant
              Personal Information.
            </div>
          </Paragraph>
          <Title3>11. Law and Jurisdiction</Title3>
          <Paragraph>
            11.1. To the extent permitted by applicable law, this Policy and any disputes or claims arising out of or in
            connection with it or its subject matter or formation (including non-contractual disputes or claims) are
            governed by and construed in accordance with the laws of the St. Vincent and the Grenadines. You irrevocably
            agree that the courts of the St. Vincent and the Grenadines shall have exclusive jurisdiction to settle any
            dispute or claim that arises out of this Policy.
          </Paragraph>
        </Content>
      </Page>
    </PageWrapper>
  )
}

export default PrivacyCookiePolicy
