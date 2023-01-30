import { Box, Center, Text } from '@chakra-ui/react';

interface MessageProps {
  text: string;
}

export function Message({ text }: MessageProps) {
  return (
    <Box px={'45px'}>
      <Center>
        <Text align="center" fontSize="small" as="cite" color="gray.600">
          {text}
        </Text>
      </Center>
    </Box>
  );
}
