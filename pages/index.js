import Head from 'next/head'
import Image from 'next/image'
import { SimpleGrid, Container, Flex, useColorModeValue } from "@chakra-ui/react";
import PageContainer from '../components/PageContainer'
import Hero from '../components/Hero'
import HomeHero from '../components/HomeHero'
import CardProject from '../components/CardProject'
import SplitWithImage from '../components/SplitWithImage'
import Features2Columns from '../components/Features2Columns'

export default function Home() {
  return (
    <PageContainer
      title="Philippe Joulot - Developer, Web, Drupal"
      description="Philippe Joulot, software/web developer"
    >
      <Hero />
      <HomeHero />
      <Features2Columns />
      <SplitWithImage />
      <Container maxW={'7xl'}>
        <SimpleGrid columns={1} spacingY='60px' justifyItems={'center'}>
          <CardProject />
          <CardProject />
        </SimpleGrid>
      </Container>
    </PageContainer>
  )
}
