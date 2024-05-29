import { getRandomMovies } from '@/services/movie.service';
import { HTMLAttributes } from 'react';
import MovieCard from '../MovieCard';
import ReloadButton from '@/components/button/ReloadButton';

export interface RandomMoviesSectionProps extends HTMLAttributes<HTMLDivElement> {
  // Number of movies to fetch
  count: number;
}
const RandomMoviesSection = async ({ count, ...domProps }: RandomMoviesSectionProps) => {
  const movies = await getRandomMovies(count);

  return (
    <section {...domProps} className="px-4 py-12">
      <div className="text-4xl font-bold pb-12 flex gap-4">
        <h2 className="inline-block">Random movies</h2>
        <ReloadButton />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default RandomMoviesSection;
