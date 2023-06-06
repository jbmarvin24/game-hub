import { Badge } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

interface CriticScoreProps {
  score: number;
}

const CriticScore: FunctionComponent<CriticScoreProps> = ({ score }) => {
  let color = score > 75 ? 'green' : score > 65 ? 'yellow' : '';
  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius="4px">
      {score}
    </Badge>
  );
};

export default CriticScore;
