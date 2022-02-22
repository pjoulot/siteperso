import React from "react";
import { Button, chakra, Box, Flex, useColorModeValue, Link } from "@chakra-ui/react";
import Heading3 from "./headings/Heading3";

const CardProject = (props) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      mx={{ lg: 8 }}
      display={{ lg: "flex" }}
      maxW={{ lg: "5xl" }}
      shadow={{ base: "orange" }}
      rounded={{ lg: "lg" }}
    >
      <Box w={{ lg: "50%" }}>
        <Box
          h={{ base: 64, lg: "full" }}
          rounded={{ lg: "lg" }}
          bgSize="cover"
          backgroundPosition={"center"}
          style={{
            backgroundImage:
              "url('" + props.image + "')",
          }}
        ></Box>
      </Box>

      <Box py={12} px={6} maxW={{ base: "xl", lg: "5xl" }} w={{ lg: "50%" }}>
        <Heading3>
          { props.title }
        </Heading3>
        <chakra.p mt={4} color={useColorModeValue("gray.600", "gray.400")}>
          { props.description }
        </chakra.p>

        <Box mt={8}>
          <Flex
            gap={'20px'}
            w="auto">
              {props.links}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default CardProject;
