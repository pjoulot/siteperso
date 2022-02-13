import Head from 'next/head'
import Image from 'next/image'
import { SimpleGrid, Container, Flex, useColorModeValue } from "@chakra-ui/react";
import PageContainer from '../components/PageContainer'
import HomeHero from '../components/HomeHero'
import ProjectList from '../components/ProjectList'
import FeaturedBlogList from '../components/FeaturedBlogList'
import SplitWithImage from '../components/SplitWithImage'
import Features2Columns from '../components/Features2Columns'

export default function Home() {
  return (
    <PageContainer
      title="Philippe Joulot - Developer, Web, Drupal"
      description="Philippe Joulot, software/web developer"
    >
      <HomeHero />
      <Features2Columns />
      <SplitWithImage
        pretitle={"7 years of experience"}
        title={"Drupal expert"}
        description={"After many years using Drupal, I had the chance to build website for the small businesses to the multinational companies dealing with various complexity. I am now part of the Drupal association and involved in the Drupal community by maintaining multiple contrib modules."}
      />
      <ProjectList />
      <FeaturedBlogList />
    </PageContainer>
  )
}
