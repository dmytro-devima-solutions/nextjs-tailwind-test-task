import { HTMLAttributes } from 'react';

export interface RandomMoviesSectionProps extends HTMLAttributes<HTMLDivElement> {
  // Number of movies to fetch
  count: number;
}
const RandomMoviesSection = ({ count, ...domProps }: RandomMoviesSectionProps) => {
  return <section {...domProps}>Random movies</section>;
};

export default RandomMoviesSection;
