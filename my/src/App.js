import React from 'react';
import AppBar from './Components/AppBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from './Components/BoxContent/Box';
import HeadNav from './Components/header_content/HeadNav';
import Product from './Components/ProductContent/Product';

function App() {
  return (
    <div>
      <HeadNav></HeadNav>
      <AppBar></AppBar>
      <Box></Box>
      <Product></Product>
    </div>
  );
}

export default App;
