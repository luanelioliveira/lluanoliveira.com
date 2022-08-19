import { Box, Center, Heading, Image, Text, VStack } from '@chakra-ui/react';

import Head from 'next/head';

import { Footer } from '../components/Footer';
import { Profile } from '../types';

const profile = {
  site: 'lluanoliveira.dev',
  name: 'Luan Eli Oliveira',
  role: 'Sr Software Engineer',
  message: 'helping companies build amazing products',
  avatar: 'https://github.com/luanelioliveira.png',
} as Profile;

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>{`Home | ${profile.name}`}</title>
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

        <Footer />
      </VStack>
    </div>
  );
}
