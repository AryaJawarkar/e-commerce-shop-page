import React from 'react'
import Marquee from './components/Marquee';
import Navbar from './components/Navbar';
import Products from './components/Products';
import { useGlobalContext } from './context/context';


function App() {
  return (
    <main>
<Navbar/>
<Marquee />
   <Products />
    </main>
  );
}

export default App;
