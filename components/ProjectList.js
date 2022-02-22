import React from "react";
import { Button, Link, Icon, Box, useColorModeValue, SimpleGrid, Container } from "@chakra-ui/react";
import Heading2 from "./headings/Heading2";
import CardProject from "./CardProject";
import { FiExternalLink } from "react-icons/fi";

const ProjectList = () => {
    const buttonDrupal = <Link href="/">
        <Button
            mt={2}
            variant={"solid"}
            colorScheme={"brand"}
        >
            Visit my profile on Drupal.org
            <Icon as={FiExternalLink} ml={2} />
        </Button>
    </Link>;

    const buttonsAdoor = <React.Fragment>
        <Link
            href="https://github.com/pjoulot/a-door"
        >
            <Button
                w="auto"
                variant="solid"
                colorScheme="brand"
            >
                See on Github
            </Button>
        </Link>
        <Link
            href="https://www.npmjs.com/package/aframe-door"
        >
            <Button
                w="auto"
                variant="outline"
                colorScheme="orange"
            >
                See on NPM
            </Button>
        </Link>
    </React.Fragment>;

    return (
        <Box bg={useColorModeValue('orange.200', "gray.600")}>
            <Container maxW={'7xl'} py={24}>

                <Heading2 mb={12} textAlign="center">
                    My projects
                </Heading2>
                <SimpleGrid columns={1} spacingY='60px' justifyItems={'center'}>
                    <CardProject
                        title={"Drupal modules"}
                        description={"I worked a lot with Drupal consequently I have designed some contrib modules and became maintainer of existing ones. There are some names of the modules that I maintain on my free time: Bugherd, Layout Builder Base, Entity Dialog Formatter, PeerTube, Private Message, Svg Pan Zoom..."}
                        image={"https://www.drupal.org/sites/all/themes/bluecheese/images/og.jpg"}
                        links={buttonDrupal}
                    />
                    <CardProject
                        title={"A-door"}
                        description={"A-Door is a library for the framework A-frame in order to generate sliding doors in virtual reality with only one HTML tag! The package has lots of cool feature such as animation, sounds, vocal commands, proximity detection..."}
                        image={"https://camo.githubusercontent.com/f30daf07c523c2605dedea6423029e6517001165eab1aef2465ecf1309176991/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f433966792d4c6a5730415556745f482e706e67"}
                        links={buttonsAdoor}
                    />
                </SimpleGrid>
                <Box mt={16} textAlign="center">
                    <Button
                        variant={"solid"}
                        colorScheme={"brand"}>
                        See more projects
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default ProjectList;
