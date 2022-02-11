import { mode } from "@chakra-ui/theme-tools";

const global = (props) => ({
    body: {
        bg: mode('general.bgBody', 'general.bgBodyDark')(props),
        color: mode('general.color', '#FFF')(props),
    },
});

export default global;