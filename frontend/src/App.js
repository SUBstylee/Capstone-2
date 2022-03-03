import { Container } from "react-bootstrap";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

import { Route, Routes } from "react-router-dom";

const App=()=> {
  return (
    <div className="App">
    <Header />
    <main className="py-3">
      <Container>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products/:id" element={<ProductDetails/>}/>
     </Routes>
     <Footer />
     </Container>
    </main>
    </div>
    
  );
}

export default App;
