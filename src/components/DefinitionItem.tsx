import { Box, Heading } from '@chakra-ui/react';
import { FunctionComponent, ReactNode } from 'react';

interface DefinitionItemProps {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem: FunctionComponent<DefinitionItemProps> = ({
  term,
  children,
}) => {
  return (
    <Box marginY={5}>
      <Heading as="dt" fontSize="md" color="gray.600">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionItem;
