import TableComponent from "./components/TableComponent/TableComponent";
import axios from "axios";
import React from "react";
import Pagination from "./components/Pagination/Pagination";

import Drawer from "./components/Drawer/Drawer";

function App() {
  const [items, setItems] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage] = React.useState(10);
  const [searchValue, setSearchValue] = React.useState("");
  const [filterOpened, setFilterOpened] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [itemsResponse] = await Promise.all([
          axios.get(
            "https://634354612dadea1175a6a35e.mockapi.io/TableComponents"
          ),
        ]);
        setItems(itemsResponse.data);
      } catch (error) {
        alert("Ошибка при запросе данных ;(");
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const sortData = (column, disign) => {
    console.log(column, disign);
    const copySort = JSON.parse(JSON.stringify(items));
    if (column === "Название" && disign === "По алфавиту") {
      const sort = copySort.sort((prev, next) => {
        if (prev.title < next.title) return -1;
        if (prev.title < next.title) return 1;
      });

      setItems(sort);
    } else if (column === "Количество" && disign === "Больше") {
      const sort1 = copySort.sort((prev, next) => prev.count - next.count);

      setItems(sort1);
    } else if (column === "Количество" && disign === "Меньше") {
      const sort11 = copySort.sort((prev, next) => next.count - prev.count);

      setItems(sort11);
    } else if (column === "Расстояние" && disign === "Больше") {
      const sort2 = copySort.sort(
        (prev, next) => prev.distanse - next.distanse
      );

      setItems(sort2);
    } else if (column === "Расстояние" && disign === "Меньше") {
      const sort2 = copySort.sort(
        (prev, next) => next.distanse - prev.distanse
      );

      setItems(sort2);
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const lastItem = currentPage * itemsPerPage;
  const firstItem = lastItem - itemsPerPage;

  const filtredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  const currentItem = filtredItems.slice(firstItem, lastItem);
  const lastPage = Math.ceil(filtredItems.length / itemsPerPage);
  const renderItems = () => {
    return currentItem.map((item) => (
      <TableComponent
        date={item.date}
        title={item.title}
        count={item.count}
        distanse={item.distanse}
      />
    ));
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const prevPage = () => setCurrentPage((prev) => prev - 1);
  return (
    <div className="App">
      <Drawer
        onClose={() => setFilterOpened(false)}
        opened={filterOpened}
        onChangeSearchInput={onChangeSearchInput}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        renderItems={renderItems}
        sortData={sortData}
      />
      <button className="settings" onClick={() => setFilterOpened(true)}>
        <ion-icon name="settings-outline"></ion-icon>
      </button>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Дата</th>
              <th>Название</th>
              <th>Количество</th>
              <th>Расстояние</th>
            </tr>
          </thead>
          <tbody>
            <>{renderItems()}</>
          </tbody>
        </table>
        <div className="nav">
          <Pagination
            totalItems={filtredItems.length}
            itemsPerPage={itemsPerPage}
            paginate={paginate}
            currentPage={currentPage}
            prevPage={prevPage}
            lastPage={lastPage}
            nextPage={nextPage}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
