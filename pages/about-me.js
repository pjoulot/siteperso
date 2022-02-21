import Head from 'next/head'
import Image from 'next/image'
import * as React from 'react';
import ImageNext from '../components/ImageNext';
import { Link, Button, Icon, SimpleGrid, Container, Flex, useColorModeValue } from "@chakra-ui/react";
import PageContainer from '../components/PageContainer'
import HomeHero from '../components/HomeHero'
import AboutHero from '../components/AboutHero'
import SplitWithImage from '../components/SplitWithImage'
import { FiExternalLink } from "react-icons/fi";
import { SiDrupal } from 'react-icons/si';

export default function Home() {
    const buttonGithub = <Link href="/">
        <Button
            mt={2}
            variant={"solid"}
            colorScheme={"brand"}
        >
            Visit my github
            <Icon as={FiExternalLink} ml={2} />
        </Button>
    </Link>;
    const imageCode = <React.Fragment>
        <ImageNext
            src="https://www.philippejoulot.fr/assets/images/coding.jpg"
            alt="Code on screen"
            fit="cover"
            w="full"
            h={{ base: 64, md: "full" }}
            bg="gray.100"
            loading="lazy"
            opacity={0.4}
        />
    </React.Fragment>;
    const imageOrca = <React.Fragment>
        <ImageNext
            src="https://www.philippejoulot.fr/assets/design/orca_background.jpg"
            alt="Orca breaching water"
            fit="cover"
            w="full"
            h={{ base: 64, md: "full" }}
            bg="gray.100"
            loading="lazy"
            opacity={0.4}
        />
    </React.Fragment>;
    const imageSciFi = <React.Fragment>
        <ImageNext
            src="https://www.philippejoulot.fr/assets/images/planet.jpg"
            alt="Planet"
            fit="cover"
            w="full"
            h={{ base: 64, md: "full" }}
            bg="gray.100"
            loading="lazy"
            opacity={0.4}
        />
    </React.Fragment>;

    return (
        <PageContainer
            title="Philippe Joulot - About Me"
            description="Philippe Joulot, software/web developer"
        >
            <AboutHero />
            <SplitWithImage
                orientation={"left"}
                image={imageCode}
                pretitle={"Code, Experiment"}
                title={"Computer sciences"}
                description={"My passion for computer sciences and the web gave me the wonderful opportunity to be a software developer. I love writing code and realize all diffent of ideas that come through my mind. I also like to combine my other interests with coding. I develop mostly web applications and websites, but I also like to discover, experiment with other technologies. I have a particular interest in Open Source and I like to spend some time to contribute for projects like Drupal, Open Street Maps, Aframe (WebVR)."}
                links={buttonGithub}
            />
            <SplitWithImage
                orientation={"right"}
                image={imageOrca}
                pretitle={"We are the orcas"}
                title={"Orcas"}
                description={"I love animals a lot and in particular orcas that are my favorites. When I was a child, I discovered orcas with Keiko in the movie Free Willy, since then I have always admired this animal. That was one of the reasons why I moved to Vancouver, I can now do some whale watching from time to time."}
            />
            <SplitWithImage
                orientation={"left"}
                image={imageSciFi}
                pretitle={"May the force be with you"}
                title={"Sci Fi and conventions"}
                description={"I am a big fan of TV shows (especially Stargate), and I maintain some websites about this subject. I also participate to sci-fi and TV shows conventions where I love to meet the actors and fans from all over the world."}
            />
        </PageContainer>
    )
}
