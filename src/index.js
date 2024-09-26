import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';
import ProductList from './components/ProductList';
import Register from './components/Register';
import Home from './components/Home';
import Categories from './components/Categories';
import About from './components/About';
import Cart from './components/Cart';
import Login from './components/Login';
import AddProduct from './components/ProductForm';
import FileUpload from './components/FileUpload';
import ProductManagement from './components/ProductManagement';
import { getAllShoes } from './model/ProductCRUD';
import store from './react-redux/store';
import { Provider } from 'react-redux';

const childRoutes = [
  {
    path: "/",
    loader: () => redirect('home')
  },
  {
    path: "product",
    element: <ProductList />,
    loader: async () => {
      return await getAllShoes();
    }
  },
  {
    path: "register",
    element: <Register />
  },
  {
    path: 'home',
    element: <Home />,
  },
  {
    path: 'categories',
    element: <Categories />,
  },
  {
    path: 'about',
    element: <About />,
  },
  {
    path: 'cart',
    element: <Cart />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'add/shoe',
    element: <AddProduct />,
  },
  {
    path: 'editpic/:_id',
    element: <FileUpload />
  },
  {
    path: 'manage/products',
    element: <ProductManagement />
  }
]
const rootRoutes = [
  {
    path: "/",
    element: <App />,
    children: childRoutes
  }
]

const router = createBrowserRouter(rootRoutes);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
