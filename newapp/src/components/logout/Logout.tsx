import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import MyButton from "../myyButton/MyButton";

function Logout() {
  const authCts = useContext(AuthContext);
  return (
    <div>
      <div>
        <MyButton
          type="button"
          stylecase="ok"
          click={() => authCts.setAuthentication(false)}
        >
          LogOut
        </MyButton>
      </div>
    </div>
  );
}
export default Logout;
