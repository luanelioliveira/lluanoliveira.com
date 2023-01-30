import { Box, Icon, Text, VStack } from '@chakra-ui/react';

import { RiHeartFill as HeartIcon } from 'react-icons/ri';
import { Social } from '../../types';

import { ColorToogle } from '../ColorToogle';
import { Socials } from './socials';

interface FooterProps {
  socials: Social[];
}

export function Footer({ socials }: FooterProps) {
  return (
    <Box>
      <VStack>
        <Socials items={socials} />

        <Box>
          <Text fontSize="small" as="samp">
            Made with <Icon as={HeartIcon} color="red" /> by Luan Oliveira
          </Text>
        </Box>

        <Box>
          <Text fontSize="small" fontWeight="bold" color="gray.600">
            All Rights Reserved © 2022
          </Text>
        </Box>

        <ColorToogle />
      </VStack>
    </Box>
  );
}
