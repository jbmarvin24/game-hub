import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

interface GameCardSkeletonProps {}

const GameCardSkeleton: FunctionComponent<GameCardSkeletonProps> = () => {
  return (
    <Card>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
