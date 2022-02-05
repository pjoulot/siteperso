import Head from 'next/head'
import Image from 'next/image'
import PageContainer from '../components/PageContainer'
import Hero from '../components/Hero'
import HomeHero from '../components/HomeHero'

export default function Home() {
  return (
    <PageContainer
      title="Philippe Joulot - Developer, Web, Drupal"
      description="Philippe Joulot, software/web developer"
    >
      <Hero/>
      <HomeHero/>
    </PageContainer>
  )
}
