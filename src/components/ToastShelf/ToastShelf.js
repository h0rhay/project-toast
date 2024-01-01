import React from 'react';
import { ToastContext } from '../App';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import useEscapeKey from '../../hooks/useEscapeKey';

function ToastShelf() {
  const { toast, setToast } = React.useContext(ToastContext);
  useEscapeKey(() => {
    setToast([]);
  });
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
