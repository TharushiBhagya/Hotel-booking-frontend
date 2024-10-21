import "./App.css";
import AdminPage from "./pages/admin/admin-page/admin";
import HomePage from "./pages/client/Client-page/homePage";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Layout from "./pages/client/layout/layout";
import AboutUs from "./pages/client/about/aboutUs";
import Contact from "./pages/client/contact/contact";
import Rooms from "./pages/client/crooms/crooms";
import Dining from "./pages/client/dining/dining";
import Gallery from "./pages/client/gallery/gallery";
import Services from "./pages/client/services/services";

function App(){
  return(
    <BrowserRouter>
    <Routes>
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="dining" element={<Dining />} />
            <Route path="rooms" element={<Rooms />} />
            <Route path="contact" element={<Contact />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="services" element={<Services />} />
        </Route>
    </Routes>
</BrowserRouter>
  );
}
export default App;