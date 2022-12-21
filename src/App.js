import Home from "./pages/home/Home";
import Login from "./pages/login/Login.jsx";
import List from "./pages/list/List.jsx";
import Single from "./pages/single/Single.jsx";
import New from "./pages/new/New.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {userInputs, productInputs} from "./formSource";
import "./style/dark.scss"
import { useContext } from "react";
import { darkModeContext } from "./context/darkModeContext";
import {AuthContext} from "./context/authContext";


function App() {
  const {darkMode} = useContext(darkModeContext)
  const {currentUser} = useContext(AuthContext);

  const RequireAuth = ({children})=>{
    return currentUser? children : <Login/>
  }
  
  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route index element={<RequireAuth><Home /></RequireAuth>} />
            <Route path="users">
              <Route index element={<RequireAuth><List /></RequireAuth>} /> 
              <Route path=":userId" element={<RequireAuth><Single /></RequireAuth> } />
              <Route path="new" element={<RequireAuth><New inputs={userInputs} title="Add new User" /></RequireAuth>} />
              <Route />
            </Route>
            <Route path="products">
              <Route index element={<RequireAuth><List /></RequireAuth>} />
              <Route path=":productId" element={<RequireAuth><Single /></RequireAuth>} />
              <Route path="new" element={<RequireAuth><New inputs={productInputs} title="Add new Products"  /></RequireAuth>} />
              <Route />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
