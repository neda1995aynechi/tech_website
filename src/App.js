import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";

// pages
import Home from "./pages/home/Home";
import Login from "./pages/login/Login.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import { Footer } from "./containers";
import Profile from "./pages/profile/Profile.jsx";
import loginState from "./context/loin-context";
import Store from "./pages/store/Store";
import ProductDetails from "./pages/productDetails/ProductDetails";
import Cart from "./pages/cart/Cart";

function App() {
  const [user, setUser] = useState(false);
  function handleStatusLogin(el) {
    setUser(el);
  }

  return (
    <div className="App">
      {console.log(user)}
      <loginState.Provider value={user}>
        <Navbar user={user} />
        {/** pages **/}

        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route
            path="login"
            element={
              user ? <Home /> : <Login handleStatusLogin={handleStatusLogin} />
            }
          />

          <Route path="profile" element={<Profile user={user} />} />
          <Route path="store" element={<Store />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/my-cart" element={<Cart />} />
        </Routes>

        {/* test */}
        {/* {user ? <p className="text-white">{user.name}</p> : <p>try again</p>} */}

        {/* end */}

        <Footer />

        <div className="gradient__bg">{/* <Header /> */}</div>
      </loginState.Provider>
    </div>
  );
}

export default App;
