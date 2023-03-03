import { Routes, Route } from "react-router-dom";
import CreatePartner from "./components/parnerts/CreateParnert";
import PartnersList from "./components/parnerts/ParnertsList";
import ProductsList from "./components/products/ProductsList";
import Layout from "./pages/layout/Layout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import CreateUser from "./components/users/CreateUsers";
import CreateProduct from "./components/products/CreateProduct";
import LoginForm from "./components/LoginForm";


function App() {
  return (
    
      
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/newuser" element={<CreateUser />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="home" element={<Home />} />
        <Route path="parnert/register" element={<CreatePartner />} />
        <Route path="parnert/parnertsList" element={<PartnersList />} />
        <Route path="products/register" element={<CreateProduct />} />
        <Route path="products" element={<ProductsList />} />
      </Route>
    </Routes>
    
  );
}

export default App;
