import React from "react";
import { Button, chakra, Box, Flex, useColorModeValue, Link } from "@chakra-ui/react";
import Heading3 from "./headings/Heading3";

const CardProject = () => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      mx={{ lg: 8 }}
      display={{ lg: "flex" }}
      maxW={{ lg: "5xl" }}
      shadow={{ base: "base" }}
      rounded={{ lg: "lg" }}
    >
      <Box w={{ lg: "50%" }}>
        <Box
          h={{ base: 64, lg: "full" }}
          rounded={{ lg: "lg" }}
          bgSize="cover"
          style={{
            backgroundImage:
              "url('https://camo.githubusercontent.com/f30daf07c523c2605dedea6423029e6517001165eab1aef2465ecf1309176991/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f433966792d4c6a5730415556745f482e706e67')",
          }}
        ></Box>
      </Box>

      <Box py={12} px={6} maxW={{ base: "xl", lg: "5xl" }} w={{ lg: "50%" }}>
        <Heading3>
          A-Door
        </Heading3>
        <chakra.p mt={4} color={useColorModeValue("gray.600", "gray.400")}>
          A-Door is a library for the framework A-frame in order to generate sliding doors in virtual reality with only one HTML tag! The package has lots of cool feature such as animation, sounds, vocal commands, proximity detection...
        </chakra.p>

        <Box mt={8}>
          <Flex
            gap={'20px'}
            w="auto">
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
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default CardProject;
