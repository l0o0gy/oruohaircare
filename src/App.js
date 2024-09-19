import React from 'react'; 
import Homepage from './Page/Homepage';
import { DataProvider } from './assets/Contacts/store'; 
import AppBar from './Components/AppBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/oruohaircare">
        <AppBar />
        <DataProvider>
          <Routes>
            <Route path='/' element={<Homepage />} />
          </Routes>
        </DataProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
