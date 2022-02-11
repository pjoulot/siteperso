import React from "react";
import {
    useColorModeValue,
    Button,
} from "@chakra-ui/react";
import NextLink from 'next/link';


const MenuLink = (props) => {
    const bg = useColorModeValue("general.bgBody", "general.bgBodyDark");
    const cl = useColorModeValue("gray.800", "white");

    return (
        <NextLink href={props.href || "/"} passHref>
            <Button
                as="a"
                bg='linear-gradient(currentColor 0 0) bottom /var(--d, 0) 3px no-repeat'
                borderRadius={0}
                transition={'0.5s'}
                color={useColorModeValue("general.color", "white")}
                display="inline-flex"
                alignItems="center"
                fontSize="md"
                _hover={{ color: "brand.500", '--d': '100%' }}
                _focus={{ boxShadow: "none" }}
            >
                { props.children }
            </Button>
        </NextLink>
    );
};

export default MenuLink;
