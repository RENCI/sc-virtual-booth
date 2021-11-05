import React, { Fragment } from "react"
import { useTheme } from 'styled-components'
import { Seo } from '../components/seo'
import { Hero } from '../components/hero'
import { Container } from '../components/layout'
import { Heading, Paragraph } from '../components/typography'
import { IconButton } from '../components/button'
import { List } from '../components/list'
import { Link } from '../components/link'
import sc21Logo from '../images/sc21-logo.png'

const HomePage = () => {
  const theme = useTheme()

  return (
    <Fragment>
      <Seo title="Home" />

      <Hero backgroundColor={ theme.color.black }>
        <img
          src={ sc21Logo }
          alt="SC21 Virtual Booth Logo"
          style={{ width: '178px', height: '191px', margin: 'auto' }}
        />
        <Heading style={{ color: theme.color.primary.main, fontWeight: 'normal', letterSpacing: '2px', margin: 'auto' }}>RENCI's Virtual Booth</Heading>
      </Hero>
      
      <Container>
        <Paragraph align="center" width="600px">
          <Link to="https://sc21.supercomputing.org/">SC21</Link> &mdash; this year’s International Conference for High Performance Computing, Networking,
          Storage, and Analysis &mdash; will be held Nov. 14-19, 2021.
          RENCI’s virtual booth highlights the newest advances from our researchers. 
        </Paragraph>
        
        <Paragraph align="center" width="600px">
          We look forward to this yearly gathering of the HPC community for the opportunity to connect with others and to build future collaborations.
          If our work interests you, please click the contact button on the page of interest, and one of our researchers will reach out to you shortly. 
        </Paragraph>

        <br /><br />

        <Heading>WE DO DATA SCIENCE</Heading>
        <Paragraph>
          Every sector of society is undergoing a historic transformation driven by big data. <Link to="https://www.renci.org/">RENCI</Link> is committed
          to transforming data into discoveries by partnering with leading universities, government, and the private sector
          to create tools and technologies that facilitate data access, sharing, analysis, management, and archiving. 
        </Paragraph>
        
        <Paragraph>
          Our efforts in data science span multiple initiatives and domain areas, including: 
        </Paragraph>

        <List bullets="disc"
          items={
            [
              <span>
                The <Link to="/nrig">Networking and Research Infrastructure Group</Link> (NRIG) and
                its $20 million NSF grant, FABRIC, along with other major projects such as
                {' '}<Link to="/nrig#ci-compass">CI Compass</Link>,
                {' '}<Link to="/nrig#poseidon">Poseidon</Link>, and
                {' '}<Link to="/nrig#atlantic-wave-sdx">Atlantic Wave-SDX</Link>.
              </span>,
              <span>
                <Link to="/irods">iRODS</Link>, open source data management software used by research, commercial, and governmental organizations worldwide.
              </span>,
              <span>
                Cutting-edge health science research, including the
                {' '}<Link to="/clinical-informatics#bdc">NHLBI BioData Catalyst</Link> project,
                {' '}<Link to="/clinical-informatics#data-translator">NCATS Biomedical Data Translator</Link>,
                and multiple translational science projects.
              </span>,
              <span>
                <Link to="/eds">Earth Data Science</Link> solutions that address the intersection of high performance and
                high throughput computing with Earth research by utilizing computational tools such as the storm surge and wind-wave model ADCIRC.
              </span>,
              <span>
                National initiatives
                - such as
                the <Link to="/collaborations#sbdh">South Big Data Hub</Link> and
                the <Link to="/collaborations#ncds">National Consortium for Data Science</Link> (NCDS)
                - that connect the data science community to each other and important resources.
              </span>,
            ]
          }
        />

        <br /><br />

        <IconButton cta link to="https://forms.gle/dQL3erSb2QnDVcQAA" icon="groups" iconFill="#eee" iconSize={ 24 }>
          Request a Meeting
        </IconButton>

        <br />

        <IconButton cta link to="https://us3.list-manage.com/subscribe?u=c8914f488de27003a4fd3f676&id=419ad26f9d" icon="email" iconFill="#eee" iconSize={ 24 }>
          Sign up for RENCI project updates
        </IconButton>

        <br />

      </Container>
    </Fragment>
  )
}

export default HomePage
