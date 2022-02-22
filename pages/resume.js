import Head from 'next/head'
import Image from 'next/image'
import * as React from 'react';
import ImageNext from '../components/ImageNext';
import { Link, Button, Icon, SimpleGrid, Container, Flex, useColorModeValue } from "@chakra-ui/react";
import PageContainer from '../components/PageContainer'
import ButtonHero from '../components/ButtonHero'
import FeaturesList from '../components/FeaturesList'
import Skills from '../components/Skills'
import { FiExternalLink } from "react-icons/fi";
import { SiDrupal } from 'react-icons/si';

export default function Resume() {
    return (
        <PageContainer
            title="Philippe Joulot - About Me"
            description="Philippe Joulot, software/web developer"
        >
            <ButtonHero />
            <Skills />
            <FeaturesList />
        </PageContainer>
    )
}
