import { Box, Center, Heading, Image, Text, VStack } from '@chakra-ui/react';

interface ProfileProps {
  name: string;
  avatar: string;
  role: string;
}

export function Profile({ name, avatar, role }: ProfileProps) {
  return (
    <Box>
      <Center>
        <Image mb={4} borderRadius="full" boxSize="150px" alt={name} src={avatar} />
      </Center>

      <VStack>
        <Box>
          <Heading>{name}</Heading>
        </Box>
        <Box>
          <Text fontSize="medium" as="samp" color="gray.600">
            {role}
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}
