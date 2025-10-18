import React from 'react';
import { useParams } from 'react-router-dom';
import { useData } from '../assets/Contacts/store';
import HowToUse from '../Page/HowToUse';
import AboutAbd from '../Page/About';
import Ingredients from '../Page/Ingredients';

const CardInfoPage = () => {
  const { cardId } = useParams();
  const items = useData();
  let card;

  // Find the card by ID
  for (let item of items) {
    card = item.CardInfo.find(c => c.id === parseInt(cardId));
    if (card) break;
  }

  if (!card) return <div>الصفحة غير موجودة</div>;

  // Render the page based on card title
  const title = card.title.toLowerCase();

  
  if (title.includes('طريقة استخدام')) {
    return <HowToUse item={card} />;
  } else if (title.includes('لماذا تختارين')) {
    return <AboutAbd item={card} />;
  } else if (title.includes('مكونات')) {
    return <Ingredients item={card} />;
  } else {
    return <div>الصفحة غير موجودة</div>;
  }
};

export default CardInfoPage;
