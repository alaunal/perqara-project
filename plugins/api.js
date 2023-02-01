import General from "@/api/general";
import Movies from "@/api/movies";
import TvShows from "@/api/tvShows";

export default ({ $axios, app }, inject) => {
  const factories = {
    general: General($axios),
    movies: Movies($axios),
    tvShows: TvShows($axios),
  };

  inject("api", factories);
};
