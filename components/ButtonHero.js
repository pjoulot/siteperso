import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Button,
  Stack,
  Image,
  Text,
  Icon,
} from "@chakra-ui/react";
import { AiOutlineArrowDown } from 'react-icons/ai';
import Heading1 from "./headings/Heading1";

const ButtonHero = () => {
  return (
    <Box px={8} py={24} mx="auto">
      <Box
        w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
        mx="auto"
        textAlign={{ base: "left", md: "center" }}
      >
        <Heading1 fontWeight={'bold'} mb={6} maxWidth={"800px"} mx={"auto"} fontFamily={"Poppins"}>
          Resume of a{" "}
          <Text
            display={{ base: "block", lg: "inline" }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-r, brand.500, purple.500)"
            fontWeight="extrabold"
          >
            passionate
          </Text>{" "}
          software developer
        </Heading1>
        <chakra.p
          px={{ base: 0, lg: 24 }}
          mb={6}
          fontSize={{ base: "lg", md: "xl" }}
          color={useColorModeValue("gray.600",'gray.300')}
        >
          I consider myself very lucky to do something I love for a living, so if you&apos;re looking for a invested person to work on your projects, don&apos;t hesitate to contact me.
        </chakra.p>
        <Stack
        direction={{base:"column",sm:"row"}}
          mb={{ base: 4, md: 8 }}
          spacing={2}
          justifyContent={{ sm: "left", md: "center" }}
        >
          <Button
            as="a"
            variant="solid"
            colorScheme="brand"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            w={{ base: "full", sm: "auto" }}
            mb={{ base: 2, sm: 0 }}
            size="lg"
            cursor="pointer"
          >
            Download my Resume
            <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </Icon>
          </Button>
          <Button
            as="a"
            colorScheme="gray"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            w={{ base: "full", sm: "auto" }}
            mb={{ base: 2, sm: 0 }}
            size="lg"
            cursor="pointer"
          >
            See my skills
            <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor" as={AiOutlineArrowDown}>
            </Icon>
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ButtonHero;
