import { Heading } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { GameQuery } from '../App';
import useGenre from '../hooks/useGenre';
import usePlatfrom from '../hooks/usePlatform';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading: FunctionComponent<Props> = ({ gameQuery }) => {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatfrom(gameQuery.platformId);

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
