import React from "react";
import {
    chakra,
    Button,
    Link,
    Box,
    useColorModeValue,
    Flex,
    SimpleGrid,
    Icon,
    Image,
} from "@chakra-ui/react";

import { FiExternalLink } from "react-icons/fi";
import { SiDrupal } from 'react-icons/si';

const SplitWithImage = (data) => {
    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0}>
            <Flex bgGradient='linear(to-tr, rgb(253, 71, 93), rgb(14, 4, 75))' position="relative">
                <Image
                    src="https://www.drupal.org/files/cta/background/DrupalCon_NA_Bg_8-alt_7_1_2.png"
                    alt="Drupal background"
                    fit="cover"
                    w="full"
                    h={{ base: 64, md: "full" }}
                    bg="gray.100"
                    loading="lazy"
                    opacity={0.2}
                />
                <Icon as={SiDrupal} color="white" fontSize={["6rem", "8rem", "15rem"]} position="absolute" top={0} bottom={0} left={0} right={0} m="auto" />
            </Flex>
            <Flex
                direction="column"
                alignItems="start"
                justifyContent="center"
                px={{ base: 4, md: 8, lg: 20 }}
                py={24}
                zIndex={3}
            >
                <chakra.span
                    color={useColorModeValue("brand.500", "gray.300")}
                    fontSize="lg"
                    textTransform="uppercase"
                    fontWeight="extrabold"
                >
                    {data.pretitle}
                </chakra.span>
                <chakra.h2
                    mb={4}
                    fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
                    fontWeight="bold"
                    color={useColorModeValue("gray.800", "white")}
                    lineHeight="shorter"
                    textShadow="2px 0 currentcolor"
                >
                    {data.title}
                </chakra.h2>
                <chakra.p
                    pr={{ base: 0, lg: 16 }}
                    mb={4}
                    fontSize="lg"
                    color={useColorModeValue("gray.600", "gray.400")}
                    letterSpacing="wider"
                >
                    {data.description}
                </chakra.p>
                <Box display="inline-flex">
                    <Link href="/">
                        <Button
                            mt={2}
                            variant={"solid"}
                            colorScheme={"brand"}
                        >
                            Visit my profile on Drupal.org
                            <Icon as={FiExternalLink} ml={2} />
                        </Button>
                    </Link>
                </Box>
            </Flex>
        </SimpleGrid>
    );
};

export default SplitWithImage;
