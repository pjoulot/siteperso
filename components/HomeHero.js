import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  PseudoBox,
  useColorModeValue,
  keyframes,
} from '@chakra-ui/react';
import ImageNext from './ImageNext';
import Heading1 from "./headings/Heading1";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import colors from '../theme/colors';

const swing = keyframes`
  from {transform: rotate(3deg);}
  to {transform: rotate(-3deg)}
`;

export default function HomeHero() {
  const swingAnimation = `${swing} ease-in-out 2s infinite alternate`;

  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading1
            lineHeight={1.3}
          >
            <RoughNotation type="underline" show={true} color={colors['brand']['500']} iterations={2} strokeWidth={10}>
              Coding,
            </RoughNotation>
            <br />
            <Text as={'span'} color={'brand.500'}>
              is in my DNA!
            </Text>
          </Heading1>
          <Text color={'gray.500'}>
            Developping software has been a hobbie since high school, now it is also my job. I am very lucky to be able to do what I love for a living, so if you&apos;re looking for a passionate developer, you are at the right place!
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}>
            <Button
              variant={"solid"}
              colorScheme={"brand"}>
              Discover my projects
            </Button>
            <Button
              variant={"outline"}
              colorScheme={"orange"}
              leftIcon={<PlayIcon h={4} w={4} color={'orange'} />}>
              Work with me
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          flexDirection={'column'}
          position={'relative'}
          w={'full'}>
          <Blob
            w={'150%'}
            h={'150%'}
            position={'absolute'}
            top={'-20%'}
            left={0}
            zIndex={-1}
            color={useColorModeValue('brand.100', 'orange.400')}
          />
          <Box
            position={'relative'}
            height={'400px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'70%'}
            overflow={'hidden'}>
            <ImageNext
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={
                'https://hips.hearstapps.com/esq.h-cdn.co/assets/17/11/4000x2250/hd-aspect-1489514996-esq040117chrisevans002.jpg?resize=2048:*'
              }
            />
          </Box>
          <Box mt={'2em'}>
            <Box
              py={"1em"}
              px={"2em"}
              bg={useColorModeValue('brand.200', 'brand.600')}
              animation={swingAnimation}
              transformOrigin={'center -20px'}
              position={'relative'}
              zIndex={2}
              _after={{
                content: `""`,
                bg: "black",
                width: '1px',
                height: '3em',
                top: '-2.5em',
                left: '1.5em',
                position: 'absolute',
                transform: 'rotate(30deg)',
                zIndex: '1',
              }}
              _before={{
                content: `""`,
                bg: "black",
                width: '1px',
                height: '3em',
                top: '-2.5em',
                right: '1.5em',
                position: 'absolute',
                transform: 'rotate(-30deg)',
                zIndex: '1',
              }}
            >
              <Text fontSize={"2em"} fontFamily={"Quicksand"} fontWeight={"bold"}>It&apos;s me</Text>
            </Box>
            {/* <RoughNotation type="highlight" show={true} color={colors['brand']['200']} animate={false} strokeWidth={5}>
              <Text fontSize={"2em"} fontFamily={"Quicksand"} fontWeight={"bold"}>I am Philippe</Text>
            </RoughNotation> */}
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}

const PlayIcon = createIcon({
  displayName: 'PlayIcon',
  viewBox: '0 0 58 58',
  d:
    'M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z',
});

export const Blob = (props) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};
