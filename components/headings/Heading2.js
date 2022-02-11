import React from "react";
import { Heading } from "@chakra-ui/react";

const Heading2 = (props) => {
  return (
    <Heading
        as={props.as || "h2"}
        {...props}
        lineHeight={props.lineHeight || 1.1}
        fontWeight={props.fontWeight || 700}
        fontSize={{ base: '4xl', sm: '4xl', lg: '5xl' }}>
            {props.children}
    </Heading>
  );
};

export default Heading2;
