import { FunctionComponent } from 'react';
import useGenres from '../hooks/useGenre';

interface GenreListProps {}

const GenreList: FunctionComponent<GenreListProps> = () => {
  const { data } = useGenres();

  return (
    <ul>
      {data.map((genre) => (
        <li>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
