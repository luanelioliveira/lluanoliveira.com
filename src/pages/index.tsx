import { VStack } from '@chakra-ui/react';

import Head from 'next/head';

import { Footer } from '../components/Footer';
import { Message } from '../components/Message';
import { Profile } from '../components/Profile/Profile';
import { data } from '../data/profile';

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>{`Home | ${data.name}`}</title>
      </Head>

      <VStack spacing={16} height={['95vh', '100vh']} align="center" justify="space-around">
        <Profile name={data.name} avatar={data.avatar} role={data.role} />

        <Message text={data.message} />

        <Footer socials={data.socials} />
      </VStack>
    </div>
  );
}
