import "./myButton.css";
type ButtonProps = {
  children: string;
  stylecase: "ok" | "cancel";
  type: "submit" | "button";
  click?: () => void; //aise bhi bataskty k function ayega
};
function MyButton(props: ButtonProps) {
  return (
    <button
      type={props.type}
      onClick={props.click}
      style={
        props.stylecase === "ok"
          ? { backgroundColor: "blue " }
          : { backgroundColor: "red" }
      }
    >
      {props.children}
    </button>
  );
}
export default MyButton;
