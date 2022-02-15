import React from "react";
import { Button, chakra, Box, Flex, SimpleGrid, Container, useColorModeValue } from "@chakra-ui/react";
import Heading2 from "./headings/Heading2";
import BlogPostCard from "./BlogPostCard";

const FeaturedBlogList = () => {
    return (
        <Container maxW={'7xl'} py={24}>
            <chakra.p
              color={useColorModeValue("orange.600", "orange.600")}
              fontWeight="semibold"
              textAlign="center"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              Blog
            </chakra.p>
            <Heading2 mb={12} textAlign="center">
                Latest articles
            </Heading2>
            <SimpleGrid columns={[1, 1, 2, 3]} spacing='20px'>
                <BlogPostCard />
                <BlogPostCard />
                <BlogPostCard />
            </SimpleGrid>
            <Box mt={16} textAlign="center">
                <Button
                variant={"solid"}
                colorScheme={"brand"}>
                Read the blog
                </Button>
            </Box>
        </Container>
    );
};

export default FeaturedBlogList;
