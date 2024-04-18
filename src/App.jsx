
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/Login/Login'; 
import Register from './components/Register/Register';
import Home from './pages/Home/Home';
import Aboutus from './NavbarPages/Aboutus';
import  Contact  from './NavbarPages/Contact';
import Layout from './components/Layout/Layout';
import Products from './pages/products/Products';
import Wishlist from './pages/wishList/Wishlist';
import {Provider} from "react-redux";
import {Toaster} from "react-hot-toast"
import { store } from './store/store';
import ProductDetails from "./pages/products/ProductDetails"
import ReactProducted from './components/reactProducted/ReactProducted';
import Dashboard from "./pages/dashboard/Dashboard";
import Cart from './pages/Cart/Cart';


const App = () => {
  
  const Routing = createBrowserRouter([
    {
       path: "" ,

       element: <Layout />,

       children: [
       { path: "login", element: 
       <Login />
     }, 
       { path: "register", element: <Register/> },
       { path: "/dashboard", element: <Dashboard /> },
       { index : true , element: <Home/> },
       {  path: "Home" , element: <Home/> },
       {  path: "Aboutus" , element: <Aboutus/> },
       {  path: "Contact" , element: <Contact/> },
       {  path: "Products" , element: 
       <ReactProducted>
       <Products />
     </ReactProducted>
      },
       {  path: "Wishlist" , element: 
       <Wishlist />
      },
       {  path: "/products/:id" , element: 
       <ProductDetails />
      },

      {  path: "Cart" , element: 
       <Cart />
    }
      ],
    
    
    
    
    },
    
  ]);

  
  return (
    <Provider store={store}>
      <Toaster position="top-right" />
      <RouterProvider router={Routing} />
    </Provider>
  );
};

export default App;
