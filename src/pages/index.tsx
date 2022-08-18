import {
  Box,
  Center,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import Head from 'next/head';

import {
  RiGithubFill as GithubIcon,
  RiHeartFill as HeartIcon,
  RiInstagramLine as InstagramIcon,
  RiLinkedinBoxFill as LinkedinIcon,
  RiMailFill as MailIcon,
} from 'react-icons/ri';

const SOCIAL_ICONS = {
  instagram: <InstagramIcon />,
  linkedin: <LinkedinIcon />,
  github: <GithubIcon />,
  mail: <MailIcon />,
};

interface Social {
  id: string;
  name: string;
  link: string;
}

interface Profile {
  site: string;
  name: string;
  role: string;
  message: string;
  avatar: string;
  socials: Social[];
}

const profile = {
  site: 'lluanoliveira.dev',
  name: 'Luan Eli Oliveira',
  role: 'Sr Software Engineer',
  message: 'helping companies build amazing products',
  avatar: 'https://github.com/luanelioliveira.png',
  socials: [
    {
      id: 'instagram',
      name: 'Instagram',
      link: 'https://www.instagram.com/luanoliveira.dev',
    },
    {
      id: 'linkedin',
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/luanoliveira',
    },
    {
      id: 'github',
      name: 'Github',
      link: 'https://github.com/luanelioliveira',
    },
    {
      id: 'mail',
      name: 'Mail',
      link: 'mailto:luannN@gmail.com',
    },
  ],
} as Profile;

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Home | {profile.name}</title>
      </Head>
      <VStack
        spacing={16}
        height={['95vh', '100vh']}
        align="center"
        justify="space-around"
      >
        <Box>
          <Center>
            <Image
              mb={4}
              borderRadius="full"
              boxSize="150px"
              alt={profile.name}
              src={profile.avatar}
            />
          </Center>

          <VStack>
            <Box>
              <Heading>{profile.name}</Heading>
            </Box>
            <Box>
              <Text fontSize="medium" as="samp" color="gray.600">
                {profile.role}
              </Text>
            </Box>
          </VStack>
        </Box>

        <Box>
          <Center>
            <Text fontSize="small" as="cite" color="gray.600">
              {profile.message} {'[...]'}
            </Text>
          </Center>
        </Box>

        <Box>
          <VStack>
            <Box>
              <HStack>
                {profile.socials.map((social) => {
                  return (
                    <Link key={social.id} href={social.link} isExternal>
                      <IconButton
                        icon={SOCIAL_ICONS[social.id]}
                        variant="link"
                        size="lg"
                        color="white"
                        aria-label={social.name}
                      />
                    </Link>
                  );
                })}
              </HStack>
            </Box>
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
          </VStack>
        </Box>
      </VStack>
    </div>
  );
}
