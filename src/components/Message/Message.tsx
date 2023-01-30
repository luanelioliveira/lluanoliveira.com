import { Box, Center, Text } from '@chakra-ui/react';

interface MessageProps {
  text: string;
}

export function Message({ text }: MessageProps) {
  return (
    <Box>
      <Center>
        <Text fontSize="small" as="cite" color="gray.600">
          {text}
        </Text>
      </Center>
    </Box>
  );
}
