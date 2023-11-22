import React from 'react';
import styles from '../styles/ItemCard.module.css';
import { useValue } from '../itemContext';

function ItemCard({ id, name, price }) {
  let { handleAdd, handleRemove } = useValue(); // inline  object destructuring

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button
          className={styles.itemButton}
          onClick={() => handleAdd({ id, name, price })}
        >
          Add
        </button>
        <button className={styles.itemButton} onClick={() => handleRemove(id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
