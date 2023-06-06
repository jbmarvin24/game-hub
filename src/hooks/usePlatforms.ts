import platforms from '../data/platforms';
import useData from './useData';

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => ({ data: platforms, isLoading: null, error: null });

export default usePlatforms;
