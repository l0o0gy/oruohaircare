import React from 'react';
import { useData } from '../assets/Contacts/store';
import { Box } from '@mui/material';
import ProductDetails from '../Components/ProdictDetails';
import Info from '../Components/Info';
import Footer from '../Components/Footer';
import AutoScrollImages from '../Components/AutoScrollImages';

function Homepage() {
  const items = useData();

  return (
    <div>
      <Box>
        {items.map((item) => (
          <ProductDetails key={item.id} item={item} id="home" />
        ))}
      {items.map((item) => (
        <Info key={item.id} item={item} id="about"/>
      ))}
      <AutoScrollImages/>
      {items.map((item) => (
        <Footer key={item.id} item={item} id="contact"/>
      ))}
      </Box>
    </div>
  );
}

export default Homepage;
