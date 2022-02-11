import React from "react";
import { Heading } from "@chakra-ui/react";

const Heading3 = (props) => {
  return (
    <Heading
        as={props.as || "h3"}
        {...props}
        lineHeight={1.1}
        fontWeight={700}
        fontSize={{ base: '1xl', sm: '2xl', lg: '3xl' }}>
            {props.children}
    </Heading>
  );
};

export default Heading3;
