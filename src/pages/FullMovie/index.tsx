import { useEffect } from "react";
import { RootState, useAppDispatch } from "../../redux/store";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ReactLoading from "react-loading";

import { fetchFullMovie } from "../../redux/fullMovie/asyncActions";
import { fetchCast } from "../../redux/cast/asyncActions";
import { fetchRecommendations } from "../../redux/recommendations/asyncActions";

import ScrollCast from "../../components/ScrollCast";
import ScrollMovies from "../../components/ScrollMovies";

import styles from "./FullMovie.module.scss";

const FullMovie: React.FC = () => {
  const dispatch = useAppDispatch();
  const { fullMovie } = useSelector((state: RootState) => state.fullMovie);
  const { cast } = useSelector((state: RootState) => state.cast);
  const { recommendations } = useSelector(
    (state: RootState) => state.recommendations
  );
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchFullMovie(id));
      dispatch(fetchCast(id));
      dispatch(fetchRecommendations(id));
    }
  }, [id]);

  if (!fullMovie) {
    return (
      <div className="loading">
        <ReactLoading type="bars" color="#000" height={200} width={200} />
      </div>
    );
  }

  var date = new Date(fullMovie.release_date);
  var formattedDate = date.toLocaleDateString("ru-RU");

  var totalMinutes = fullMovie.runtime;
  var hours = Math.floor(totalMinutes / 60);
  var minutes = totalMinutes % 60;
  var formattedTime = hours + "h " + minutes + "m";

  return (
    <div className="container">
      <div className={styles.movie}>
        <img
          className={styles.background}
          src={`https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces${fullMovie.backdrop_path}`}
        />
        <div className={styles.poster}>
          <img
            src={
              "https://image.tmdb.org/t/p/w300_and_h450_multi_faces" +
              fullMovie.poster_path
            }
            alt="Постер фильма"
          />
        </div>
        <div className={styles.content}>
          <div className={styles.title}>
            <h2>{fullMovie.title}</h2>
            <div className={styles.facts}>
              <span className={styles.release}>{formattedDate}</span>•
              <ul className={styles.genres}>
                {fullMovie.genres.map((obj, i) => (
                  <li key={obj.name}>
                    {fullMovie.genres.length - i !== 1
                      ? `${obj.name}, `
                      : obj.name}
                  </li>
                ))}
              </ul>
              •<span className={styles.runtime}>{formattedTime}</span>
            </div>
          </div>
          <div className={styles.info}>
            {fullMovie.tagline ? (
              <h3 className={styles.tagline}>{fullMovie.tagline}</h3>
            ) : (
              ""
            )}
            {fullMovie.overview ? (
              <>
                <h3>Обзор</h3>
                <p className={styles.overview}>{fullMovie.overview}</p>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <ScrollCast cast={cast} />
      {recommendations.length ? (
        <ScrollMovies title="Рекомендации" movies={recommendations} />
      ) : (
        ""
      )}
    </div>
  );
};

export default FullMovie;
