import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import ProductList from "./components/ProductList";
import Register from "./components/Register";
import AddProduct from "./components/ProductForm";
import ProductManagement from "./components/ProductManagement";
import FileUpload from "./components/FileUpload";

function App() {
  return (
    <div>
      <Header />
      {/* <ProductList /> */}
      {/* <Login />  */}
      {/* <Register /> */}
      <Outlet />
      {/* <ProductManagement /> */}
      {/* <FileUpload /> */}
      {/* <AddProduct /> */}
      <Footer />
    </div>
  );
}

export default App;
