import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//pages
import { Home, Category, Cart } from "./pages/index";
//components
import Navbar from "./components/layout/navbar/Navbar"
import Footer from "./components/layout/footer/Footer";
import store from "./store/store";
import { Provider } from "react-redux";
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path = "/cart" element = {<Cart />}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
