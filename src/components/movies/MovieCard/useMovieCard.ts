import { MovieDto } from '@/services/movie.service';
import { useState } from 'react';

export const useMovieCard = (movie?: MovieDto) => {
  const [useImagePlaceholder, setUseImagePlaceholder] = useState(!movie?.thumbnail);
  const onImageLoadError = () => setUseImagePlaceholder(true);
  return { useImagePlaceholder, onImageLoadError };
};
