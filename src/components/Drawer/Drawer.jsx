import React from "react";
import "./Drawer.module.scss";
import styles from "./Drawer.module.scss";
import search from "./image/search.svg";
import remove from "./image/btn-remove.svg";

function Drawer({
  onClose,
  opened,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  sortData,
}) {
  const [column, setColumn] = React.useState("");
  const [disign, setDisign] = React.useState("");

  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ""}`}>
      <div className={styles.drawer}>
        <div className={styles.head}>
          <h2>Сортировка:</h2>
          <img
            onClick={onClose}
            className="cu-p"
            src={remove}
            alt="Close"
          />{" "}
        </div>

        <div className={styles.searchBlock}>
          <img src={search} alt="Search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className={styles.clear}
              src={remove}
              alt="Clear"
            />
          )}
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Поиск..."
          />
        </div>

        <h2>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}
        </h2>

        <div className={styles.list}>
          <ul>
            Выбор колонки
            <li>
              <a href="!#" onClick={() => setColumn("Название")}>
                Название
              </a>
            </li>
            <li>
              <a href="!#" onClick={() => setColumn("Количество")}>
                Количество
              </a>
            </li>
            <li>
              <a href="!#" onClick={() => setColumn("Расстояние")}>
                Расстояние
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.list}>
          <ul>
            Выбор условия
            <li>
              <a href="!#" onClick={() => setDisign("По алфавиту")}>
                По алфавиту
              </a>
            </li>
            <li>
              <a href="!#" onClick={() => setDisign("Больше")}>
                По возрастанию
              </a>
            </li>
            <li>
              <a href="!#" onClick={() => setDisign("Меньше")}>
                По убыванию
              </a>
            </li>
          </ul>
        </div>

        <button
          className={styles.enter}
          onClick={() => sortData(column, disign)}
        >
          Применить
        </button>
      </div>
    </div>
  );
}

export default Drawer;
