import {
  Box,
  HStack,
  Icon,
  IconButton,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';

import {
  RiGithubFill as GithubIcon,
  RiHeartFill as HeartIcon,
  RiInstagramLine as InstagramIcon,
  RiLinkedinBoxFill as LinkedinIcon,
  RiMailFill as MailIcon,
} from 'react-icons/ri';
import { Profile, Social } from '../../types';
import ColorToogle from '../ColorToogle';

const SOCIAL_ICONS = {
  instagram: <InstagramIcon />,
  linkedin: <LinkedinIcon />,
  github: <GithubIcon />,
  mail: <MailIcon />,
};

interface FooterProps {
  profile: Profile;
}

export function Footer({ profile }: FooterProps) {
  return (
    <Box>
      <VStack>
        <Box>
          <HStack>
            {profile.socials.map((social: Social) => {
              return (
                <Link key={social.id} href={social.link} isExternal>
                  <IconButton
                    icon={SOCIAL_ICONS[social.id]}
                    variant="link"
                    size="lg"
                    aria-label={social.name}
                  />
                </Link>
              );
            })}
          </HStack>
        </Box>

        <Box>
          <Text fontSize="small" as="samp">
            Made with <Icon as={HeartIcon} color="red" /> by {profile.name}
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
