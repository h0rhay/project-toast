import React from 'react';
import { ToastContext } from '../../context/ToastProvider';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toast } = React.useContext(ToastContext);
  return (
    <ol
      className={styles.wrapper}
      role='region'
      aria-live='polite'
      aria-label='Notification'>
      {toast &&
        toast.map((toastItem) => (
          <li
            key={toastItem.id}
            className={styles.toastWrapper}>
            <Toast toast={toastItem} />
          </li>
        ))}
    </ol>
  );
}

export default ToastShelf;
