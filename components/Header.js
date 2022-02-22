import React from "react";
import {
  chakra,
  Container,
  HStack,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Box,
  Flex,
  IconButton,
  useColorModeValue,
  useDisclosure,
  CloseButton,
  VStack,
  Button,
  useColorMode,
  SimpleGrid,
  Stack,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useViewportScroll } from "framer-motion";

import { IoIosArrowDown } from "react-icons/io";
import { AiFillHome, AiOutlineInbox, AiOutlineMenu } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FaMoon, FaSun } from "react-icons/fa";
import MenuLink from "./links/MenuLink";

export default function Header() {
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const bg = useColorModeValue("general.bgBody", "general.bgBodyDark");
  const ref = React.useRef();
  const [y, setY] = React.useState(0);
  const { height = 0 } = ref.current ? ref.current.getBoundingClientRect() : {};

  const { scrollY } = useViewportScroll();
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);
  const cl = useColorModeValue("gray.800", "white");
  const mobileNav = useDisclosure();

  const Section = (props) => {
    const ic = useColorModeValue("brand.600", "brand.50");
    const hbg = useColorModeValue("gray.50", "brand.400");
    const tcl = useColorModeValue("gray.900", "gray.50");
    const dcl = useColorModeValue("gray.500", "gray.50");
    return (
      <Link
        m={-3}
        p={3}
        display="flex"
        alignItems="start"
        rounded="lg"
        _hover={{ bg: hbg }}

      >
        <chakra.svg
          flexShrink={0}
          h={6}
          w={6}
          color={ic}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          {props.icon}
        </chakra.svg>
        <Box ml={4}>
          <chakra.p fontSize="sm" fontWeight="700" color={tcl}>
            {props.title}
          </chakra.p>
          <chakra.p mt={1} fontSize="sm" color={dcl}>
            {props.children}
          </chakra.p>
        </Box>
      </Link>
    );
  };

  const MobileNavContent = (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? "flex" : "none"}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
      <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
        Dashboard
      </Button>
      <Button
        w="full"
        variant="solid"
        colorScheme="brand"

        leftIcon={<AiOutlineInbox />}
      >
        Inbox
      </Button>
      <Button
        w="full"
        variant="ghost"

        leftIcon={<BsFillCameraVideoFill />}
      >
        Videos
      </Button>
    </VStack>
  );
  return (
    <React.Fragment>
      <chakra.header
        ref={ref}
        shadow={y > height ? "sm" : undefined}
        transition="box-shadow 0.2s"
        bg={bg}
        w="full"
        pt="4rem"
        overflowY="hidden"
      >
        <Container maxW={'7xl'} h={'4.5rem'}>
          <Flex
            w="full"
            h="full"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex align="flex-start">
              <Link
                href="/"
                _hover={{ textDecoration: 'none' }}
              >
                <Box as="h1"
                  mr={["2rem", null, "6rem"]}
                >
                  <Text
                    fontWeight={600}
                    fontSize={'1.1rem'}
                    lineHeight={'1.5rem'}
                  >
                    Philippe Joulot
                  </Text>
                  <Text
                    fontWeight={300}
                    color="gray.500"
                  >
                    Full Stack Developer
                  </Text>
                </Box>
              </Link>
            </Flex>
            <Flex>
              <HStack spacing="5" display={{ base: "none", md: "flex" }}>
                <MenuLink href="/about-me">
                  About me
                </MenuLink>
                <MenuLink href="/resume">
                  Resume
                </MenuLink>
                <MenuLink href="/projects">
                  Projects
                </MenuLink>
                <MenuLink href="/">
                  Blog
                </MenuLink>
              </HStack>
            </Flex>
            <Spacer />
            <Flex justify="flex-end" align="center" color="gray.400">
              <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Switch to ${text} mode`}
                variant="ghost"
                color="current"
                mr={{ base: "0", md: "2rem" }}
                onClick={toggleMode}
                icon={<SwitchIcon />}
              />
              <HStack spacing="5" display={{ base: "none", md: "flex" }}>
                <Button colorScheme="brand" variant="solid" size="sm">
                  Contact
                </Button>
              </HStack>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                px="1.65rem"
                color={useColorModeValue("gray.800", "inherit")}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
            </Flex>
          </Flex>
          {MobileNavContent}
        </Container>
      </chakra.header>
    </React.Fragment>
  );
}
