import React from "react";
import { Section, Box, Image, Media } from "react-bulma-components";
import { HeadingWithBackground, Space } from "..";
import { ParallaxImage } from "../../assets";
import Tile from "../Tile";
import Tilt from "react-parallax-tilt";

const max = 4;
const tiltEnabled = true;

const aboutData = [
  {
    title: "12 ways to travel sustainably in the new year",
    picture:
      "https://www.nationalgeographic.com/content/dam/ngdotcom/rights-exempt/homepage/hero-crops/sustainable-travel-newyear-newcrop_14.adapt.1190.1.jpg",
  },
  {
    title: "Why whale watching is having a moment—in New York City",
    picture:
      "https://www.nationalgeographic.com/content/dam/travel/2021-digital/whale-watching-nyc/celia-ackerman_for-nat-geo_9559.adapt.590.1.jpg",
  },
  {
    title: "What vaccines mean for the return of travel",
    picture:
      "https://www.nationalgeographic.com/content/dam/travel/2021-digital/travel-poll/gettyimages-1230244722.adapt.590.1.jpg",
  },
  {
    title: "How viruses shape our world",
    picture:
      "https://www.nationalgeographic.com/content/dam/magazine/rights-exempt/2021/02/viruses/viruses-embryo-og.adapt.1190.1.jpg",
  },
];

const NewsItem = ({ title, description, picture }) => (
  <Box
    style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
    paddingless
    radiusless
  >
    <Media>
      <Media.Item position="left">
        <figure class="image" style={{ height: 256, width: 256, backgroundImage: `url(${picture})`, backgroundSize: 'cover' }} />
      </Media.Item>
      <Media.Content style={{padding: 24, paddingLeft: 8}}>
        <p>
          <strong>{title}</strong> <small>@johnsmith</small> <small>31m</small>
          <br></br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          efficitur sit amet massa fringilla egestas. Nullam condimentum luctus
          turpis.
        </p>
      </Media.Content>
    </Media>
  </Box>
);

const About = () => (
  <Section
    style={{
      backgroundImage: `url(${ParallaxImage})`,
      backgroundAttachment: "fixed",
      paddingVertical: 200,
    }}
  >
    <Space />
    <Tile kind="ancestor">
        <Tile kind="parent" size={2} />
        <Tile kind="parent" size={8} style={{ backgroundOpacity: 50 }}>
            {/* <Tilt transitionSpeed={2000} tiltMaxAngleX={max} tiltMaxAngleY={max} tiltEnable={tiltEnabled}> */}
            <div>
            {aboutData.map((data, index) => (
                <NewsItem
                key={index}
                title={data.title}
                description={data.description}
                picture={data.picture}
                />
            ))}
            </div>
            {/* </Tilt> */}
        </Tile>
    </Tile>
    <Space />
  </Section>
);

export default About;
