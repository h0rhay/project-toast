import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import { ToastContext } from '../../context/ToastProvider';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ toast }) {
  const { hideToast } = React.useContext(ToastContext);
  const { message, variant } = toast;
  const Icon = ICONS_BY_VARIANT[variant];
  const statusClass = styles[variant];
  return (
    <>
      {toast.visible && (
        <div className={`${styles.toast} ${statusClass}`}>
          <div className={styles.iconContainer}>
            <Icon size={24} />
          </div>
          <p className={styles.content}>{message}</p>
          <button
            aria-label='Dismiss message'
            aria-live='off'
            className={styles.closeButton}
            onClick={() => {
              hideToast(toast.id);
            }}>
            <X size={24} />
          </button>
        </div>
      )}
    </>
  );
}

export default Toast;
