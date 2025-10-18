import React from 'react';
import { useData } from '../assets/Contacts/store';
import { Box } from '@mui/material';
import ProductDetails from '../Components/ProdictDetails';
import Info from '../Components/Info';
import Footer from '../Components/Footer';

function Homepage() {
  const items = useData();

  return (
    <div>
      <Box>
        {items.map((item) => (
          <ProductDetails key={item.id} item={item} />
        ))}
      {items.map((item) => (
        <Info key={item.id} item={item} />
      ))}
      {items.map((item) => (
        <Footer key={item.id} item={item} />
      ))}

      </Box>
    </div>
  );
}

export default Homepage;
