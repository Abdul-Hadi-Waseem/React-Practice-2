import { FormEvent, useRef } from "react";
import MyButton from "../myyButton/MyButton";
//Hooks are helper function takay value uthayen
//input se value uthane k liye useRef
function AddForm({ add }: { add: (a: string) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);
  let inputData = "";
  //Har jaga parent k through data pass krtay hain hu child mocule main
  //Agar child k through parent ko data dena ho jese yahan Addform se input ref parent element ie App ,isko bhejna hai tou kese hoga
  //aisi condition main hun use krenge events jo k actually props hoty hain but prop functions jo k parent main bantay hain
  const SubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    add(inputRef.current!.value);
  };
  return (
    <div>
      <form onSubmit={SubmitHandler}>
        <div>
          <label htmlFor="my-input">Enter Item</label>
          <input type="text" id="my-input" ref={inputRef} />
        </div>
        <div>
          <MyButton type="submit" stylecase="ok">
            Add
          </MyButton>
        </div>
      </form>
    </div>
  );
}
export default AddForm;
