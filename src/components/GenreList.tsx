import { FunctionComponent } from 'react';
import useGenres from '../hooks/useGenre';

interface GenreListProps {}

const GenreList: FunctionComponent<GenreListProps> = () => {
  const { genres } = useGenres();

  return (
    <ul>
      {genres.map((genre) => (
        <li>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
