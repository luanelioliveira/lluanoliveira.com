import { Box, Center, IconButton, useColorMode } from '@chakra-ui/react';

import { RiMoonFill as MoonIcon, RiSunFill as SunIcon } from 'react-icons/ri';

export function ColorToogle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Center>
        <IconButton mt={4} aria-label="Toggle Mode" onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </IconButton>
      </Center>
    </Box>
  );
}
