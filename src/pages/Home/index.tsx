import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import { useEffect } from "react";

import { fetchPopularMovies } from "../../redux/popular/asyncActions";
import { fetchRatingMovies } from "../../redux/rating/asyncActions";
import { fetchSoonReleasedMovies } from "../../redux/soonReleased/asyncActions";

import ScrollMovies from "../../components/ScrollMovies";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  const { popularMovies } = useSelector((state: RootState) => state.popular);
  const { ratingMovies } = useSelector((state: RootState) => state.rating);
  const { soonReleasedMovies } = useSelector(
    (state: RootState) => state.soonReleased
  );

  useEffect(() => {
    dispatch(fetchPopularMovies());
    dispatch(fetchRatingMovies());
    dispatch(fetchSoonReleasedMovies());
  }, []);

  return (
    <div className="container">
      <ScrollMovies title="Популярное" movies={popularMovies} />
      <ScrollMovies title="Высокий рейтинг" movies={ratingMovies} />
      <ScrollMovies title="Скоро выйдут" movies={soonReleasedMovies} />
    </div>
  );
};

export default Home;
