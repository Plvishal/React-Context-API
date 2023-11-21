import './App.css';
import Navbar from './components/Navbar';
import Items from './components/Items';

import CustomItemContext from './itemContext';

function App() {
  return (
    <CustomItemContext>
      <div className="App">
        <h2>Shopping Cart</h2>
        <Navbar />
        <Items />
      </div>
    </CustomItemContext>
  );
}

export default App;
