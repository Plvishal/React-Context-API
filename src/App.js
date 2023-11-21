import './App.css';
import Navbar from './components/Navbar';
import Items from './components/Items';
import { useState } from 'react';
import { itemContext } from './itemContext';

function App() {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  return (
    <itemContext.Provider value={{ total, setTotal }}>
      <div className="App">
        <h2>Shopping Cart</h2>
        <Navbar />
        <Items />
      </div>
    </itemContext.Provider>
  );
}

export default App;
