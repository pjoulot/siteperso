import React from "react";
import {
    chakra,
    Box,
    Flex,
    useColorModeValue,
    Icon,
    Stack,
} from "@chakra-ui/react";
import Heading2 from "./headings/Heading2";

export default function FeaturesList() {
    const Feature = (props) => {
        return (
            <Flex>
                <Flex shrink={0}>
                    <Flex
                        alignItems="center"
                        justifyContent="center"
                        h={12}
                        w={12}
                        rounded="md"
                        bg={useColorModeValue("brand.500")}
                        color="white"
                    >
                        <Icon
                            boxSize={6}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            {props.icon}
                        </Icon>
                    </Flex>
                </Flex>
                <Box ml={4}>
                    <chakra.dt
                        fontSize="lg"
                        fontWeight="medium"
                        lineHeight="6"
                        color={useColorModeValue("gray.900")}
                    >
                        {props.title}
                    </chakra.dt>
                    <chakra.dd mt={2} color={useColorModeValue("gray.500", "gray.400")}>
                        {props.children}
                    </chakra.dd>
                </Box>
            </Flex>
        );
    };
    return (
        <Flex
            bg={useColorModeValue("#F9FAFB", "gray.600")}
            p={20}
            w="auto"
            justifyContent="center"
            alignItems="center"
        >
            <Box py={12} bg={useColorModeValue("white", "gray.800")} shadow="lg" rounded="xl">
                <Box maxW="7xl" mx="auto" px={{ base: 4, lg: 8 }}>
                    <Box textAlign={{ lg: "center" }}>
                        <Heading2>
                            Languages
                        </Heading2>
                    </Box>

                    <Box mt={10}>
                        <Stack
                            spacing={{ base: 10, md: 0 }}
                            display={{ md: "grid" }}
                            gridTemplateColumns={{ md: "repeat(3,1fr)" }}
                            gridColumnGap={{ md: 8 }}
                            gridRowGap={{ md: 10 }}
                        >
                            <Feature
                                title="French"
                                icon={
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                    />
                                }
                            >
                                Mother-Tongue
                            </Feature>

                            <Feature
                                title="English"
                                icon={
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                    />
                                }
                            >
                                Fluent
                            </Feature>

                            <Feature
                                title="Spanish"
                                icon={
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                    />
                                }
                            >
                                Academic level, A2 (According to the Council of Europe)
                            </Feature>
                        </Stack>
                    </Box>
                </Box>
            </Box>
        </Flex>
    );
}
