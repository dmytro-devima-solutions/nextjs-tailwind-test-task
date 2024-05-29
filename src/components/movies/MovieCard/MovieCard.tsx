'use client';

import { MovieDto } from '@/services/movie.service';
import Image from 'next/image';
import Link from 'next/link';
import { HTMLAttributes } from 'react';
import { useMovieCard } from './useMovieCard';

export interface MovieCardProps extends HTMLAttributes<HTMLDivElement> {
  isLoading?: boolean;
  movie?: MovieDto;
}

const MovieCard = ({ movie, isLoading, ...domProps }: MovieCardProps) => {
  const { useImagePlaceholder, onImageLoadError } = useMovieCard(movie);

  if (isLoading) {
    return 'Loading...';
  }
  if (!movie) {
    return null;
  }

  const thumbnail = useImagePlaceholder ? (
    <div className="flex min-h-96 justify-center bg-base-200">
      <span className="text-xl font-bold my-auto">No Image</span>
    </div>
  ) : (
    <figure className="relative min-h-96">
      <Image
        fill
        className="object-cover"
        src={movie.thumbnail!}
        alt={movie.title}
        onError={onImageLoadError}
      />
    </figure>
  );

  return (
    <div {...domProps} className="card bg-base-100 shadow-xl overflow-hidden">
      {thumbnail}
      <div className="card-body">
        <h2 className="card-title">
          {movie.title}
          <div className="badge badge-secondary">{movie.year}</div>
        </h2>
        <div className="card-actions ">
          {movie.genres.map((genre) => (
            <div className="badge badge-outline" key={genre}>
              {genre}
            </div>
          ))}
        </div>
        <div className="card-actions justify-end mt-auto pt-6">
          <Link
            href={`/movie/${encodeURIComponent(`${movie.title} ${movie.year}`)}`}
            className="btn w-full btn-outline btn-primary"
          >
            More Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
