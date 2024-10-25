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
  color: #a1bbff;
  text-decoration: underline;
  margin: 16px 0;
`

const Paragraph = styled.p`
  color: #000;
  font-size: 16px;
  margin: 4px 0;
  line-height: 1.25;
  ul {
    padding-left: 16px;
  }
`

const Title1 = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: #a1bbff;
  margin: 12px 0;
`

const Title2 = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: #a1bbff;
  margin: 10px 0;
`

const AMLPolicy: React.FC = () => {
  return (
    <PageWrapper bgUrl="/images/swap/bg.svg">
      <Page>
        <Content>
          <Title>ASTROSWAP / AML-CFT Policy</Title>
          <Paragraph>
            This Policy was formulated by ASTROSWAP LLC (“Astroswap”) with a holistic approach to mitigate risk arising
            from the type and nature of the Astroswap platform’s activities.
          </Paragraph>
          <Paragraph>
            This Policy and the relevant operational risk management procedures will be reviewed on a yearly basis, or
            sooner in the event of an applicable regulatory or legislative update or significant policy incident.
          </Paragraph>
          <Paragraph>
            Astroswap recognises the risk emanating from its line of business and it can be broadly grouped into four
            categories, namely:
            <ul>
              <li>The client base (“Customer”)</li>
              <li>The geographic location of such clients (“Geography”)</li>
              <li>The nature of its product offering (“Product”)</li>
              <li>The non-face-to-face relationship it maintains with its clients (“Interface”)</li>
            </ul>
          </Paragraph>
          <Paragraph>
            Across these four categories, we have identified various risk factors and the associated mitigating measures
            which form an integral part of our AML-CFT Policy. These are detailed in the sections to follow.{' '}
          </Paragraph>

          <Title1>Risk Factors</Title1>
          <Title2>Customer and Geography</Title2>
          <Paragraph>
            The varied nature of its clients/users may pose a risk for Astroswap. There are risks wherein Astroswap may
            be approached by potential clients/users associated with illicit activities, and the jurisdictions
            clients/users are domiciled or registered in, where the funds are flowing to and from. Various global lists
            single out countries, which have been identified as having structural deficiencies in preventing the flow of
            illicitly obtained funds. Furthermore, geo-political or human rights issues may lead to partial or blanket
            bans on financial flows from certain companies or countries.
          </Paragraph>
          <Title2>Product</Title2>
          <Paragraph>
            The pseudonymous nature of digital tokens may attract bad actors or somewhat facilitate the task of
            laundering proceeds of crime or financing of terrorism. Furthermore, the general irreversibility of
            transactions may attract a higher degree of scammers and fraudsters.
          </Paragraph>
          <Title2>Interface</Title2>
          <Paragraph>
            The non-face-to-face client interface may pose a challenge. Risks are also brought about through the speed
            of propagation of an online transaction – or indeed a chain of online transactions – typically measured in
            seconds.
          </Paragraph>
          <Paragraph>
            The pseudonymous nature of digital tokens could present some hurdles in ascertaining whether the client/user
            actually has an element of ownership or control over the wallet or address they are transacting to or from.
          </Paragraph>
          <Title1>Mitigating Measures</Title1>
          <Title2>Customer and Geography</Title2>
          <Paragraph>
            Astroswap will implement, according to its risk assessment, different technical methods to prevent certain
            clients/users of certain jurisdictions to access its platform. These may include IP filtering and
            geolocation based fencing.
          </Paragraph>
          <Title2>Product</Title2>
          <Paragraph>
            Astroswap will periodically spot-check addresses which have been used by its clients/users after
            transactions are concluded for any connection to illicit activities.{' '}
          </Paragraph>
          <Title2>Interface</Title2>
          <Paragraph>
            The interface for this type of business is almost necessarily non-face-to-face. When other risk factors
            materialise, Astroswap reserves any right to use data collection to identify any client/user linked to
            suspicious activities.
          </Paragraph>
          <Title1>Update and Preservation of Records and Personal Data Provisions</Title1>
          <Paragraph>
            Astroswap keeps records of all collectable client/user information and details of any transactions. Records
            are preserved for a period of at least 2 years from the date of the last transaction.
          </Paragraph>
          <Paragraph>
            Personal Data is processed in accordance with the Astroswap Privacy and Cookie Policy. All the stored data
            is accessible and can be retrieved or shared with any relevant authority within 48 hours.
          </Paragraph>
          <Title1>Authority Request Procedure</Title1>
          <Title2>Request and Escalation </Title2>
          <Paragraph>
            Should a regulatory or criminal authority send a motivated request in relation to a certain client/user or a
            certain wallet address, Astroswap will release as appropriate any information collected so far in relation
            to the request.
          </Paragraph>
          <Paragraph>
            From that moment on, Astroswap will monitor the platform for further transactions arising from that wallet
            address, and proceed with “freezing” or blocking any new transactions.
          </Paragraph>
          <Paragraph>
            The transaction will be unblocked, and any digital tokens involved released only after both the client/user
            clears Customer Due Diligence as described below, and/or following motivated instructions of the relevant
            authority.{' '}
          </Paragraph>
          <Title2>Customer Due Diligence</Title2>
          <Paragraph>
            For all and any of its clients/users affected by a temporary block on a pending transaction, Astroswap will
            require the following documentation:
          </Paragraph>
          <Title2>For Corporate Entities</Title2>
          <Paragraph>
            <ul>
              <li>Certificate of Incorporation</li>
              <li>Corporate Address Verification</li>
              <li>Extract from Company Register for Going Concern / Certificate of Good Standing</li>
              <li>Extract from Shareholder & UBO Register</li>
              <li>Latest Memorandum & Articles of Association</li>
              <li>Company Organigram up to UBOs and/or Ultimate Parent</li>
              <li>Director/s and UBO/s Photo Identification</li>
              <li>Director/s and UBO/s Address Verification</li>
            </ul>
          </Paragraph>
          <Paragraph>
            These documents must be photos or scan of originals, or true copies of such originals whenever possible.
          </Paragraph>
          <Paragraph>
            For Identification for representatives, Directors and UBOs, Astroswap will ask for one (or more if
            applicable) of the following;
          </Paragraph>
          <Paragraph>
            <ul>
              <li>Passport</li>
              <li>National Identity Card</li>
              <li>Driver’s License</li>
              <li>Residence Card</li>
            </ul>
          </Paragraph>
          <Paragraph>The document must follow the below guidelines:</Paragraph>
          <Paragraph>
            <ul>
              <li>Clear, legible and durable, in full colour only</li>
              <li>Photo/Scan of both sides of the document, where applicable</li>
              <li>Must contain the date of birth</li>
              <li>Must still be valid/in date</li>
            </ul>
          </Paragraph>
          <Paragraph>
            Temporary work permits or paper ID cards are generally not accepted as forms of photo identification.
            However photographic evidence of identity that are not government-issued but which are nonetheless
            recognised as a legal means of identification by the national law of Singapore or an equivalent reputable
            jurisdiction may also be used to verify the identity of the representatives, Directors and UBOs, provided
            that such documents are valid and unexpired.
          </Paragraph>
          <Paragraph>
            Identity documents are fed to a 3rd party provider which will verify the legitimacy of such documents
            against known templates using optical character recognition software and checks for security features and
            evidence of tampering. This review is carried out in conjunction with a manual review by Astroswap internal
            compliance staff.
          </Paragraph>
          <Paragraph>
            For Residential Address Verification for company representatives, Directors and UBOs, Astroswap looks to
            receive one of the following;
          </Paragraph>
          <Paragraph>
            <ul>
              <li>Bank/Credit Card Statement</li>
              <li>Utility Bill</li>
              <li>Correspondence by central or local Government authorities, departments or agencies</li>
            </ul>
          </Paragraph>
          <Paragraph>The document must follow the below guidelines:</Paragraph>
          <Paragraph>
            <ul>
              <li>Clear and legible, and in colour where possible</li>
              <li>Photo/Scan of the full document/file</li>
              <li>Dated within 90 days from the day of submission</li>
              <li>Must state the full name and address</li>
            </ul>
          </Paragraph>
          <Paragraph>
            In cases where the residential address country differs from the one specified on the photo ID (if at all),
            supporting documentation may be requested in the form of a residency card or a work permit or an additional
            proof of address.
          </Paragraph>
          <Title2>For individuals/natural persons</Title2>
          <Paragraph>
            For individuals/natural persons the process will follow the same requirements as stated above for the
            identification of UBOs, both in terms of proof-of-identity and also proof-of-address.
          </Paragraph>
          <Title1>PEP and Sanctions Checks</Title1>
          <Paragraph>
            Any true matches for PEPs or client/users who are adjudged to be High-Risk will require the user to complete
            Enhanced Due Diligence in addition to the above-mentioned requirements for Identity and Address
            verification. EDD measures are detailed appropriately in a forthcoming section.
          </Paragraph>
          <Title1>Enhanced Due Diligence</Title1>
          <Paragraph>
            Enhanced Due Diligence may be triggered by a number of events. A non-exhaustive list of such events
            includes:
          </Paragraph>
          <Paragraph>
            <ul>
              <li>Company representatives, Directors and UBOs identified as PEPs or sanctioned individuals</li>
              <li>Clients identified as High-Risk after a review of their documentation</li>
              <li>Clients exhibiting suspicious buying patterns</li>
              <li>Clients sending digital tokens to high-risk wallets</li>
            </ul>
          </Paragraph>
          <Paragraph>
            Once triggered, Astroswap will require clients to provide additional information and documentation regarding
            their:
          </Paragraph>
          <Paragraph>
            <ul>
              <li>Intended Use for digital tokens</li>
              <li>Corporate Structure (if applicable)</li>
              <li>Source of Company/Personal Funds</li>
              <li>Source of Wealth</li>
            </ul>
          </Paragraph>
          <Paragraph>
            In addition, individuals, representatives, Directors and UBOs will be requested to submit a second proof of
            residential address in line with previously specified parameters, together with a Selfie ID for further
            identity verification.
          </Paragraph>
          <Paragraph>
            If, after the necessary checks have been made, the procedure will result in no hits, and there is no
            authority written objection, the digital tokens will be released and the pending transaction, performed.
          </Paragraph>
          <Title1>Restricted Countries and jurisdictions</Title1>
          <Paragraph>
            Astroswap reserves any and all rights to freeze or block any transaction that it suspects to be connected or
            originating from any U.N. Sanction list individual or Country, on top of the U.S. During a Customer Due
            Diligence, in the cases when it is performed, the client/user will be rejected if being listed or a
            resident/citizen of the U.S., any U.N. Sanction list, FATF blacklist and the SVG FSA blacklist.
          </Paragraph>
        </Content>
      </Page>
    </PageWrapper>
  )
}

export default AMLPolicy
