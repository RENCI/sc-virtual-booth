import React from 'react'
import { Section } from '../components/layout'
import { Heading, Subheading, Paragraph } from '../components/typography'
import { List } from '../components/list'
import { Button } from '../components/button'
import { Link } from '../components/link'
import { VideoPlayer } from '../components/video-player'

export const FlyNet = () => {
  return (
    <Section>
      <Heading>FlyNet</Heading>

      <Paragraph>
        Unmanned Aerial Vehicles (also known as drones) are becoming popular in the sky.
        Their application reaches from hobby drones for leisurely activities to life-critical drones for organ transport to commercial applications such as air taxis.
        The safe, efficient, and economic operation of such drones poses a variety of challenges that have to be addressed by the science community.
        For example, drones need very detailed, close to the ground weather information for safe operations,
        and data processing and energy consumption of drones need to be intelligently handled.
        This project will provide tools that will allow researchers and drone application developers to address operational drone challenges by using advanced computer and network technologies.
      </Paragraph>

      <Paragraph>
        This project will provide an architecture and tools that will enable scientists to include edge computing devices in their computational workflows.
        This capability is critical for low latency and ultra-low latency applications like drone video analytics and route planning for drones.
        The proposed work will include four major tasks.
        First, cutting edge network and compute infrastructure will be integrated into the overall architecture to make them available as part of scientific workflows.
        Second, in-network processing at the network edge and core will be made available through new programming abstractions.
        Third, enhanced end-to-end monitoring capabilities will be offered.
        Finally, the architecture will leverage the Pegasus Workflow Management System to integrate in-network and edge processing capabilities.
      </Paragraph>

      <Paragraph>
        Providing best practices and tools that enable the use of advanced cyberinfrastructure for scientific workflows will have a broad impact on society in the long term.
        The science drivers that will be supported by this project have the potential to increase the safety and efficiency of drone applications,
        an area that will grow in significance in the foreseeable future.
        The project team will enable access to a rich set of resources for researchers and educators from a diverse set of institutions (historically black colleges and universities (HBCUs),
        community colleges, women’s colleges) to further democratize research.
        In addition, collaboration with the NSF REU (Research Experience for Undergraduates) Site in Consumer Networking
        will promote participation of under-served/under-represented students in project activities.
      </Paragraph>

      <Subheading>Links</Subheading>

      <List bullets="disc" items={[
        <Link to="https://www.dropbox.com/scl/fi/qvwc8511ig8jzcj2c2btc/Flynet-SC21-RENCIBooth.pptx?dl=1">FlyNet Presentation</Link>,
        <Link to="http://www.ecs.umass.edu/flynet/">FlyNet Website</Link>,
      ]} />

      <Subheading>Videos</Subheading>

      <VideoPlayer url="https://www.dropbox.com/s/rojzs06hoz259du/renci_booth_elyons.mp4?raw=1" controls={ true } />

      <br/><br/>
      
      <VideoPlayer url="https://youtu.be/MNN80OHMQUQ" />
      <br/><br/>

      <Button cta link to="https://forms.gle/dQL3erSb2QnDVcQAA">Contact FlyNet</Button>

      <br/><br/>

    </Section>
  )
}
