import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import MyButton from "../myyButton/MyButton";

function Login() {
  const authCts = useContext(AuthContext);
  return (
    <div>
      <div>Please Login</div>
      <div>
        <MyButton
          type="button"
          stylecase="ok"
          click={() => authCts.setAuthentication(true)}
        >
          Login
        </MyButton>
      </div>
    </div>
  );
}
export default Login;
