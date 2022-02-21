import React from "react";
import {
  chakra,
  Box,
  Image,
  Flex,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";

import { MdLocationOn } from "react-icons/md";
import { BsFillBriefcaseFill, BsCodeSlash } from "react-icons/bs";

const UserCard = () => {
  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="sm"
        mx="auto"
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      >
        <Image
          w="full"
          h={56}
          fit="cover"
          objectPosition="center"
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          alt="avatar"
        />

        <Flex alignItems="center" px={6} py={3} bg="gray.900">
          <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
            Philippe Joulot
          </chakra.h1>
        </Flex>

        <Box py={4} px={6}>

          <chakra.p py={2} color={useColorModeValue("gray.700", "gray.400")}>
            Full Stack Developer , love coding and curious about new technologies.
          </chakra.p>

          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon
              as={BsFillBriefcaseFill}
              as={BsFillBriefcaseFill}
              h={6}
              w={6}
              mr={2}
            />

            <chakra.h1 px={2} fontSize="sm">
              Mellenger Interactive
            </chakra.h1>
          </Flex>

          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <Icon as={MdLocationOn} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
              Vancouver
            </chakra.h1>
          </Flex>

        </Box>
      </Box>
    </Flex>
  );
};

export default UserCard;
