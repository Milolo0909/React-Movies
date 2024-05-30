import React from "react";
import { Link } from "react-router-dom";
import { RootState, useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { fetchSearch } from "../../redux/search/asyncActions";
import debounce from "lodash.debounce";

import styles from "./Header.module.scss";

import logo from "../../assets/img/logo.svg";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const { results } = useSelector((state: RootState) => state.search);
  const [open, setOpen] = React.useState(false);

  const ref = React.useRef<HTMLDivElement>(null);

  const updateSearchValue = React.useCallback(
    debounce((q: string) => {
      dispatch(fetchSearch(q));
    }, 250),
    []
  );

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSearchValue(e.target.value);
    setOpen(true);
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !event.composedPath().includes(ref.current)) {
        setOpen(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.header} ref={ref}>
      <div className="container">
        <nav className={styles.nav}>
          <Link
            to={""}
            onClick={() => {
              setOpen(false);
            }}
          >
            <div className={styles.title}>
              <h1>React Movies</h1>
              <img src={logo} alt="logo" />
            </div>
          </Link>
          <div className={styles.search}>
            <input
              className="search"
              type="text"
              placeholder="Поиск"
              onChange={onChangeInput}
            />
            {open && results ? (
              <ul>
                {results.map((obj) => (
                  <li key={obj.id}>
                    <Link
                      to={`/movie/${obj.id}`}
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      <div className="container">
                        <h3>{obj.title ? obj.title : obj.name}</h3>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              ""
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
