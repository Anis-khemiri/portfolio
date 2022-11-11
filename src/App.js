import React from 'react';

import Header from './layouts/header/Header';
import './App.css';
import Footer from './layouts/footer/Footer';
import Main from './layouts/main/Main';

function App() {
  return (
    <>
    <div className="App">
     <Header />
<Main />
     <Footer />
    </div>
    </>
  );
}

export default App;
