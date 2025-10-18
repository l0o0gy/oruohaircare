import React from 'react'; 
import Homepage from './Page/Homepage';
import { DataProvider } from './assets/Contacts/store'; 
import AppBar from './Components/AppBar';
import AboutAbd from './Page/About';
import CardInfoPage from './Page/CardInfoPage';
import HowToUse from './Page/HowToUse';
import Ingredients from './Page/Ingredients'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <AppBar />
        <DataProvider>
          <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path="/info/:cardId" element={<CardInfoPage />} />
          <Route path="/about" element={<AboutAbd />} />
          <Route path="/how-to-use" element={<HowToUse />} />
          <Route path="/ingredients" element={<Ingredients />} /> 
          </Routes>
        </DataProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
