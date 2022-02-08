import { extendTheme } from '@chakra-ui/react';
import colors from './colors';
import typography from './typography';
import Button from './components/button'

const overrides = {
  ...typography,
  colors,
  components: {
    Button,
  },
};
console.log(overrides);
export default extendTheme(overrides);