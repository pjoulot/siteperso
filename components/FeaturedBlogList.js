import React from "react";
import { Button, chakra, Box, Flex, SimpleGrid, Container } from "@chakra-ui/react";
import Heading2 from "./headings/Heading2";
import BlogPostCard from "./BlogPostCard";

const FeaturedBlogList = () => {
    return (
        <Container maxW={'7xl'} py={24}>
            <Heading2 mb={12} textAlign="center">
                Blog
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
