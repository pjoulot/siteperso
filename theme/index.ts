import { extendTheme } from '@chakra-ui/react';
import colors from './colors';
import Button from './components/button'

const overrides = {
  colors,
  components: {
    Button,
  },
};
export default extendTheme(overrides);