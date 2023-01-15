import { useEffect, useState } from "react";
import AddForm from "../addForm/AddForm";
import List from "../list/List";
import Logout from "../logout/Logout";
type TodoProps = {
  addItemHandler: (a: string) => void;
  items: string[];
};
function Todo() {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Running");
    }, 1000);
    return () => {
      console.log("Dead");
      clearInterval(interval);
    };
  });
  const [items, setItems] = useState<string[]>(["Hello World", "Broooo"]);
  const addItemHandler = (itemText: string) => {
    //text.push(itemText); //Data push hojayega lekin nazar nhi ayega kiun k react main runtime change k liye hamesha state use krni parti hai
    setItems([...items, itemText]);
  };
  return (
    <div>
      <List data={items} />
      <AddForm add={addItemHandler} />
      <Logout />
    </div>
  );
}
export default Todo;
