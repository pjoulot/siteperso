import React from "react";
import { Heading } from "@chakra-ui/react";

const Heading1 = (props) => {
  return (
    <Heading
        as={props.as || "h1"}
        {...props}
        lineHeight={1.1}
        fontWeight={700}
        fontSize={{ base: '5xl', sm: '5xl', lg: '6xl' }}>
            {props.children}
    </Heading>
  );
};

export default Heading1;
