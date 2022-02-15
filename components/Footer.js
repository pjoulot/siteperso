import React from "react";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaGithubAlt, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { SiDrupal } from 'react-icons/si';
import { CgNpm } from 'react-icons/cg';


const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      border={'1px'}
      borderColor={useColorModeValue('blackAlpha.200', 'whiteAlpha.200')}
      fontSize='1.2em'
      rounded={'full'}
      w={14}
      h={14}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease, color 0.3s ease, border-color 0.3s ease'}
      _hover={{
        borderColor: 'brand.500',
        color: 'brand.500',
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      mt="2em"
      borderTop="1px solid"
      borderTopColor="gray.200"
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'7xl'}
        py={12}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text>© 2016 - 2022 Philippe Joulot. All rights reserved.</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'GitHub'} href={'https://github.com/pjoulot'}>
            <FaGithubAlt />
          </SocialButton>
          <SocialButton label={'LinkedIn'} href={'http://fr.linkedin.com/pub/philippe-joulot/89/490/b7a'}>
            <FaLinkedinIn />
          </SocialButton>
          <SocialButton label={'Twitter'} href={'https://twitter.com/Stargayte'}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={'Drupal'} href={'https://www.drupal.org/u/phjou'}>
            <SiDrupal />
          </SocialButton>
          <SocialButton label={'Npm'} href={'https://www.npmjs.com/~stargayte'}>
            <CgNpm />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
