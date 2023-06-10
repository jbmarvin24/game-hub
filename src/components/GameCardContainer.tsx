import { Box } from '@chakra-ui/react';
import { FunctionComponent, ReactNode } from 'react';

interface GameCardContainerProps {
  children: ReactNode;
}

const GameCardContainer: FunctionComponent<GameCardContainerProps> = ({
  children,
}) => {
  return (
    <Box
      _hover={{
        transform: 'scale(1.03)',
        transition: 'transform .15s ease-in',
      }}
      width="100%"
      borderRadius={10}
      overflow="hidden"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
