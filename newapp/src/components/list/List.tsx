import Item from "../item/Item";
function List(props: { data: string[] }) {
  const items = props.data.map((smth) => {
    return <Item key={smth} data={smth} />;
  });
  return <div>{items}</div>;
}
export default List;
