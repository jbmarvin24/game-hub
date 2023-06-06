import { Box } from '@chakra-ui/react';
import { FunctionComponent, ReactNode } from 'react';

interface GameCardContainerProps {
  children: ReactNode;
}

const GameCardContainer: FunctionComponent<GameCardContainerProps> = ({
  children,
}) => {
  return (
    <Box width="100%" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
