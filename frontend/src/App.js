import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";

const App = () => {
  return (
    <div className="App">
      <Header />
      <h1>Welcome to Totally Awesome Apparel</h1>
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path='/cart'>
              <Route path=":id" element={<Cart />} />
              <Route path="" element={<Cart />} />
            </Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </div>

  );
};

export default App;
