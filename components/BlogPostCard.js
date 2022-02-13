import React from "react";
import {
    chakra,
    Box,
    Image,
    Flex,
    useColorModeValue,
    Link,
} from "@chakra-ui/react";
import Heading3 from "./headings/Heading3";

const BlogPostCard = () => {
    return (

        <Box
            mx="auto"
            rounded="lg"
            shadow="md"
            bg={useColorModeValue("white", "gray.800")}
            maxW="2xl"
        >
            <Image
                roundedTop="lg"
                w="full"
                h={64}
                fit="cover"
                src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="Article"
            />

            <Box p={6}>
                <Box>
                    <chakra.span
                        fontSize="xs"
                        fontWeight={"semibold"}
                        fontFamily={"Quicksand"}
                        textTransform="uppercase"
                        color={useColorModeValue("brand.500", "brand.500")}
                    >
                        Product
                    </chakra.span>
                    <Heading3>
                        <Link
                            display="block"
                            color={useColorModeValue("gray.800", "white")}
                            fontWeight="bold"
                            fontSize="2xl"
                            mt={2}
                            _hover={{ color: "gray.600", textDecor: "underline" }}

                        >
                            I Built A Successful Blog In One Year
                        </Link>
                    </Heading3>
                    <chakra.p
                        mt={2}
                        fontSize="sm"
                        color={useColorModeValue("gray.600", "gray.400")}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
                        parturient et sem ipsum volutpat vel. Natoque sem et aliquam
                        mauris egestas quam volutpat viverra. In pretium nec senectus
                        erat. Et malesuada lobortis.
                    </chakra.p>
                </Box>

                <Box mt={4}>
                    <Flex alignItems="center" justifyContent={"flex-end"}>
                        <chakra.span
                            mx={1}
                            fontSize="sm"
                            color={useColorModeValue("gray.600", "gray.300")}
                        >
                            21 SEP 2015
                        </chakra.span>
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
};

export default BlogPostCard;
