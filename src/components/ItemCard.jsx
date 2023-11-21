import React from 'react';
import styles from '../styles/ItemCard.module.css';
import { useContext } from 'react';
import { itemContext } from '../itemContext';

function ItemCard({ name, price }) {
  let { total, setTotal } = useContext(itemContext); // inline  object destructuring
  const handleAdd = () => {
    setTotal(total + price);
  };

  const handleRemove = () => {
    if (total <= 0) {
      return;
    }
    setTotal((preState) => preState - price);
  };

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd()}>
          Add
        </button>
        <button className={styles.itemButton} onClick={() => handleRemove()}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
