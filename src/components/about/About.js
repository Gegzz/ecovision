import React from 'react'
import { Section, Box, Media, Heading } from 'react-bulma-components'
import { HeadingWithBackground, Space } from '..'
import { ParallaxImage } from '../../assets'
import Tile from '../Tile'
import { colors } from '../../consts'

const max = 4
const tiltEnabled = true

const aboutData = [
  {
    title: '12 ways to travel sustainably in the new year',
    picture:
      'https://www.nationalgeographic.com/content/dam/ngdotcom/rights-exempt/homepage/hero-crops/sustainable-travel-newyear-newcrop_14.adapt.1190.1.jpg'
  },
  {
    title: 'Why whale watching is having a moment—in New York City',
    picture:
      'https://www.nationalgeographic.com/content/dam/travel/2021-digital/whale-watching-nyc/celia-ackerman_for-nat-geo_9559.adapt.590.1.jpg'
  },
  {
    title: 'What vaccines mean for the return of travel',
    picture:
      'https://www.nationalgeographic.com/content/dam/travel/2021-digital/travel-poll/gettyimages-1230244722.adapt.590.1.jpg'
  },
  {
    title: 'How viruses shape our world',
    picture:
      'https://www.nationalgeographic.com/content/dam/magazine/rights-exempt/2021/02/viruses/viruses-embryo-og.adapt.1190.1.jpg'
  }
]

const NewsItem = ({ title, description, picture }) => (
  <Box
    style={{
      height: 512,
      backgroundImage: `url(${picture})`,
      backgroundSize: 'cover',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      width: '100%'
    }}
    radiusless>
    <div style={{ width: '100%' }}>
      <Heading style={{ color: colors.background, fontSize: 40 }}>
        {title}
      </Heading>
      <p style={{ color: colors.background }}>{description}</p>
    </div>
  </Box>
)

const About = () => (
  <Section
    style={{
      backgroundImage: `url(${ParallaxImage})`,
      backgroundAttachment: 'fixed',
      paddingVertical: 200
    }}>
    <Space>
      <Heading
        style={{ textAlign: 'center', color: colors.background }}
        size={2}
        weight="bold">
        Recent News
      </Heading>
    </Space>
    <Tile kind="ancestor">
      <Tile kind="parent" size={2} />
      <Tile
        kind="parent"
        size={8}
        style={{
          backgroundOpacity: 50,
          display: 'flex',
          flexDirection: 'column'
        }}>
        {/* <Tilt transitionSpeed={2000} tiltMaxAngleX={max} tiltMaxAngleY={max} tiltEnable={tiltEnabled}> */}
        {[aboutData[0]].map((data, index) => (
          <NewsItem
            key={index}
            title={data.title}
            description={data.description}
            picture={data.picture}
          />
        ))}
        {/* </Tilt> */}
      </Tile>
    </Tile>
    <Tile kind="ancestor" size={8}>
      {aboutData
        .reduce(function (result, value, index, array) {
          if (index % 2 === 0) result.push(array.slice(index, index + 2))
          return result
        }, [])
        .map((data, index) => (
          <Tile kind="parent" size={6}>
            <NewsItem
              key={index}
              title={data.title}
              description={data.description}
              picture={data.picture}
            />
          </Tile>
        ))}
    </Tile>
    <Space />
  </Section>
)

export default About
