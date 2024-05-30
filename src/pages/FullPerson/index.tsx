import { useEffect } from "react";
import { RootState, useAppDispatch } from "../../redux/store";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ReactLoading from "react-loading";

import ScrollMovies from "../../components/ScrollMovies";

import { fetchFullPerson } from "../../redux/fullPerson/asyncActions";
import { fetchPersonCredits } from "../../redux/personCredits/asyncActions";

import styles from "./FullPerson.module.scss";

const genders = ["Не установлен", "Женский", "Мужской", "Небинарный"];

function FullPerson() {
  const dispatch = useAppDispatch();
  const { fullPerson } = useSelector((state: RootState) => state.fullPerson);
  const { personCredits } = useSelector(
    (state: RootState) => state.personCredits
  );
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchFullPerson(id));
      dispatch(fetchPersonCredits(id));
    }
  }, [id]);

  if (!fullPerson) {
    return (
      <div className="loading">
        <ReactLoading type="bars" color="#000" height={200} width={200} />
      </div>
    );
  }

  var date = new Date(fullPerson.birthday);
  var formattedDate = date.toLocaleDateString("ru-RU");

  return (
    <div className="container">
      <div className={styles.person}>
        <div className={styles.info}>
          <div className={styles.poster}>
            <img
              src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${fullPerson.profile_path}`}
              alt="Постер"
            />
          </div>
          <ul className={styles.facts}>
            <li className={styles.fact}>
              <h3>Пол</h3>
              <h4>{genders[fullPerson.gender]}</h4>
            </li>
            <li className={styles.fact}>
              <h3>Дата рождения</h3>
              <h4>{formattedDate}</h4>
            </li>
            <li className={styles.fact}>
              <h3>Место рождения</h3>
              <h4>{fullPerson.place_of_birth}</h4>
            </li>
          </ul>
        </div>
        <div className={styles.about}>
          <h2>{fullPerson.name}</h2>
          <div className={styles.biography}>
            <h3>Биография</h3>
            <p>{fullPerson.biography}</p>
          </div>
          <div className={styles.filmography}>
            <h3>Фильмография</h3>
            <ScrollMovies title={""} movies={personCredits} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullPerson;
