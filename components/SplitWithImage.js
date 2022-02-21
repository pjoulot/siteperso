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
    Heading,
} from "@chakra-ui/react";
import ImageNext from './ImageNext';
import Heading1 from "./headings/Heading1";

import { FiExternalLink } from "react-icons/fi";
import { SiDrupal } from 'react-icons/si';

const SplitWithImage = (data) => {
    const imageContent = <Flex minHeight={'200px'} bgGradient={(data.orientation == 'left') ? 'linear(to-tr, rgb(253, 71, 93), rgb(14, 4, 75))' : 'linear(to-bl, rgb(253, 71, 93), rgb(14, 4, 75))'} position="relative" order={(data.orientation == 'left') ? [1, null, 1] : [1, null, 2]}>
        {data.image}
    </Flex>;
    const textContent = <Flex
        direction="column"
        alignItems="start"
        justifyContent="center"
        bg={useColorModeValue("white", null)}
        px={{ base: 4, md: 8, lg: 20 }}
        py={[12, null, 24]}
        zIndex={3}
        order={(data.orientation == 'left') ? [2, null, 2] : [2, null, 1]}
    >
        <chakra.span
            color={useColorModeValue("brand.500", "gray.300")}
            fontSize="lg"
            textTransform="uppercase"
            fontWeight="extrabold"
        >
            {data.pretitle}
        </chakra.span>
        <Heading1
            as="h2"
            mb={4}
        >
            {data.title}
        </Heading1>
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
            {data.links}
        </Box>
    </Flex>;

    return (
        <SimpleGrid columns={[1, null, 2]} spacing={0}>
            {data.orientation === 'left' &&
                <React.Fragment>
                    {imageContent}
                    {textContent}
                </React.Fragment>
            }
            {data.orientation === 'right' &&
                <React.Fragment>
                    {textContent}
                    {imageContent}
                </React.Fragment>
            }
        </SimpleGrid>
    );
};

export default SplitWithImage;
