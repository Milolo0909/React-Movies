import { Link } from "react-router-dom";
import { castItem } from "../../redux/types";

import styles from "./ScrollCast.module.scss";

type ScrollCastProps = {
  cast: castItem[];
};

const ScrollCast: React.FC<ScrollCastProps> = ({ cast }) => {
  return (
    <div className={styles.cast}>
      <h2 className={styles.title}>В главных ролях</h2>
      <ul className={styles.list}>
        {cast.map((obj) => (
          <li key={obj.id}>
            <Link to={`/person/${obj.id}`}>
              <div className={styles.card}>
                {obj.profile_path ? (
                  <img
                    src={
                      "https://media.themoviedb.org/t/p/w138_and_h175_face" +
                      obj.profile_path
                    }
                    alt="Постер"
                  />
                ) : (
                  <img
                    src={
                      "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
                    }
                    alt="Постер"
                  />
                )}
                <h3>{obj.name}</h3>
                <h4>{obj.character}</h4>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScrollCast;
