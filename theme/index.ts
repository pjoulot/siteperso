import { extendTheme } from '@chakra-ui/react';
import global from './global';
import colors from './colors';
import shadows from './shadows';
import typography from './typography';
import Button from './components/button'

const overrides = {
  ...typography,
  styles: {
    global,
  },
  colors,
  shadows,
  components: {
    Button,
  },
};
export default extendTheme(overrides);