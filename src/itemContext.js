import { createContext, useContext } from 'react';
import { useState } from 'react';
import CartModal from './components/CartModal';

const itemContext = createContext();
function useValue() {
  const value = useContext(itemContext);
  return value;
}

function CustomItemContext({ children }) {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const handleAdd = (price) => {
    setTotal(total + price);
    setItem(item + 1);
  };

  const handleRemove = (price) => {
    if (total <= 0) {
      return;
    }
    setTotal((preState) => preState - price);
    setItem(item - 1);
  };
  const handleReset = () => {
    setTotal(0);
    setItem(0);
  };
  const toggle = () => {
    setShowCart(!showCart);
  };
  return (
    <itemContext.Provider
      value={{ total, item, handleAdd, handleRemove, handleReset, toggle }}
    >
      {showCart && <CartModal toggle={toggle} />}
      {children}
    </itemContext.Provider>
  );
}
export { itemContext, useValue };
export default CustomItemContext;
