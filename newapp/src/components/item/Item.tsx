import MyButton from "../myyButton/MyButton";

function List(props: { data: string }) {
  const onDeleteHandler = () => {};
  return (
    <div>
      {props.data}{" "}
      <MyButton type="button" click={onDeleteHandler} stylecase="cancel">
        Delete
      </MyButton>
    </div>
  );
}
export default List;
