import { mode } from "@chakra-ui/theme-tools";

const global = (props) => ({
    body: {
        bg: mode('general.bgBody', 'general.bgBodyDark')(props),
    },
});

export default global;