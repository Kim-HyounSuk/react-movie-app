import base from './base';

const getPopular = async <T>(): Promise<T> => base.get('/popular').then((res) => res.data);

const getNowPlaying = async <T>(): Promise<T> => base.get('/now-playing').then((res) => res.data);

const getComingSoon = async <T>(): Promise<T> => base.get('/coming-soon').then((res) => res.data);

export const getMovie = async <T>(id: string): Promise<T> =>
  base.get(`/movie?id=${id}`).then((res) => res.data);

export const makeImagePath = (image: string) => `https://image.tmdb.org/t/p/w500${image}`;

export const makeBgPath = (image: string) => `https://image.tmdb.org/t/p/original${image}`;

export const apiMap: Record<ICategory['category'], () => Promise<IAPIResponse>> = {
  popular: getPopular,
  'coming-soon': getComingSoon,
  'now-playing': getNowPlaying,
};

export interface ICategory {
  category: 'popular' | 'coming-soon' | 'now-playing';
}

interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IMovieDetail extends IMovie {
  belongs_to_collection: BelongsToCollection;
  budget: number;
  homepage: string;
  genres: Genre[];
  imdb_id: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
}

interface BelongsToCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

interface Genre {
  id: number;
  name: string;
}

interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface IAPIResponse {
  page: number;
  results: IMovie[];
}
