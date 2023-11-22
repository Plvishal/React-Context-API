import React from 'react';
import styles from '../styles/CartModal.module.css';
import { useValue } from '../itemContext';

function CartModal() {
  const { cart, handleRemove, total, toggle } = useValue();
  return (
    <div className={styles.cartModal}>
      <div className={styles.closeButton} onClick={toggle}>
        Close
      </div>
      <div className={styles.clearButton} onClick={handleRemove}>
        Clear
      </div>
      <div className={styles.itemContainer}>
        {cart.map((item) => {
          return (
            <div className={styles.cartCard}>
              <h1>{item.name}</h1>
              <h3>Qty:&nbsp;{item.qty}</h3>
              <h3>&#x20B9;&nbsp;{item.qty * item.price}</h3>
            </div>
          );
        })}
      </div>
      <div className={styles.total}>
        <div className={styles.totalText}>Total</div>
        <div className={styles.totalPrice}>&#x20B9;&nbsp;{total}</div>
      </div>
    </div>
  );
}

export default CartModal;
