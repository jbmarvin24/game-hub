import { Heading } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import useGenre from '../hooks/useGenre';
import usePlatfrom from '../hooks/usePlatform';
import useGameQueryStore from '../store';

interface Props {}

const GameHeading: FunctionComponent<Props> = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatfrom(platformId);

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
