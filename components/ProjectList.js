import React from "react";
import { Button, chakra, Box, useColorModeValue, SimpleGrid, Container } from "@chakra-ui/react";
import Heading2 from "./headings/Heading2";
import CardProject from "./CardProject";

const ProjectList = () => {
    return (
        <Box bg={useColorModeValue('orange.200', "gray.600")}>
            <Container maxW={'7xl'} py={24}>

                <Heading2 mb={12} textAlign="center">
                    My projects
                </Heading2>
                <SimpleGrid columns={1} spacingY='60px' justifyItems={'center'}>
                    <CardProject />
                    <CardProject />
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
