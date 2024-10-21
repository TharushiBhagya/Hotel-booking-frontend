import "./App.css";
import AdminPage from "./pages/admin/admin-page/admin";
import HomePage from "./pages/client/Client-page/homePage";
import {BrowserRouter,Route,Routes} from "react-router-dom";

function App(){
  return(
    <BrowserRouter>
    <Routes path="/*">
    <Route path="/admin/*" element={<AdminPage/>}/>
    <Route path="/*" element={<HomePage/>}/>
    </Routes>
    </BrowserRouter>
  );
}
export default App;