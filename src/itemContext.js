import { createContext } from 'react';
import { useState } from 'react';

export const itemContext = createContext();

function CustomItemContext({ children }) {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  return (
    <itemContext.Provider value={{ total, setTotal, item, setItem }}>
      {children}
    </itemContext.Provider>
  );
}

export default CustomItemContext;
