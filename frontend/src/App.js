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
import Shipping from "./pages/Shipping/Shipping";
import Payment from "./pages/Payment/Payment";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Order from "./pages/Order/Order";
import UserList from "./pages/UserList/UserList";
import UserEdit from "./pages/UserEdit/UserEdit";
import ProductList from "./pages/ProductList/ProductList";
import ProductEdit from "./pages/ProductEdit/ProductEdit";
import OrderList from "./pages/OrderList/OrderList";
import SearchList from "./pages/SearchList/SearchList";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page/:pageNumber" element={<Home />} />
            <Route path="/search/:keyword" element={<SearchList />} />
            <Route path="/search/:keyword/page/:pageNumber" element={<SearchList />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/placeorder" element={<PlaceOrder />} />
            <Route path="/order/:id" element={<Order />} />
            <Route path="/admin/userlist" element={<UserList />} />
            <Route path="/admin/user/:id/edit" element={<UserEdit />} />
            <Route path="/admin/productlist" element={<ProductList />} />
            <Route path="/admin/productlist/:pageNumber" element={<ProductList />} />
            <Route path="/admin/product/:id/edit" element={<ProductEdit />} />
            <Route path="/admin/orderlist" element={<OrderList />} />
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
