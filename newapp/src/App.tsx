import logo from "./logo.svg";
import "./App.css";
import AuthContext from "./contexts/AuthContext";
import List from "./components/list/List";
import AddForm from "./components/addForm/AddForm";
//state k liye aik or hook use krenge
import { useEffect, useState } from "react";
import Todo from "./components/todo/Todo";
import Login from "./components/login/Login";
import AuthHandler from "./components/authHandler/AuthHandler";
function App() {
  //React main 2type k components hoty 1)smart components 2)dumb components also 1)stateful components(jis main usestate istemal ho) 2)stateless com[ponents]
  //Statelesss components are always better bcz usestate main aik watcher add horha hai jo changes ko dekhne k liye mjstaqil chalrha hai

  //const text = ["Hello World", "Broooo"];
  //Use state always returns an array
  //Iskay 2 parameters hoty 1st pr data hota hau jo browser pr display krwana hai 2nd pr function hota hai jiskay through data update krty

  //Kuch aisa data hota hai jo puri app main required hota hai wo hota hai authentication data
  //Jese ab hum chahrhy hain k jo list hai wo sirf tab nazar aye jab authentication data true ho
  //iskay liye aik authentication variable banayenge jo k dynamically update hoga jese login, ye props se bhi hoskta hai lekin bhout props lagane parenge isliye hum iskay bajaye context api use krenge
  const [isAuth, setIsAuth] = useState<boolean>(false);
  // const setLoginHandler = (val: boolean) => {
  //   setIsAuth(val);
  // };
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "1";
    setIsAuth(isLoggedIn);
  }, []);
  //useEffect variables watch krta hai tou isko batana parega k konse konse variables dekho warna ye bar bar call hota rhega isliye [] dedia k first time load pr run hona sirf bar bar nhi,[] iskay andar aisi dependencies pass krtay jinki base pr useEffect ki logic chalrhi ho,jitni state related cheezein useEffect main istemal hongi wo sab k variables apko [] main dene parenge
  //User agar aik page se dusray pr chala gaya jahan first page wala component hai hi nhi tou hum kahenge component destroy hogaya
  //Use effeect component destroy hone k baad bhi chalta rehta hai
  //Isliye iska cleanup function hota haiu jo bht zaroori hai

  const ctxVal = {
    isLoggedIn: isAuth,
    setAuthentication: (val: boolean) => {
      setIsAuth(val);
      localStorage.setItem("isLoggedIn", val ? "1" : "0");
    },
  };
  return (
    <div>
      <AuthContext.Provider value={ctxVal}>
        <AuthHandler
        // setLoginHandler={setLoginHandler}
        />
      </AuthContext.Provider>
    </div>
    //Jese todo k andar context ka access chahiye tha tou context ko uska parent banadia
    //Jis k bhi andar context ka aaccess chahiye hoga uska parent banana parega context ko
    //Jese kisi card k liye banarhy tou card k module ka jo sabse parent eleement hoga uska parent banado context ko
  );
}

export default App;
