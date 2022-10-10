# React-table
_______________
## Это пример, показывающий разаработку SEO таблицы с использованием JavaScript, HTML, SCSS, React.

### Основная задача: Реализация таблицы, пагинации и сортировки




```jsx
//Был применен запрос к базе данных, использовал axios
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
```
___
```jsx
// Сортировка представлена следующим образом
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
```


## Результат работы сайта:
![resualt-1](https://sun9-79.userapi.com/impg/X0Go4CnQnRnoh4sbQwoh3nuBAeEQot36eXbR2w/WGDeMoasQl8.jpg?size=1852x927&quality=96&sign=4a004b3c2dc7b91992071912ac65ec45&type=album)
___
## Переход на страницы:
![resualt-2](https://sun9-80.userapi.com/impg/5ghH6jqGb3F8j8x1NjzYjsTf8FLAGLz6x0IA2A/oGoCEQuFHqM.jpg?size=1830x914&quality=96&sign=75b4c00edbc30c809cb5e1691954635e&type=album)
____
## Сортировка на сайте:
![resualt-3](https://sun9-79.userapi.com/impg/BX5IFEVp8YsU9E3PYHvdGLyalxvuUChV-84rYg/LD1xLWymT-M.jpg?size=1866x932&quality=96&sign=15e1783c6d24e2203c166d38a92b91a5&type=album)
____
## Поиск:
![resualt-4](https://sun9-8.userapi.com/impg/yhS_vvMYZZR-wxgxqYdyH-XvS1J-cjM87jsBYg/JGe2EhK7n5E.jpg?size=1876x934&quality=96&sign=fe14f23e5f2d1449f6b44c0c76418cae&type=album)
____
## Поиск-2:
![resualt-5](https://sun9-49.userapi.com/impg/V2wPVFrJO5hdSBTiMJxwACc9hejJchdbMp2rmg/k_Lr-L4RKB8.jpg?size=1867x935&quality=96&sign=cadbd125162d1dbbb2b613e27e9839bb&type=album)
____
## Сортировка по названию и по алфавиту:
![resualt-6](https://sun9-21.userapi.com/impg/p5Yea-X8uiBaK1z9iTgy9IVfJs0aSZVv2318Nw/8hZQm1ERqWY.jpg?size=1873x929&quality=96&sign=a5cd4f0f0d955404d42931d388a18460&type=album)
___
## Сортировка по количеству и по возрастанию:
![resualt-6](https://sun9-50.userapi.com/impg/lJ-ahKAutbU_EkBZ8H7SjlzXGaDog1o3DnpsOA/iVT2ci2Ph_8.jpg?size=1849x930&quality=96&sign=40301d4c9348d07b438a6b1e4a767e98&type=album)
__
# P.S. Я понимаю, что этот сайт возможно доработать и всячески улучшить, у меня есть идеи на этот счет и навыки для их реализации, однако хотелось выполнить задание, как можно раньше и показать свой подход и мышление. 
