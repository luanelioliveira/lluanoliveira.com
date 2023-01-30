import { Box, HStack } from '@chakra-ui/react';

import { Social } from '../../types';
import { SocialLink } from './social-link';

interface SocialsProps {
  items: Social[];
}

export function Socials({ items }: SocialsProps) {
  return (
    <Box>
      <HStack spacing={6}>
        {items.map((item) => {
          return <SocialLink key={item.id} id={item.id} href={item.link} />;
        })}
      </HStack>
    </Box>
  );
}
