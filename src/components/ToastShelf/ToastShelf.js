import React from 'react';
import { ToastContext } from '../App';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toast } = React.useContext(ToastContext);
  return (
    <ol className={styles.wrapper}>
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
