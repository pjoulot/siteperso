import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  SimpleGrid,
  Icon,
  Image,
} from "@chakra-ui/react";

import { FiExternalLink } from "react-icons/fi";

const SplitWithImage = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0}>
      <Flex bg="brand.400">
        <Image
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
          alt="3 women looking at a laptop"
          fit="cover"
          w="full"
          h={{ base: 64, md: "full" }}
          bg="gray.100"
          loading="lazy"
          opacity={0.4}
        />
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
          color={useColorModeValue("brand.600", "gray.300")}
          fontSize="lg"
          textTransform="uppercase"
          fontWeight="extrabold"
        >
          7 years of experience
        </chakra.span>
        <chakra.h2
          mb={4}
          fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          color={useColorModeValue("gray.800", "white")}
          lineHeight="shorter"
          textShadow="2px 0 currentcolor"
        >
        Drupal expert
        </chakra.h2>
        <chakra.p
          pr={{ base: 0, lg: 16 }}
          mb={4}
          fontSize="lg"
          color={useColorModeValue("gray.600", "gray.400")}
          letterSpacing="wider"
        >
          After many years using Drupal, I had the chance to build website for the small businesses to the multinational companies dealing with various complexity.
          I am now part of the Drupal association and involved in the Drupal community by maintaining multiple contrib modules.
        </chakra.p>
        <Box display="inline-flex" rounded="md" shadow="md">
          <chakra.a

            mt={2}
            py={8}
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            px={5}
            py={3}
            border="solid transparent"
            fontWeight="bold"
            w="full"
            rounded="md"
            color={useColorModeValue("white")}
            bg={useColorModeValue("brand.600", "brand.500")}
            _hover={{
              bg: useColorModeValue("brand.700", "brand.600"),
            }}
          >
            Visit my profile on Drupal.org
            <Icon as={FiExternalLink} ml={2} />
          </chakra.a>
        </Box>
      </Flex>
    </SimpleGrid>
  );
};

export default SplitWithImage;
