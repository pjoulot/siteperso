import * as React from 'react';
import ImageNext from '../components/ImageNext';
import { Link, Button, Icon } from "@chakra-ui/react";
import PageContainer from '../components/PageContainer'
import HomeHero from '../components/HomeHero'
import ProjectList from '../components/ProjectList'
import FeaturedBlogList from '../components/FeaturedBlogList'
import SplitWithImage from '../components/SplitWithImage'
import Features2Columns from '../components/Features2Columns'
import { FiExternalLink } from "react-icons/fi";
import { SiDrupal } from 'react-icons/si';

export default function Home() {
  const buttonGithub = <Link href="/">
    <Button
      mt={2}
      variant={"solid"}
      colorScheme={"brand"}
    >
      Visit my profile on Drupal.org
      <Icon as={FiExternalLink} ml={2} />
    </Button>
  </Link>;
  const imageSplit = <React.Fragment>
    <ImageNext
      src="https://www.drupal.org/files/cta/background/DrupalCon_NA_Bg_8-alt_7_1_2.png"
      alt="Drupal background"
      fit="cover"
      w="full"
      h={{ base: 64, md: "full" }}
      bg="gray.100"
      loading="lazy"
      opacity={0.2}
    />
    <Icon as={SiDrupal} color="white" fontSize={["6rem", "8rem", "15rem"]} position="absolute" top={0} bottom={0} left={0} right={0} m="auto" />
  </React.Fragment>;

  return (
    <PageContainer
      title="Philippe Joulot - Developer, Web, Drupal"
      description="Philippe Joulot, software/web developer"
    >
      <HomeHero />
      <Features2Columns />
      <SplitWithImage
        orientation='left'
        image={imageSplit}
        pretitle={"7 years of experience"}
        title={"Drupal expert"}
        description={"After many years using Drupal, I had the chance to build website for the small businesses to the multinational companies dealing with various complexity. I am now part of the Drupal association and involved in the Drupal community by maintaining multiple contrib modules."}
        links={buttonGithub}
      />
      <ProjectList />
      <FeaturedBlogList />
    </PageContainer>
  )
}
