import React from 'react';
import { useData } from '../assets/Contacts/store';
import { Box } from '@mui/material';
import ProductDetails from './ProdictDetails';

function Homepage() {
  const items = useData();

  return (
    <div>
      <Box>
        {items.map((item) => (
          <ProductDetails key={item.id} item={item} />
        ))}
      </Box>
    </div>
  );
}

export default Homepage;
