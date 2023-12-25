import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from 'axios';
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import ProductDetail from "./pages/Product/Product-Detail";
import Product from "./pages/Product/Product";


function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      
      <BrowserRouter>
	  <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route exact path="/product" element={<Product data={data} />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route
            path="/product/product-detail/:id"
            element={<ProductDetail data={data}/>}
          ></Route>
          <Route path="*" element={<p>Not Found</p>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
