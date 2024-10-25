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
  font-size: 28px;
  color: #000;
  margin: 16px 0;
  text-decoration: underline;
`

const Title1 = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 26px;
  color: #000;
  margin: 16px 0;
`

const Title2 = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: #000;
  margin: 14px 0;
`

const Date = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  color: #000;
  margin: 16px 0;
`

const Paragraph = styled.p`
  color: #000;
  font-size: 16px;
  margin: 4px 0;
  line-height: 1.25;
  a {
    color: #a1bbff;
  }
`

const TermsOfUse: React.FC = () => {
  return (
    <PageWrapper bgUrl="/images/swap/bg.svg">
      <Page>
        <Content>
          <Title>ASTROSWAP</Title>
          <Title1>Terms of Use</Title1>
          <Date>Dated 28th of April 2023</Date>
          <Title2>1. Introduction</Title2>
          <Paragraph>
            1.1 These Terms of Use (“these Terms“) are entered into between you (“User” or “You“), and AstroSwap LLC
            (the “Company“), incorporated under the laws of St. Vincent and the Grenadines. You and the Company are
            hereinafter separately referred to as “Party” and collectively as “Parties“, by accessing, registering,
            downloading, using, clicking any tools, software and information made available through the AstroSwap
            website, accessible on{' '}
            <a href="https://www.astroswap.app/" target="_blank" rel="noreferrer">
              https://www.astroswap.app
            </a>{' '}
            (the “Website”).
          </Paragraph>
          <Paragraph>
            1.2 Please read these terms together with the provisions set forth in our Privacy Policy and AML Policy
            carefully before using this Website. By using the Website in any capacity, you agree that: (i) you have read
            and familiarized yourself with these Terms; (ii) you understand these Terms; and (iii) you agree to be bound
            by these Terms when using this website. If you do not agree to these Terms, you should immediately stop
            using this Website.
          </Paragraph>
          <Paragraph>
            1.3 The Company reserves the right to modify or amend these Terms, the Website or any content on the Website
            from time to time, including for security, legal or regulatory reasons, to reflect updates or changes to the
            service or functionality of the website. You are advised to check these terms periodically to ensure that
            you are aware of and are complying with the current versions. Changes are binding on users of the Website
            and will take effect immediately from posting of the revised documentation on the Website. You agree to be
            bound by such variation and your continued use of the website, tools and information made available shall
            constitute your acceptance of such variation.
          </Paragraph>
          <Paragraph>
            1.4 The Company will indicate on the Website that the Terms have changed by uploading new Terms with an
            updated date. You accept that by doing so, we have provided you with sufficient notice of such change. The
            Company encourages you to seek professional advice regarding any tax and legal requirements with which you
            must comply in relation to you being a user of this website, and any here in accessible software, tools and
            services.
          </Paragraph>
          <Paragraph>
            1.5 You acknowledge and confirm that you have read, understood, and agreed to provisions stipulated in the
            Privacy Policy, which shall explain how the Company treats your information and protects your privacy when
            accessing or using the Website. By accessing the Website, you hereby agree that the Company may collect and
            use your information provided as set forth in the Privacy Policy.
          </Paragraph>
          <Title2>2. Your use of the Website and AstroSwap</Title2>
          <Paragraph>
            2.1 The Website gives You access to a non-custodial web dApp or frontend that runs a set of decentralised
            smart contracts currently but not necessarily exclusively deployed on the Cardano Blockchain (“AstroSwap”).
          </Paragraph>
          <Paragraph>
            2.2 The Company oversees AstroSwap development, decentralization and fair access, either directly or by
            engaging one or more connected or independent developer and services providers (“Service Providers”).
          </Paragraph>
          <Paragraph>
            2.3 AstroSwap may integrate third-party services of convenience into its user interface (the “Third-party
            Services”). In such cases, this will be clearly highlighted by wording and/or graphical elements. The
            Company declines any responsibility over this third-party services and You use them at your sole risk,
            acknowledging that you read and accepted any relevant terms and conditions of the actual provider of such
            service.
          </Paragraph>
          <Paragraph>
            2.4 You will comply with all applicable domestic and international laws, statutes, ordinances and
            regulations applicable to your use of the Website and AstroSwap and will not use either for any unlawful
            purpose.
          </Paragraph>
          <Paragraph>
            2.5 You shall be responsible for obtaining the data network access necessary to use the Website and
            AstroSwap. Your network’s data and rates and fees may apply if you access or use the Website from a
            wireless-enabled device, and you shall be responsible for such rates and fees.
          </Paragraph>
          <Paragraph>
            2.6 You shall be responsible for acquiring and updating compatible hardware or device necessary to access
            and use the Website and AstroSwap. In addition, the Website, AstroSwap and any Third-Party Services may be
            subject to malfunctions and delays inherent in the use of the Internet and electronic communications.
          </Paragraph>
          <Paragraph>
            2.7 As electronic services are subject to interruption or breakdown, access to the website is offered on an
            “as is” and “as available” basis only;
          </Paragraph>
          <Paragraph>
            2.8 The Company reserves the right to limit the availability of the Website or AstroSwap to any person,
            geographic area or jurisdiction at will and/or terminate Your access to and use of the Website of AstroSwap,
            at any time and in the Company’s sole discretion; and
          </Paragraph>
          <Paragraph>
            2.9 The Company may, in its sole discretion, impose limits or restrictions on the use you make of the
            Website or AstroSwap. Further, for commercial, security, technical, maintenance, legal or regulatory
            reasons, or due to any breach of these Terms, the Company may withdraw the Website and or Your access to the
            Website at any time and without notice to You.
          </Paragraph>
          <Title2>3. Intellectual Property</Title2>
          <Paragraph>
            3.1 All remarks, suggestions, ideas, materials or other information provided by you through this Website
            will forever be the Company’s intellectual property.
          </Paragraph>
          <Paragraph>
            3.2 The Company owns all present and future copyright, registered and unregistered trademarks, design
            rights, unregistered designs, database rights and all other present and future intellectual property rights
            and rights in the nature of intellectual property rights existing in or in relation to the Website and
            AstroSwap, unless covered by any open-source software licence.
          </Paragraph>
          <Paragraph>
            3.3 The Company does not warrant or represent that the content of the Website does not infringe the rights
            of any third party.
          </Paragraph>
          <Title2>4. Prohibited Uses</Title2>
          <Paragraph>
            4.1 The Company will strive to not accept deposits or interactions to AstroSwap from the following known
            addresses:
          </Paragraph>
          <Paragraph>(a) Mixing services which attempt to obfuscate the source of funds;</Paragraph>
          <Paragraph>
            (b) Peer-to-peer and other exchanges which do not perform Know Your Customer (KYC) screening as part of
            their onboarding process;
          </Paragraph>
          <Paragraph>(c) Any amount of funds from gambling sites; and,</Paragraph>
          <Paragraph>
            (d) Any amount of funds known to belong to darknet marketplaces. The Company retains the right to return
            funds and freeze/close accounts as necessary upon receipt of deposits from these sources. Please note that
            any attempt to circumvent these policies will also result in similar action.
          </Paragraph>
          <Title2>5. Representations and Warranties</Title2>
          <Paragraph>5.1 You hereby make the following representations and warranties to the Company:</Paragraph>
          <Paragraph>
            (a) You are the exclusive owner of any digital assets that you will use to interact in any way with
            AstroSwap;
          </Paragraph>
          <Paragraph>
            (b) You validly undertake any actions or enter into any transaction with regard to these Terms;
          </Paragraph>
          <Paragraph>
            (c) The digital assets that you will use to interact with AstroSwap shall not be derived from money
            laundering, terrorist financing, fraud, or any other illegal activities under any applicable law;
          </Paragraph>
          <Paragraph>
            (d) You shall understand and be aware of risks associated with accessing or using AstroSwap and any
            Third-Party Services and you shall be fully liable at your own risk;
          </Paragraph>
          <Paragraph>
            (f) You shall use AstroSwap in good faith and shall not use any of its elements for the purpose of
            concealing, or disguising the origin or nature of the proceeds derived from illegal or criminal activities;
          </Paragraph>
          <Paragraph>
            (g) You shall be aware that you are subject to Tax regulation in your jurisdiction and shall be fully
            responsible for any filling/reporting and paying any tax as required by any applicable law or regulation.
            The Company shall not be responsible to compensate you for your tax obligations or advise you in relation to
            your tax issues. Any uncertainties and unpredictable matters in tax legislation with respect to digital
            assets may expose you to unknown or unforeseeable tax implications, for which the Company shall have no
            liability. Furthermore, you shall hold the Company harmless from any expenses and losses, resulting from any
            unknown or unforeseeable tax implications;
          </Paragraph>
          <Paragraph>
            (h) You shall not breach any terms stipulated in these Terms, and the Privacy Policy, or any applicable laws
            and regulations in any relevant jurisdictions;
          </Paragraph>
          <Paragraph>
            (i) You shall not interfere, intercept, or expropriate our network system, data, or information;
          </Paragraph>
          <Paragraph>
            (j) You shall defend, indemnify, and hold harmless the Company, its affiliates, each of their respective
            employees, officers, directors, and representatives from and against any claims, damages, losses,
            liabilities, costs, and expenses (including reasonable attorney’s fees), arising out of or relating to any
            third-party claim concerning these Terms, or your use of AstroSwap in violation of these Terms and any
            applicable law or regulation;
          </Paragraph>
          <Paragraph>
            (k) You understand and acknowledge that AstroSwap is not a financial or payment service of any kind and in
            any jurisdiction. Any financial sounding terms found in the Website or in AstroSwap are used only as a basic
            reference, without any effective or legal meaning of the same terms in a regulated and/or traditional
            financial environment.
          </Paragraph>
          <Paragraph>
            5.2 Each of the representations and warranties in these Terms shall survive and continue to have full force
            and effect after the execution of these Terms.
          </Paragraph>
          <Paragraph>
            5.3 The Company makes no representation, warranty, or guarantee to you of any kind. AstroSwap is offered
            strictly on an as-is basis and, without limiting the generality of the foregoing, are offered without any
            representation as to merchantability or fitness for any particular purpose.
          </Paragraph>
          <Title2>6. Risk Disclosure</Title2>
          <Paragraph>
            By accessing or using the Website or AstroSwap, you expressly acknowledge and assume the following risks:
          </Paragraph>
          <Paragraph>
            6.1 Risk of loss in value as digital assets are not issued by any central banks or national, supra-national,
            or quasi-national organizations. They are also not backed by any hard assets or other credit. The value of
            digital assets is affected by several factors, including but not limited to:
          </Paragraph>
          <Paragraph>(a) the total number of digital assets in existence;</Paragraph>
          <Paragraph>
            (b) the continued willingness of market participants to exchange government-issued currency for digital
            assets;
          </Paragraph>
          <Paragraph>(c) purchasers’ expectations with respect to the rate of inflation of fiat currencies;</Paragraph>
          <Paragraph>
            (d) purchasers’ expectations with respect to the rate of deflation of cryptocurrencies, interest rates,
            currency exchange rates, cyber theft of cryptocurrencies from online digital wallet providers or news of
            such theft from such providers or individuals’ digital wallets;
          </Paragraph>
          <Paragraph>(e) investment and trading activities of large investors;</Paragraph>
          <Paragraph>(f) monetary policies of the governments;</Paragraph>
          <Paragraph>(g) trade restrictions;</Paragraph>
          <Paragraph>(h) currency devaluations and revaluations;</Paragraph>
          <Paragraph>(i) regulatory measures; or</Paragraph>
          <Paragraph>(j) the global or regional political, economic or financial events and situations.</Paragraph>
          <Paragraph>
            All these factors may affect the value of digital assets, which may result in the permanent, partial or
            total loss of the value of a particular digital asset. No one shall be obliged to guarantee the liquidity or
            the market price of any of the digital assets You use to interact with AstroSwap. The volatility and
            unpredictability of the value of digital assets relative to government-issued currency may result in a
            significant loss over a short period of time.
          </Paragraph>
          <Paragraph>
            6.2 The regulatory regime governing digital assets and the regulatory framework relating to digital assets
            remains unsettled, and any laws, regulations, or guidelines may be significantly revised and amended which
            shall materially and adversely affect the value of digital assets.
          </Paragraph>
          <Paragraph>
            6.3 The Website and AstroSwap may experience system failures, unplanned interruptions in its network or
            services, hardware or software defects, security breaches or other causes that could adversely affect the
            Company’s infrastructure network, which includes the Website. The Company is unable to anticipate when there
            would be the occurrence of hacks, cyber-attacks, mining attacks, including but not limited to double-spend
            attacks, majority mining power attacks and selfish-mining attacks, distributed denials of services or
            errors, vulnerabilities or defects in any component of the Website or AstroSwap or any related technology,
            including but not limited to smart contract technology. The Company is unable to detect these hacks as
            mentioned earlier, mining attacks, cyber-attacks, distributed denials of services errors vulnerabilities or
            defects in a timely manner and does not have sufficient resources to efficiently cope with multiple services
            incidents happening simultaneously or in rapid succession. In addition, the Website and AstroSwap could be
            disrupted by numerous events, including natural disasters, equipment breakdown, network connectivity
            downtime, power losses, or even intentional disruptions of its services, such as disruptions caused by
            software viruses or attacks by unauthorized users, some of which are beyond the Company’s control. Although
            the Company has taken steps against malicious attacks, there can be no assurance that cyber-attacks, such as
            distributed denials of service, shall not be attempted in the future, and that the Company’s enhanced
            security measures shall be effective. Any significant breach of the Company’s security measures or other
            disruptions resulting in a compromise of the usability, stability and security of the Company’s network or
            services, including AstroSwap, may adversely affect also any related digital token.
          </Paragraph>
          <Paragraph>
            6.4 The Company shall have no liability for any delay, error, interruption or failure to perform any
            obligation under these Terms where the delay or failure is directly or indirectly resulting from any causes
            beyond the Company’s control, including but not limited to:
          </Paragraph>
          <Paragraph>(a) Acts of God, nature, court of government;</Paragraph>
          <Paragraph>
            (b) Failure or interruption in public or private telecommunication networks, communication channels or
            information system;
          </Paragraph>
          <Paragraph>(c) Acts or omission of acts of a party for whom we are not responsible;</Paragraph>
          <Paragraph>(d) Delay, failure or interruption in, or unavailability of, third-party services; or</Paragraph>
          <Paragraph>(e) Strikes, lockouts, labour disputes, wars, terrorist acts and riots.</Paragraph>
          <Paragraph>(f) Global pandemics and other public health emergency crises.</Paragraph>
          <Paragraph>
            6.5 You understand and agree that you use the Website and AstroSwap at your own risk. This clause is not
            exhaustive and does not disclose all the risks or potential risks that may be associated with digital assets
            and the use of AstroSwap. You are strongly recommended to carefully consider whether such use is suitable
            for you in light of your circumstances and financial positions.
          </Paragraph>

          <Title2>7. Limitation of Liability</Title2>
          <Paragraph>
            7.1 Notwithstanding any provision contained within these Terms, in no event, shall either Party be liable to
            the other for any type of incidental, special, exemplary, punitive, indirect or consequential damages,
            including but not limited to lost revenue, lost profits, replacement goods, loss of technology, loss of
            data, or interruption of loss of use of service or equipment, even if such Party was advised of the
            possibility of such damages, and whether arising under a theory of contract, tort, strict liability or
            otherwise.
          </Paragraph>
          <Paragraph>7.2 The Company or of its affiliates shall not and shall never be liable for:</Paragraph>
          <Paragraph>
            (a) your own management or performance of your owned digital assets (including any reduction in the value);
            or
          </Paragraph>
          <Paragraph>(b) any taxes or duties payable in whatever respect of your digital assets.</Paragraph>
          <Paragraph>
            7.3 Except as expressly provided in these Terms, to the maximum extent permitted by any applicable law or
            regulation, the Company disclaims all other representations or warranties, express or implied, made to you,
            your affiliates or any other person, including without limitation any warranties regarding the quality,
            suitability, merchantability, fitness for a particular purpose or otherwise (regardless of any course of
            dealing, custom or usage of trade) of any service or any goods provided incidental to AstroSwap under these
            Terms. The liabilities of the Company in respect of representations and warranties that are excluded under
            these Terms, at the Company’s sole option, is limited to any one of resupplying, replacing or repairing or
            paying the cost of the resupplying, replacement or repairing or paying the cost of resupplying the functions
            of AstroSwap in respect of which the breach occurred. In no event will the aggregate liability to the
            Company for any loss or damage arising in connection with AstroSwap exceed the fees levied by AstroSwap, if
            any, during the twelve (12) month period immediately preceding the event giving rise to the claim for
            liability. The foregoing limitations of liability shall apply to the fullest extent permitted by any
            applicable law or regulation.{' '}
          </Paragraph>

          <Paragraph>
            7.4 The Company shall have no liability for any Third-Party Services providers to You. The Company makes no
            representations or warranties whatsoever, expressed or implied, as to the accuracy, totality, timeliness,
            appropriateness, suitability, or vigour for any purpose or use of such Third-Party Services, products,
            services and information, customer and technical support or web presence or any of their presentations or
            representations. You shall acknowledge and agree that the Company shall not be liable in any way for the use
            of such Third-Party Services, such as third-party wallets.
          </Paragraph>

          <Title2>8. Indemnification</Title2>
          <Paragraph>
            8.1 You irrevocably undertake to fully indemnify and hold harmless the Company from and against any and all
            losses, claims, actions, proceedings, damages, demands, judgements, sums, liabilities, damages, costs,
            charges and expenses, including but not limited to any reasonable attorney’s fees, or penalties imposed by
            any regulatory authority, and reimbursements arising out of or related to the following situations:
          </Paragraph>
          <Paragraph>(a) your use of AstroSwap</Paragraph>

          <Paragraph>(b) your breach of or our enforcement of these Terms;</Paragraph>
          <Paragraph>
            (c) your violations of any applicable laws, regulation, or rights of any third party during your use of
            AstroSwap. If you are obligated to indemnify the Company, it shall have the right, at its sole discretion,
            to control any action or proceeding and to determine whether the Company wishes to proceed, or settle, and
            if so, on what terms or provisions.
          </Paragraph>

          <Title2>9. Termination</Title2>
          <Paragraph>
            9.1. These Terms shall be immediately terminated and not applicable to You if at any moment You do not use
            or interact with AstroSwap with any of your owned digital tokens.
          </Paragraph>

          <Title2>10. No Financial Advice; No Legal Advice</Title2>
          <Paragraph>
            10.1 The Company is not your broker, intermediary, agent, or legal advisor and has no fiduciary relationship
            or obligation to you in connection with any decisions or activities effected by you using AstroSwap.
          </Paragraph>
          <Paragraph>
            10.2 No communication or information provided to you by the Company is intended as or shall be considered or
            construed as, investment advice, financial advice, legal advice, or any other sort of advice.{' '}
          </Paragraph>

          <Paragraph>
            10.3 The Company shall not be liable for the decisions you make to access or use AstroSwap.
          </Paragraph>

          <Title2>11. Governing Law</Title2>
          <Paragraph>
            These Terms and the rights and obligations arising out of them or the access/use of the Website or AstroSwap
            shall be governed by and construed in accordance with the laws of St. Vincent and the Grenadines. The courts
            of St. Vincent and the Grenadines shall have exclusive jurisdiction to hear and determine any action or
            proceeding arising out of or in connection with these Terms and for that purpose both Parties irrevocably
            submit to the jurisdiction of the Courts of St. Vincent and the Grenadines.
          </Paragraph>
          <Title2>12. Miscellaneous</Title2>
          <Paragraph>
            12.1 Severability: If any provisions of these terms are found by the court of competent authorities to be
            invalid, void, unlawful or unenforceable under any applicable law, such unenforceability or invalidity shall
            not render these Terms unenforceable or invalid as a whole, and such provisions shall be deleted without
            affecting the remaining provisions herein.
          </Paragraph>
          <Paragraph>
            12.2 Variation of Terms: The Company has the right to revise these Terms, at our sole discretion at any
            time, and by using the Website and/or AstroSwap, you shall be expected to review such Terms regularly to
            ensure that you understand all provisions stipulated in these Terms.{' '}
          </Paragraph>
          <Paragraph>
            12.3 Assignment: the Company shall be allowed to assign, transfer, and subcontract its right and/or
            obligations under these Terms without any notification or your consent required. You shall not be permitted
            to assign, transfer, or subcontract any of your rights and/or obligations under these Terms without the
            prior written consent of the Company.{' '}
          </Paragraph>

          <Paragraph>
            12.4 Entire Agreement: These Terms, including the Privacy Policy and any rules written or contained on
            AstroSwap, constitute the sole and entire agreement between the Company and you with respect to your use of
            the Website and AstroSwap and supersede other prior or contemporaneous negotiations, discussions,
            agreements, understandings, representations, and warranties, both written and oral, between the Company and
            you with respect to such subject matter.{' '}
          </Paragraph>
          <Paragraph>
            12.5 No Third-Party Rights: Nothing in these Terms shall be deemed to create any rights in any creditors or
            other persons, not a party hereto, and these Terms shall not be construed in any respect to be a contract in
            whole or in part for the benefit of any third parties.{' '}
          </Paragraph>
          <Paragraph>
            12.6 Waiver: The failure of one Party to require performance of any provision shall not affect that Party’s
            right to require performance at any time thereafter. At the same time, the waiver of one Party to seek
            recovery for the other Party’s violation of these Terms of any provisions of applicable terms shall not
            constitute a waiver by that Party of any subsequent breach or violation by the other Party or of the
            provision itself.
          </Paragraph>
        </Content>
      </Page>
    </PageWrapper>
  )
}

export default TermsOfUse
