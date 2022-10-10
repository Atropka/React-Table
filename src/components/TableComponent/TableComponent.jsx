function TableComponent({ date, title, count, distanse }) {
  return (
    <>
      <tr>
        <td>{date}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>{distanse} км</td>
      </tr>
    </>
  );
}
export default TableComponent;
