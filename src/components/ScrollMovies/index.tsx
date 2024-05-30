import { Link } from "react-router-dom";
import { moviesItem } from "../../redux/types";

import styles from "./ScrollMovies.module.scss";

type ScrollMoviesProps = {
  title: string;
  movies: moviesItem[];
};

const ScrollMovies: React.FC<ScrollMoviesProps> = ({ title, movies }) => {
  return (
    <div className={styles.movies}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>
        {movies.map((obj) =>
          obj.title && obj.poster_path ? (
            <li key={obj.id}>
              <Link to={`/movie/${obj.id}`}>
                <div className={styles.card}>
                  <img
                    src={
                      "https://image.tmdb.org/t/p/w220_and_h330_face" +
                      obj.poster_path
                    }
                    alt="Постер"
                  />
                  <h3>{obj.title}</h3>
                </div>
              </Link>
            </li>
          ) : (
            ""
          )
        )}
      </ul>
    </div>
  );
};

export default ScrollMovies;
